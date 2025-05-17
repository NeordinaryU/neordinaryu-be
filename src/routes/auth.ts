import { Router } from 'express';
import {
  loginController,
  refreshTokenController,
  logoutController,
  getCurrentUserController
} from '../controllers/auth.controller';

const router = Router();

// 로그인
router.post('/login', loginController);

// 토큰 갱신
router.post('/refresh', refreshTokenController);

// 로그아웃
router.post('/logout', logoutController);

// 현재 사용자 정보 조회 (인증 필요)
router.get('/me', getCurrentUserController);

export default router; 