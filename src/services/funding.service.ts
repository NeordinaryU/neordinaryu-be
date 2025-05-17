import { Funding, Region } from "@prisma/client";
import {
  createFunding,
  findFundingById,
  findAllFundings,
  findFundingsByUserId,
  updateFundingDeadline,
  updateFundingStatus,
  fundingDonate,
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
  align?: 'rate' | 'latest'
): Promise<any[]> => {
  const fundings = await findAllFundings(region, align);
  
  // 응답 데이터 포맷팅
  return fundings.map(funding => ({
    fundingId: funding.id,
    title: funding.title,
    photoUrl: funding.photoUrl,
    region: funding.region,
    goalMoney: funding.goalMoney,
    fundedMoney: funding.fundedMoney,
    achievementRate: Math.floor((funding.fundedMoney * 100) / Number(funding.goalMoney)),
    deadlineDate: funding.deadlineDate,
  }));
};

// 펀딩 상세 조회
export const getFundingById = async (id: number): Promise<any> => {
  const funding = await findFundingById(id);

  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }

  // 응답 데이터 포맷팅
  return {
    title: funding.title,
    photoUrl: funding.photoUrl,
    region: funding.region,
    detailAddress: funding.detailAddress,
    deadlineDate: funding.deadlineDate,
    completeDueDate: funding.completeDueDate,
    goalMoney: funding.goalMoney,
    applicantComment: funding.description,
  };
};

// 특정 사용자의 펀딩 목록 조회
export const getFundingsByUserId = async (userId: number): Promise<any[]> => {
  const fundings = await findFundingsByUserId(userId);

  // 응답 데이터 포맷팅
  return fundings.map(funding => ({
    fundingId: funding.id,
    title: funding.title,
    photoUrl: funding.photoUrl,
    region: funding.region,
    detailAddress: funding.detailAddress,
    deadlineDate: funding.deadlineDate,
    completeDueDate: funding.completeDueDate,
    goalMoney: funding.goalMoney,
    fundedMoney: funding.fundedMoney,
    isOpen: funding.status,
  }));
};

// 펀딩 연장
export const prolongFunding = async (
  id: number,
  deadlineDate: Date
): Promise<any> => {
  // 펀딩 존재 확인
  const funding = await findFundingById(id);
  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }

  // 현재 활성 상태인지 확인
  if (!funding.status) {
    throw new Error("이미 종료된 펀딩은 연장할 수 없습니다.");
  }

  // 날짜 유효성 검증
  if (deadlineDate <= funding.deadlineDate) {
    throw new Error("마감일은 기존 날짜보다 이후여야 합니다.");
  }

  // 펀딩 연장
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
  // 펀딩 존재 확인
  const funding = await findFundingById(id);
  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }

  // 권한 확인
  if (funding.userId !== userId) {
    throw new Error("자신이 생성한 펀딩만 닫을 수 있습니다.");
  }

  // 이미 닫혔는지 확인
  if (!funding.status) {
    throw new Error("이미 닫힌 펀딩입니다.");
  }

  // 펀딩 닫기
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
  // 펀딩 존재 확인
  const funding = await findFundingById(fundingId);
  if (!funding) {
    throw new Error("펀딩을 찾을 수 없습니다.");
  }

  // 활성 상태 확인
  if (!funding.status) {
    throw new Error("이미 종료된 펀딩에는 후원할 수 없습니다.");
  }

  // 금액 유효성 검증
  if (userFundedMoney <= 0) {
    throw new Error("후원 금액은 0보다 커야 합니다.");
  }

  // 후원 처리
  const result = await fundingDonate(fundingId, userId, userFundedMoney);

  return {
    funding_id: result.funding.id,
    user_id: userId,
    new_user_funded_money: result.userFunding.userFundedMoney,
    updated_funding_total: result.funding.fundedMoney,
  };
}; 