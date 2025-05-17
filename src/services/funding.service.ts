import { Funding, Region, Prisma } from "@prisma/client"; // PrismaClient 제거, Prisma 타입만 사용
import {
  createFunding,
  findFundingById,
  findAllFundings, // 이 함수들은 이미 include된 데이터를 반환합니다.
  findFundingsByUserId, // 이 함수들은 이미 include된 데이터를 반환합니다.
  updateFundingDeadline,
  updateFundingStatus,
  fundingDonate,
  findParticipatedFundingsByUserId,
  findUserFundingByUserIdAndFundingId, // 추가
} from "../repositories/funding.repository";

// 펀딩 생성
export const createFundingService = async (data: {
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
  // 각 필드 유효성 검증
  if (!data.title || data.title.length > 10) {
    throw new Error("제목은 필수이며 최대 10자까지 입력 가능합니다.");
  }

  if (!data.description || data.description.length > 500) {
    throw new Error("내용은 필수이며 최대 500자까지 입력 가능합니다.");
  }

  if (!data.privacyAgreement) {
    throw new Error("개인정보 수집 및 이용에 동의해야 합니다.");
  }

  if (!data.detailAddress || data.detailAddress.length > 30) {
    throw new Error("상세 주소는 필수이며 최대 30자까지 입력 가능합니다.");
  }

  // 날짜 유효성 검증
  const now = new Date();
  if (data.deadlineDate <= now) {
    throw new Error("마감일은 현재 날짜보다 이후여야 합니다.");
  }

  if (data.completeDueDate <= data.deadlineDate) {
    throw new Error("시공 완료 예정일은 마감일 이후여야 합니다.");
  }

  // 펀딩 생성
  return await createFunding(data);
};

// 펀딩 목록 조회 (필터 및 정렬)
export const getAllFundings = async (
  region?: Region,
  align?: "rate" | "latest"
): Promise<any[]> => {
  const fundings = await findAllFundings(region, align);

  return fundings.map((funding: any) => ({
    fundingId: funding.id,
    title: funding.title,
    description: funding.description,
    photoUrl: funding.photoUrl,
    region: funding.region,
    detailAddress: funding.detailAddress,
    goalMoney: funding.goalMoney,
    fundedMoney: funding.fundedMoney,
    achievementRate: funding.goalMoney > 0 ? Math.floor((Number(funding.fundedMoney) * 100) / Number(funding.goalMoney)) : 0,
    deadlineDate: funding.deadlineDate,
    completeDueDate: funding.completeDueDate,
    isOpen: funding.status, // status를 isOpen으로 변경
    createdAt: funding.createdAt,
    updatedAt: funding.updatedAt,
    user: funding.user,
    userFundings: funding.userFundings,
    comments: funding.comments,
  }));
};

// 펀딩 상세 조회
export const getFundingById = async (id: number): Promise<any> => {
  const funding = await findFundingById(id);

  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }

  return {
    fundingId: funding.id,
    title: funding.title,
    description: funding.description,
    photoUrl: funding.photoUrl,
    region: funding.region,
    detailAddress: funding.detailAddress,
    goalMoney: funding.goalMoney,
    fundedMoney: funding.fundedMoney,
    achievementRate: funding.goalMoney > 0 ? Math.floor((Number(funding.fundedMoney) * 100) / Number(funding.goalMoney)) : 0,
    deadlineDate: funding.deadlineDate,
    completeDueDate: funding.completeDueDate,
    isOpen: funding.status, // status를 isOpen으로 변경
    createdAt: funding.createdAt,
    updatedAt: funding.updatedAt,
    userId: funding.userId, // userId 추가
  };
};

// 특정 사용자의 펀딩 목록 조회
export const getFundingsByUserId = async (userId: number): Promise<any[]> => {
  const fundings = await findFundingsByUserId(userId);

  return fundings.map((funding: any) => ({
    fundingId: funding.id,
    title: funding.title,
    description: funding.description,
    photoUrl: funding.photoUrl,
    region: funding.region,
    detailAddress: funding.detailAddress,
    goalMoney: funding.goalMoney,
    fundedMoney: funding.fundedMoney,
    achievementRate: funding.goalMoney > 0 ? Math.floor((Number(funding.fundedMoney) * 100) / Number(funding.goalMoney)) : 0,
    deadlineDate: funding.deadlineDate,
    completeDueDate: funding.completeDueDate,
    isOpen: funding.status, // status를 isOpen으로 변경
    createdAt: funding.createdAt,
    updatedAt: funding.updatedAt,
    user: funding.user,
    userFundings: funding.userFundings,
    comments: funding.comments,
  }));
};

// 펀딩 연장
export const prolongFunding = async (
  id: number,
  deadlineDate: Date
): Promise<any> => {
  const funding = await findFundingById(id);
  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }

  if (!funding.status) {
    throw new Error("이미 종료된 펀딩은 연장할 수 없습니다.");
  }

  if (deadlineDate <= funding.deadlineDate) {
    throw new Error("마감일은 기존 날짜보다 이후여야 합니다.");
  }
  const updatedFunding = await updateFundingDeadline(id, deadlineDate);
  return {
    funding_id: updatedFunding.id,
    deadline_date: updatedFunding.deadlineDate,
  };
};

// 펀딩 닫기
export const closeFunding = async (
  id: number,
  userId: number
): Promise<any> => {
  const funding = await findFundingById(id);
  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }
  if (funding.userId !== userId) {
    throw new Error("자신이 생성한 펀딩만 닫을 수 있습니다.");
  }
  if (!funding.status) {
    throw new Error("이미 닫힌 펀딩입니다.");
  }
  const updatedFunding = await updateFundingStatus(id, false);
  return {
    fundingId: updatedFunding.id,
    isOpen: updatedFunding.status, // 응답 시 isOpen 사용
  };
};

// 후원하기
export const donateFunding = async (
  fundingId: number,
  userId: number,
  userFundedMoney: bigint
): Promise<any> => {
  // 이미 후원한 펀딩인지 확인
  const existingUserFunding = await findUserFundingByUserIdAndFundingId(userId, fundingId);
  if (existingUserFunding) {
    throw new Error("이미 후원한 펀딩입니다.");
  }

  const funding = await findFundingById(fundingId);
  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }
  if (!funding.status) {
    throw new Error("이미 종료된 펀딩에는 후원할 수 없습니다.");
  }
  if (userFundedMoney <= 0) {
    throw new Error("후원 금액은 0보다 커야 합니다.");
  }
  const result = await fundingDonate(fundingId, userId, userFundedMoney);
  return {
    fundingId: result.funding.id,
    userId: userId,
    newUserFundedMoney: result.userFunding.userFundedMoney,
    updatedFundingTotal: result.funding.fundedMoney,
  };
};

// 사용자가 참여한 펀딩 목록 조회
export const getParticipatedFundingsByUserIdService = async (userId: number): Promise<any[]> => {
  const participatedFundings = await findParticipatedFundingsByUserId(userId);

  return participatedFundings.map((pf: any) => {
    return {
      fundingId: pf.id,
      title: pf.title,
      description: pf.description,
      photoUrl: pf.photoUrl,
      region: pf.region,
      detailAddress: pf.detailAddress,
      goalMoney: pf.goalMoney,
      fundedMoney: pf.fundedMoney,
      achievementRate: pf.goalMoney > 0 ? Math.floor((Number(pf.fundedMoney) * 100) / Number(pf.goalMoney)) : 0,
      deadlineDate: pf.deadlineDate,
      completeDueDate: pf.completeDueDate,
      isOpen: pf.status, // status를 isOpen으로 변경
      createdAt: pf.createdAt,
      updatedAt: pf.updatedAt,
      user: pf.user,
      userFundedMoneyThisUser: pf.userFundedMoney,
      allUserFundingsOnThisFunding: pf.userFundings,
      comments: pf.comments,
    };
  });
};