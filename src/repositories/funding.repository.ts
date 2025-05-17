import { PrismaClient, Funding, Region, Prisma } from "@prisma/client";
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
export const findFundingById = async (id: number): Promise<Funding | null> => {
  const funding = await prisma.funding.findUnique({
    where: { id },
  });
  return funding;
};

// 모든 펀딩 조회 (필터링 및 정렬 기능 포함)
export const findAllFundings = async (
  region?: Region,
  align?: 'rate' | 'latest'
): Promise<Funding[]> => {
  const where = region ? { region } : {};
  
  let orderBy: Prisma.FundingOrderByWithRelationInput = {};
  
  if (align === 'latest') {
    orderBy = { createdAt: 'desc' };
  } else if (align === 'rate') {
    // 달성률 기준 정렬을 위한 계산 (현재는 단순 fundedMoney 기준)
    orderBy = { fundedMoney: 'desc' };
  }
  
  const fundings = await prisma.funding.findMany({
    where,
    orderBy,
  });
  return fundings;
};

// 특정 사용자의 펀딩 조회
export const findFundingsByUserId = async (userId: number): Promise<Funding[]> => {
  const fundings = await prisma.funding.findMany({
    where: { userId },
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
    data: { deadlineDate },
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
    const funding = await tx.funding.update({
      where: { id: fundingId },
      data: {
        fundedMoney: {
          increment: Number(userFundedMoney),
        },
      },
    });

    return { funding, userFunding };
  });
};