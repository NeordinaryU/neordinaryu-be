import { Router, RequestHandler } from "express";
import {
  createUserHandler,
  updateRegionHandler,
} from "../controllers/user.controller";
import { getUserFundingsHandler } from "../controllers/funding.controller";
import { loginController } from "../controllers/auth.controller";
import { requireAuth } from "../utils/auth.middleware";

const router = Router();

// 회원가입은 인증 필요 없음
router.post("/", createUserHandler);
// 로그인은 인증 필요 없음
router.post("/login", loginController as RequestHandler);
// 지역 업데이트는 인증 필요
router.patch("/region", requireAuth, updateRegionHandler);

// 내 펀딩 목록 조회 - 인증 필요
router.get("/fundings", requireAuth, getUserFundingsHandler);

export default router; 