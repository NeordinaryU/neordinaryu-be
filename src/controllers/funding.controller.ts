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
      deadlineDate: new Date(deadlineDate),
      photoUrl,
      region,
      detailAddress,
      completeDueDate: new Date(completeDueDate),
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
  } catch (err) {
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
    
    res.sendSuccess(200, "펀딩 상세 정보를 성공적으로 불러왔습니다.", funding);
  } catch (err) {
    next(err);
  }
};

// 4. 특정 사용자 작성 펀딩 글 조회
export const getUserFundingsHandler: RequestHandler = async (req, res, next) => {
  try {
    const { userId } = req.params;
    
    // ID 유효성 검증
    if (!userId || isNaN(Number(userId))) {
      res.sendError(400, "유효한 사용자 ID가 필요합니다.");
      return;
    }
    
    const fundings = await getFundingsByUserId(Number(userId));
    
    res.sendSuccess(200, "사용자의 펀딩 목록 조회에 성공했습니다.", fundings);
  } catch (err) {
    next(err);
  }
};

// 5. 펀딩 연장하기
export const prolongFundingHandler: RequestHandler = async (req, res, next) => {
  try {
    const { funding: fundingId } = req.params;
    const { deadline_date } = req.body;
    
    // ID 유효성 검증
    if (!fundingId || isNaN(Number(fundingId))) {
      res.sendError(400, "유효한 펀딩 ID가 필요합니다.");
      return;
    }
    
    // 날짜 유효성 검증
    if (!deadline_date) {
      res.sendError(400, "마감일(deadline_date)은 필수입니다.");
      return;
    }
    
    const result = await prolongFunding(
      Number(fundingId),
      new Date(deadline_date)
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
    const { user_id, user_funded_money } = req.body;
    
    // 필수 파라미터 검증
    if (!user_id) {
      res.sendError(400, "유저 ID(user_id)는 필수입니다.");
      return;
    }
    
    if (!user_funded_money) {
      res.sendError(400, "후원 금액(user_funded_money)은 필수입니다.");
      return;
    }
    
    // ID 유효성 검증
    if (!fundingId || isNaN(Number(fundingId))) {
      res.sendError(400, "유효한 펀딩 ID가 필요합니다.");
      return;
    }
    
    const result = await donateFunding(
      Number(fundingId),
      Number(user_id),
      BigInt(user_funded_money)
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
