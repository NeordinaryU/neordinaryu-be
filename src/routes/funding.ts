import express from "express";
import {
  createFundingHandler,
  getFundingsHandler,
  getFundingDetailsHandler,
  getUserFundingsHandler,
  prolongFundingHandler,
  closeFundingHandler,
  donateFundingController,
  getParticipatedFundingsController,
} from "../controllers/funding.controller";
import { authenticateToken } from "../utils/auth.middleware";

const router = express.Router();

// 펀딩 생성
router.post("/", authenticateToken, createFundingHandler);

// 펀딩 목록 조회
router.get("/", getFundingsHandler);

// 내가 참여한 펀딩 목록 조회 (/:fundingId 보다 먼저 정의)
router.get("/participated", authenticateToken, getParticipatedFundingsController);

// 내가 생성한 펀딩 목록 조회
router.get("/my", authenticateToken, getUserFundingsHandler);

// 펀딩 상세 조회 (구체적인 경로들 뒤로 이동)
router.get("/:fundingId", getFundingDetailsHandler);

// 펀딩 연장
router.patch("/:fundingId/prolongation", authenticateToken, prolongFundingHandler);

// 펀딩 닫기
router.patch("/:fundingId/close", authenticateToken, closeFundingHandler);

// 후원하기
router.post("/:id/donate", authenticateToken, donateFundingController);

export default router;