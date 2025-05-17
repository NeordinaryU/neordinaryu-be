import { RequestHandler } from "express";
import { Region } from "@prisma/client";
import {
  createFundingService,
  getAllFundings,
  getFundingById,
  getFundingsByUserId,
  prolongFunding,
  closeFunding,
  donateFunding,
} from "../services/funding.service";

// 확장된 Request 타입을 위한 인터페이스 정의
declare global {
  namespace Express {
    interface User {
      id: number;
    }
  }
}

// 1. 펀딩 글 작성
export const createFundingHandler: RequestHandler = async (req, res, next) => {
  try {
    const {
      title,
      description,
      goalMoney,
      deadlineDate,
      completeDueDate,
      region,
      detailAddress,
      photoUrl,
      privacyAgreement,
    } = req.body;

    // 사용자 ID는 실제로는 인증 미들웨어에서 설정되어야 함
    // 여기서는 임시로 req.user에서 가져온다고 가정
    const userId = req.user?.id;
    
    if (!userId) {
      res.sendError(401, "로그인이 필요합니다.");
      return;
    }

    // 필수 필드 검증
    if (!title || !description || !goalMoney || !deadlineDate || !completeDueDate || !region || !detailAddress) {
      res.sendError(400, "모든 필수 필드를 입력해주세요.");
      return;
    }

    // 금액 검증
    if (isNaN(Number(goalMoney)) || Number(goalMoney) <= 0) {
      res.sendError(400, "목표 금액은 양수여야 합니다.");
      return;
    }

    // 날짜 검증
    const currentDate = new Date();
    const parsedDeadlineDate = new Date(deadlineDate);
    const parsedCompleteDueDate = new Date(completeDueDate);
    
    if (isNaN(parsedDeadlineDate.getTime())) {
      res.sendError(400, "유효한 마감일을 입력해주세요.");
      return;
    }
    
    if (isNaN(parsedCompleteDueDate.getTime())) {
      res.sendError(400, "유효한 완료 예정일을 입력해주세요.");
      return;
    }
    
    if (parsedDeadlineDate <= currentDate) {
      res.sendError(400, "마감일은 현재보다 미래 날짜여야 합니다.");
      return;
    }
    
    if (parsedCompleteDueDate <= parsedDeadlineDate) {
      res.sendError(400, "완료 예정일은 마감일보다 미래 날짜여야 합니다.");
      return;
    }

    // 개인정보 동의 검증
    if (privacyAgreement !== true) {
      res.sendError(400, "개인정보 이용약관에 동의해주세요.");
      return;
    }

    // Region enum 타입 검증
    if (!Object.values(Region).includes(region as Region)) {
      res.sendError(400, `지역은 다음 중 하나여야 합니다: ${Object.values(Region).join(", ")}`);
      return;
    }

    const funding = await createFundingService({
      userId,
      title,
      description,
      goalMoney: BigInt(goalMoney),
      deadlineDate: parsedDeadlineDate,
      photoUrl,
      region,
      detailAddress,
      completeDueDate: parsedCompleteDueDate,
      privacyAgreement,
    });

    res.sendSuccess(201, "펀딩이 성공적으로 등록되었습니다.", {
      fundingId: funding.id,
      title: funding.title,
    });
  } catch (err: any) {
    next(err);
  }
};

// 2. 펀딩 목록 조회
export const getFundingsHandler: RequestHandler = async (req, res, next) => {
  try {
    const { region, align } = req.query;

    // 필수 파라미터 검증
    if (!region) {
      res.sendError(400, "지역(region)은 필수 파라미터입니다.");
      return;
    }

    // Region enum 타입 검증
    if (!Object.values(Region).includes(region as Region)) {
      res.sendError(400, `지역은 다음 중 하나여야 합니다: ${Object.values(Region).join(", ")}`);
      return;
    }

    // 정렬 옵션 검증
    if (align && !['rate', 'latest'].includes(align as string)) {
      res.sendError(400, "정렬 옵션은 'rate' 또는 'latest'여야 합니다.");
      return;
    }

    const fundings = await getAllFundings(
      region as Region,
      align as 'rate' | 'latest' | undefined
    );

    res.sendSuccess(200, "펀딩 목록을 성공적으로 조회했습니다.", fundings);
  } catch (err: any) {
    next(err);
  }
};

// 3. 펀딩 글 상세 조회
export const getFundingDetailsHandler: RequestHandler = async (req, res, next) => {
  try {
    const { fundingId } = req.params;
    
    // ID 유효성 검증
    if (!fundingId || isNaN(Number(fundingId))) {
      res.sendError(400, "유효한 펀딩 ID가 필요합니다.");
      return;
    }
    
    const funding = await getFundingById(Number(fundingId));
    
    if (!funding) {
      res.sendError(404, "해당 ID의 펀딩을 찾을 수 없습니다.");
      return;
    }
    
    res.sendSuccess(200, "펀딩 상세 정보를 성공적으로 불러왔습니다.", funding);
  } catch (err: any) {
    next(err);
  }
};

// 4. 특정 사용자 작성 펀딩 글 조회
export const getUserFundingsHandler: RequestHandler = async (req, res, next) => {
  try {
    // 인증된 사용자의 ID 사용
    const userId = req.user?.id;
    
    // 인증 검증
    if (!userId) {
      res.sendError(401, "인증이 필요한 기능입니다.");
      return;
    }
    
    const fundings = await getFundingsByUserId(userId);
    
    res.sendSuccess(200, "내 펀딩 목록 조회에 성공했습니다.", fundings);
  } catch (err: any) {
    next(err);
  }
};

// 5. 펀딩 연장하기
export const prolongFundingHandler: RequestHandler = async (req, res, next) => {
  try {
    const { fundingId } = req.params;
    const { deadlineDate } = req.body;
    const userId = req.user?.id;
    
    // 인증 검증
    if (!userId) {
      res.sendError(401, "인증이 필요한 기능입니다.");
      return;
    }
    
    // ID 유효성 검증
    if (!fundingId || isNaN(Number(fundingId))) {
      res.sendError(400, "유효한 펀딩 ID가 필요합니다.");
      return;
    }
    
    // 날짜 유효성 검증
    if (!deadlineDate) {
      res.sendError(400, "마감일(deadlineDate)은 필수입니다.");
      return;
    }
    
    const parsedDeadlineDate = new Date(deadlineDate);
    const currentDate = new Date();
    
    if (isNaN(parsedDeadlineDate.getTime())) {
      res.sendError(400, "유효한 날짜 형식을 입력해주세요.");
      return;
    }
    
    if (parsedDeadlineDate <= currentDate) {
      res.sendError(400, "마감일은 현재보다 미래 날짜여야 합니다.");
      return;
    }
    
    const result = await prolongFunding(
      Number(fundingId),
      parsedDeadlineDate
    );
    
    res.sendSuccess(200, "펀딩 일정이 성공적으로 연장되었습니다.", result);
  } catch (err: any) {
    if (err.message) {
      res.sendError(400, "펀딩 일정 연장에 실패했습니다.", err.message);
      return;
    }
    next(err);
  }
};

// 6. 내가 개설한 펀딩 닫기
export const closeFundingHandler: RequestHandler = async (req, res, next) => {
  try {
    const { fundingId } = req.params;
    
    // 사용자 ID는 실제로는 인증 미들웨어에서 설정되어야 함
    const userId = req.user?.id;
    
    if (!userId) {
      res.sendError(401, "로그인이 필요합니다.");
      return;
    }
    
    // ID 유효성 검증
    if (!fundingId || isNaN(Number(fundingId))) {
      res.sendError(400, "유효한 펀딩 ID가 필요합니다.");
      return;
    }
    
    const result = await closeFunding(Number(fundingId), userId);
    
    res.sendSuccess(200, "펀딩이 성공적으로 닫혔습니다.", result);
  } catch (err: any) {
    if (err.message) {
      res.sendError(400, err.message);
      return;
    }
    next(err);
  }
};

// 7. 후원하기
export const donateFundingHandler: RequestHandler = async (req, res, next) => {
  try {
    const { fundingId } = req.params;
    const { userFundedMoney } = req.body;
    const userId = req.user?.id;
    
    // 인증 검증
    if (!userId) {
      res.sendError(401, "인증이 필요한 기능입니다.");
      return;
    }
    
    // 후원 금액 검증
    if (!userFundedMoney) {
      res.sendError(400, "후원 금액(userFundedMoney)은 필수입니다.");
      return;
    }
    
    if (isNaN(Number(userFundedMoney)) || Number(userFundedMoney) <= 0) {
      res.sendError(400, "후원 금액은 양수여야 합니다.");
      return;
    }
    
    // ID 유효성 검증
    if (!fundingId || isNaN(Number(fundingId))) {
      res.sendError(400, "유효한 펀딩 ID가 필요합니다.");
      return;
    }
    
    // 펀딩 존재 여부 확인
    const funding = await getFundingById(Number(fundingId));
    
    if (!funding) {
      res.sendError(404, "해당 ID의 펀딩을 찾을 수 없습니다.");
      return;
    }
    
    // 자신의 펀딩에 후원하는 것 방지
    if (funding.userId === userId) {
      res.sendError(400, "자신이 개설한 펀딩에는 후원할 수 없습니다.");
      return;
    }
    
    const result = await donateFunding(
      Number(fundingId),
      userId,
      BigInt(userFundedMoney)
    );
    
    res.sendSuccess(200, "후원이 성공적으로 완료되었습니다.", result);
  } catch (err: any) {
    if (err.message) {
      res.sendError(400, err.message);
      return;
    }
    next(err);
  }
};
