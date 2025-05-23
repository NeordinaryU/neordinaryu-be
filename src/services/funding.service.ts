import { Funding, Region, Prisma, UserFunding } from "@prisma/client";
import {
  createFunding,
  findFundingById,
  findAllFundings,
  findFundingsByUserId,
  updateFundingDeadline,
  updateFundingStatus,
  fundingDonate as fundingDonateRepository,
  findParticipatedFundingsByUserId,
  findUserFundingByUserIdAndFundingId,
} from "../repositories/funding.repository";

// 커스텀 에러 클래스 정의
export class AlreadyFundedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AlreadyFundedError";
  }
}

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
    goalMoney: Number(funding.goalMoney), // BigInt를 숫자로 변환
    fundedMoney: Number(funding.fundedMoney), // BigInt를 숫자로 변환
    achievementRate: funding.goalMoney > 0 ? Math.floor((Number(funding.fundedMoney) * 100) / Number(funding.goalMoney)) : 0,
    deadlineDate: funding.deadlineDate,
    detailAddress: funding.detailAddress,
    completeDueDate: funding.completeDueDate,
    isOpen: funding.status,
    funderCount: funding.userFundings?.length ?? 0, // 안전하게 접근
    isProlongation: funding.isProlongation, 
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
    goalMoney: Number(funding.goalMoney), // BigInt를 숫자로 변환
    fundedMoney: Number(funding.fundedMoney), // BigInt를 숫자로 변환
    achievementRate: funding.goalMoney > 0 ? Math.floor((Number(funding.fundedMoney) * 100) / Number(funding.goalMoney)) : 0,
    deadlineDate: funding.deadlineDate,
    completeDueDate: funding.completeDueDate,
    isOpen: funding.status,
    createdAt: funding.createdAt,
    updatedAt: funding.updatedAt,
    userId: funding.userId, 
    user: funding.user,
    funderCount: funding.userFundings?.length ?? 0, // 안전하게 접근
    isProlongation: funding.isProlongation,
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
    goalMoney: Number(funding.goalMoney), // BigInt를 숫자로 변환
    fundedMoney: Number(funding.fundedMoney), // BigInt를 숫자로 변환
    achievementRate: funding.goalMoney > 0 ? Math.floor((Number(funding.fundedMoney) * 100) / Number(funding.goalMoney)) : 0,
    deadlineDate: funding.deadlineDate,
    completeDueDate: funding.completeDueDate,
    isOpen: funding.status,
    createdAt: funding.createdAt,
    updatedAt: funding.updatedAt,
    user: funding.user,
    funderCount: funding.userFundings?.length ?? 0, // 안전하게 접근
    isProlongation: funding.isProlongation,
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
    isOpen: updatedFunding.status,
  };
};

// 후원하기
export const donateFunding = async (
  fundingId: number,
  userId: number,
  userFundedMoney: bigint
): Promise<any> => {
  const existingUserFunding = await findUserFundingByUserIdAndFundingId(userId, fundingId);
  if (existingUserFunding) {
    throw new AlreadyFundedError("이미 후원한 펀딩입니다.");
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
  const result = await fundingDonateRepository(fundingId, userId, userFundedMoney);
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
      photoUrl: pf.photoUrl,
      region: pf.region,
      detailAddress: pf.detailAddress,
      goalMoney: Number(pf.goalMoney),
      fundedMoney: Number(pf.fundedMoney),
      deadlineDate: pf.deadlineDate,
      completeDueDate: pf.completeDueDate,
      userFundedMoney: Number(pf.userFundedMoney),
    };
  });
};