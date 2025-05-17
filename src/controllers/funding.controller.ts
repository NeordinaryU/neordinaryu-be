import { RequestHandler } from "express";
import { Region } from "@prisma/client";
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  createFundingService,
  getAllFundings,
  getFundingById,
  getFundingsByUserId,
  getParticipatedFundingsByUserIdService,
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
    const userId = req.user?.id; // 사용자 ID 추출
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
    // isOwner 판별
    const isOwner = userId && funding.userId === userId ? true : false;
    // userId는 응답에서 제거하고, isOwner만 추가
    const { userId: _, ...fundingData } = funding;
    res.sendSuccess(200, "펀딩 상세 정보를 성공적으로 불러왔습니다.", { ...fundingData, isOwner });
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

// 후원하기
export const donateFundingController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { // 반환 타입 명시
  try {
    const fundingId = parseInt(req.params.fundingId);
    const userId = req.user!.id; // authenticateToken 미들웨어에서 설정된 사용자 ID
    const { userFundedMoney } = req.body;

    if (isNaN(fundingId)) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "펀딩 ID가 유효하지 않습니다." });
      return; // void 반환을 위해 return 추가
    }

    if (userFundedMoney === undefined || userFundedMoney === null) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: "후원 금액을 입력해주세요." });
      return; // void 반환을 위해 return 추가
    }

    const result = await donateFunding(
      fundingId,
      userId,
      BigInt(userFundedMoney)
    );
    res.sendSuccess(
      StatusCodes.OK,
      "후원이 성공적으로 완료되었습니다.",
      result
    );
    // 성공 시에도 명시적으로 반환하지 않음 (sendSuccess가 응답을 종료)
  } catch (error) {
    next(error);
  }
};

// 내가 참여한 펀딩 목록 조회
export const getParticipatedFundingsController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { // 반환 타입 명시
  try {
    const userId = req.user!.id; // authenticateToken 미들웨어에서 설정된 사용자 ID
    const fundings = await getParticipatedFundingsByUserIdService(userId);
    res.sendSuccess(
      StatusCodes.OK,
      "내가 참여한 펀딩 목록을 성공적으로 불러왔습니다.",
      fundings
    );
    // 성공 시에도 명시적으로 반환하지 않음 (sendSuccess가 응답을 종료)
  } catch (error) {
    next(error);
  }
};
