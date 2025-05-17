import { Router } from "express";
import {
  createFundingHandler,
  getFundingsHandler,
  getFundingDetailsHandler,
  getUserFundingsHandler,
  prolongFundingHandler,
  closeFundingHandler,
  donateFundingHandler,
} from "../controllers/funding.controller";

const router = Router();

// 1. 펀딩 글 작성
router.post("/", createFundingHandler);

// 2. 펀딩 목록 조회
router.get("/", getFundingsHandler);

// 3. 펀딩 글 상세 조회
router.get("/:fundingId", getFundingDetailsHandler);

// 4. 특정 사용자 작성 펀딩 글 조회 (사용자 라우트에 정의)
// router.get("/users/:userId/fundings", getUserFundingsHandler);

// 5. 펀딩 연장하기
router.patch("/:funding/prolongation", prolongFundingHandler);

// 6. 펀딩 닫기
router.patch("/:fundingId/close", closeFundingHandler);

// 7. 후원하기
router.patch("/:fundingId/donate", donateFundingHandler);

export default router; 