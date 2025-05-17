import { Router, RequestHandler } from 'express';
import {
  loginController,
  refreshTokenController,
  logoutController,
  // logoutFromAllDevicesController, // 필요시 주석 해제
} from '../controllers/auth.controller';
import { authenticateToken, requireAuth } from '../utils/auth.middleware'; // requireAuth 추가

const router = Router();

// POST /auth/login - 사용자 로그인
router.post('/login', loginController as RequestHandler);

// POST /auth/refresh-token - 액세스 토큰 갱신
router.post('/refresh-token', refreshTokenController as RequestHandler);

// POST /auth/logout - 로그아웃 (현재 세션)
// 로그아웃은 인증된 사용자만 요청할 수 있도록 requireAuth 미들웨어 추가
router.post('/logout', requireAuth, logoutController as RequestHandler);

/* // 모든 기기에서 로그아웃 (필요시 사용)
// POST /auth/logout-all
router.post('/logout-all', requireAuth, logoutFromAllDevicesController);
*/

// 예시: 인증이 필요한 라우트
router.get('/profile', requireAuth, (req, res) => {
  // req.user에는 인증된 사용자 정보가 들어있음
  res.json({ message: 'This is a protected profile page', user: req.user });
});

export default router; 