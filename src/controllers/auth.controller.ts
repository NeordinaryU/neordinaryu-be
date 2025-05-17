import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  loginService,
  refreshTokenService,
  logoutService,
  // logoutFromAllDevicesService, // 필요시 주석 해제하여 사용
} from '../services/auth.service';

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, password } = req.body;
    if (!userId || !password) {
      // 공통 에러 응답 유틸리티가 있다면 그것을 사용하는 것이 좋으나, 여기서는 직접 응답
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'userId and password are required' });
    }
    const result = await loginService(userId, password);
    
    res.sendSuccess(StatusCodes.OK, '로그인 성공', {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        userId: result.user?.userId,
        region: result.user?.region
    });
  } catch (error) {
    next(error); // 에러는 글로벌 에러 핸들러로 전달
  }
};

export const refreshTokenController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Refresh token is required' });
    }
    const newTokens = await refreshTokenService(refreshToken);
    res.sendSuccess(StatusCodes.OK, 'Token refreshed successfully', {
        accessToken: newTokens.accessToken,
        refreshToken: newTokens.refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const logoutController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body; 
    // 실제로는 쿠키에서 가져오거나, 클라이언트가 명시적으로 삭제 요청을 보낼 때만 처리할 수 있음
    // 여기서는 요청 바디에 있다고 가정
    await logoutService(refreshToken);
    res.sendSuccess(StatusCodes.OK, 'Logout successful');
  } catch (error) {
    next(error);
  }
};

/*
// 모든 기기에서 로그아웃 (필요시 사용)
import { logoutFromAllDevicesService } from '../services/auth.service';
export const logoutFromAllDevicesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) { 
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Authentication required' });
    }
    await logoutFromAllDevicesService(req.user.id); // req.user.id는 PK
    res.sendSuccess(StatusCodes.OK, 'Successfully logged out from all devices');
  } catch (error) {
    next(error);
  }
};
*/
