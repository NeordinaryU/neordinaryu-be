import { Router } from "express";
import { getCurrentUser } from "../controllers/oauth.controller";

const router = Router();

// 현재 사용자 정보 요청
router.get("/current-user", getCurrentUser);

export default router; 