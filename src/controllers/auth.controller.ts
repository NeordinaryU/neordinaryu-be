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
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'userId and password are required' });
    }
    const tokens = await loginService(userId, password);
    // loginService에서 오류 발생 시 throw 하므로, null 체크는 불필요할 수 있음
    return res.status(StatusCodes.OK).json({ 
        message: 'Login successful',
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken, 
    });
  } catch (error) {
    next(error);
  }
};

export const refreshTokenController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Refresh token is required' });
    }
    const newTokens = await refreshTokenService(refreshToken);
    return res.status(StatusCodes.OK).json({
        message: 'Token refreshed successfully',
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
    return res.status(StatusCodes.OK).json({ message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
};
