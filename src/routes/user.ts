import { Router, RequestHandler } from "express";
import {
  createUserHandler,
  updateRegionHandler,
  getUserRegionController, // Add this import
} from "../controllers/user.controller";
import { getUserFundingsHandler } from "../controllers/funding.controller";
import { loginController } from "../controllers/auth.controller";
import { requireAuth, authenticateToken } from "../utils/auth.middleware"; // Ensure authenticateToken is imported if it's different from requireAuth

const router = Router();

// 회원가입은 인증 필요 없음
router.post("/", createUserHandler);
// 로그인은 인증 필요 없음
router.post("/login", loginController as RequestHandler);

// 사용자 지역 관련 라우트 - 인증 필요
router.patch("/region", requireAuth, updateRegionHandler); // 기존 지역 변경
router.get("/region", authenticateToken, getUserRegionController); // 사용자 지역 조회 추가

// 내 펀딩 목록 조회 - 인증 필요
router.get("/fundings", requireAuth, getUserFundingsHandler);

export default router;