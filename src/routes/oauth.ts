import { Router } from "express";
import { getCurrentUser } from "../controllers/oauth.controller";
import { requireAuth } from "../utils/auth.middleware";

const router = Router();

// 현재 사용자 정보 요청 - 인증 필요
router.get("/current-user", requireAuth, getCurrentUser);

export default router; 