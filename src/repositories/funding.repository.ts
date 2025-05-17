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
  return await prisma.funding.findUnique({
    where: { id },
  });
};

// 모든 펀딩 조회 (필터링 및 정렬 기능 포함)
export const findAllFundings = async (
  region?: Region,
  align?: 'rate' | 'latest'
): Promise<Funding[]> => {
  const where: Prisma.FundingWhereInput = {};
  if (region) {
    where.region = region;
  }
  
  let orderBy: Prisma.FundingOrderByWithRelationInput = {};
  
  if (align === 'latest') {
    orderBy = { createdAt: 'desc' };
  } else if (align === 'rate') {
    orderBy = { fundedMoney: 'desc' };
  }
  
  return await prisma.funding.findMany({
    where,
    orderBy,
  });
};

// 특정 사용자의 펀딩 조회
export const findFundingsByUserId = async (userId: number): Promise<Funding[]> => {
  return await prisma.funding.findMany({
    where: { userId },
  });
};

// 펀딩 마감일 업데이트 (연장)
export const updateFundingDeadline = async (
  id: number,
  deadlineDate: Date
): Promise<Funding> => {
  return await prisma.funding.update({
    where: { id },
    data: { deadlineDate },
  });
};

// 펀딩 상태 변경 (열기/닫기)
export const updateFundingIsOpen = async (
  id: number,
  isOpen: boolean
): Promise<Funding> => {
  return await prisma.funding.update({
    where: { id },
    data: { isOpen },
  });
};

// 후원 등록 및 펀딩 금액 업데이트
export const fundingDonate = async (
  fundingId: number,
  userId: number,
  userFundedMoney: bigint
): Promise<{ funding: Funding; userFunding: any }> => {
  return await prisma.$transaction(async (tx) => {
    const existingUserFunding = await tx.userFunding.findFirst({
      where: {
        userId,
        fundingId,
      },
    });

    let newUserFundedMoney: bigint;
    let userFunding;

    if (existingUserFunding) {
      newUserFundedMoney = existingUserFunding.userFundedMoney + userFundedMoney;
      userFunding = await tx.userFunding.update({
        where: { id: existingUserFunding.id },
        data: { userFundedMoney: newUserFundedMoney },
      });
    } else {
      newUserFundedMoney = userFundedMoney;
      userFunding = await tx.userFunding.create({
        data: {
          userId,
          fundingId,
          userFundedMoney,
        },
      });
    }

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