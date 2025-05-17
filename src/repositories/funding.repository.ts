import { PrismaClient, Funding, Region, Prisma, UserFunding } from "@prisma/client";
export const prisma = new PrismaClient({ log: ["query"] });

// 펀딩 생성
export const createFunding = async (data: {
  userId: number;
  title: string;
  description: string;
  goalMoney: bigint;
  deadlineDate: Date;
  photoUrl: string;
  region: Region;
  detailAddress: string;
  completeDueDate: Date;
  privacyAgreement: boolean;
}): Promise<Funding> => {
  return await prisma.funding.create({
    data: {
      ...data,
      fundedMoney: 0,
    },
  });
};

// 펀딩 ID로 조회
export const findFundingById = async (id: number): Promise<any> => {
  const funding = await prisma.funding.findUnique({
    where: { id },
    include: {
      userFundings: true, // 후원자 정보 포함
    },
  });
  return funding;
};

// 모든 펀딩 조회 (필터링 및 정렬 기능 포함)
export const findAllFundings = async (
  region?: Region,
  align?: "rate" | "latest"
): Promise<Funding[]> => {
  const where = region ? { region } : {};

  let orderBy: Prisma.FundingOrderByWithRelationInput = {};

  if (align === "latest") {
    orderBy = { createdAt: "desc" };
  } else if (align === "rate") {
    // 달성률 기준 정렬을 위한 계산 (현재는 단순 fundedMoney 기준)
    // Prisma는 직접적인 계산 필드 정렬을 지원하지 않으므로,
    // fundedMoney / goalMoney 같은 비율로 정렬하려면
    // 데이터베이스 레벨에서 뷰를 만들거나, 애플리케이션 레벨에서 정렬해야 합니다.
    // 여기서는 fundedMoney를 기준으로 정렬합니다.
    orderBy = { fundedMoney: "desc" };
  }

  const fundings = await prisma.funding.findMany({
    where,
    orderBy,
    include: {
      user: { // 펀딩 생성자 정보
        select: {
          userId: true,
          region: true,
        }
      }, 
      userFundings: { // 해당 펀딩에 참여한 사용자들의 후원 정보
        select: {
          userId: true,
          userFundedMoney: true,
          user: {
            select: {
              userId: true, // 후원한 사용자의 ID
            }
          }
        }
      },
      comments: { // 해당 펀딩의 댓글 정보
        select: {
          content: true,
          createdAt: true,
          user: {
            select: {
              userId: true, // 댓글 작성자 ID
            }
          }
        },
        orderBy: {
          createdAt: 'desc' // 최신 댓글 순
        }
      }
    },
  });
  return fundings;
};

// 특정 사용자의 펀딩 조회
export const findFundingsByUserId = async (userId: number): Promise<Funding[]> => {
  const fundings = await prisma.funding.findMany({
    where: { userId },
    include: {
      user: {
        select: {
          userId: true,
          region: true,
        }
      },
      userFundings: {
        select: {
          userId: true,
          userFundedMoney: true,
          user: {
            select: {
              userId: true,
            }
          }
        }
      },
      comments: {
        select: {
          content: true,
          createdAt: true,
          user: {
            select: {
              userId: true,
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      }
    },
  });
  return fundings;
};

// 펀딩 마감일 업데이트 (연장)
export const updateFundingDeadline = async (
  id: number,
  deadlineDate: Date
): Promise<Funding> => {
  const funding = await prisma.funding.update({
    where: { id },
    data: { deadlineDate, isProlongation: true },
  });
  return funding;
};

// 펀딩 상태 변경 (닫기)
export const updateFundingStatus = async (
  id: number,
  newStatus: boolean
): Promise<Funding> => {
  const funding = await prisma.funding.update({
    where: { id },
    data: { status: newStatus },
  });
  return funding;
};

// 후원 등록 및 펀딩 금액 업데이트
export const fundingDonate = async (
  fundingId: number,
  userId: number,
  userFundedMoney: bigint
): Promise<{ funding: Funding; userFunding: any }> => {
  // 트랜잭션으로 처리
  return await prisma.$transaction(async (tx) => {
    // 1. 기존 user_funding 조회
    const existingUserFunding = await tx.userFunding.findFirst({
      where: {
        userId,
        fundingId,
      },
    });

    let newUserFundedMoney: bigint;
    
    // 2. UserFunding 업데이트 또는 생성
    let userFunding;
    if (existingUserFunding) {
      // 기존 후원 금액에 새로운 금액 추가
      newUserFundedMoney = existingUserFunding.userFundedMoney + userFundedMoney;
      
      userFunding = await tx.userFunding.update({
        where: { id: existingUserFunding.id },
        data: { userFundedMoney: newUserFundedMoney },
      });
    } else {
      // 새 후원 등록
      newUserFundedMoney = userFundedMoney;
      
      userFunding = await tx.userFunding.create({
        data: {
          userId,
          fundingId,
          userFundedMoney,
        },
      });
    }

    // 3. 펀딩 총액 업데이트
    // 현재 펀딩 정보 조회
    const currentFunding = await tx.funding.findUnique({
      where: { id: fundingId },
      select: { fundedMoney: true }
    });
    
    if (!currentFunding) {
      throw new Error("펀딩을 찾을 수 없습니다.");
    }
    
    // 새로운 총액 계산 (BigInt 연산)
    const newFundedMoney = BigInt(currentFunding.fundedMoney) + userFundedMoney;
    
    const funding = await tx.funding.update({
      where: { id: fundingId },
      data: {
        fundedMoney: newFundedMoney,
      },
    });

    return { funding, userFunding };
  });
};

// 사용자가 참여한 펀딩 목록 조회
export const findParticipatedFundingsByUserId = async (userId: number): Promise<any[]> => {
  const userFundings = await prisma.userFunding.findMany({
    where: { userId },
    include: {
      funding: { // Funding 정보 포함
        include: { // Funding 상세 정보 내 추가 정보 포함
          user: { // 펀딩 생성자 정보
            select: {
              userId: true,
              region: true,
            }
          },
          comments: { // 해당 펀딩의 댓글 정보
            select: {
              content: true,
              createdAt: true,
              user: {
                select: {
                  userId: true, // 댓글 작성자 ID
                }
              }
            },
            orderBy: {
              createdAt: 'desc' // 최신 댓글 순
            }
          }
        }
      },
    },
    orderBy: {
      createdAt: 'desc', // 최신순으로 정렬하거나 필요에 따라 변경
    },
  });

  return userFundings.map(uf => ({
    ...uf.funding, // Funding의 모든 필드 (user, comments 포함)
    userFundedMoney: uf.userFundedMoney, // 사용자가 해당 펀딩에 후원한 금액
    // userFundings 필드는 이미 uf.funding 내에 포함되어 있을 수 있으나,
    // 명시적으로 참여한 사용자의 후원금액만 최상위로 가져오기 위해 uf.userFundedMoney를 사용합니다.
    // 만약 uf.funding.userFundings도 필요하다면, Prisma include 구조를 조정해야 합니다.
    // 현재 구조에서는 uf.funding.userFundings는 해당 펀딩의 모든 참여자 정보를 가져옵니다.
  }));
};
