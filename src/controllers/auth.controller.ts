import { RequestHandler } from 'express';
import {
  loginService,
  refreshTokenService,
  logoutService
} from '../services/auth.service';

/**
 * 로그인 컨트롤러
 */
export const loginController: RequestHandler = async (req, res, next) => {
  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      res.sendError(400, 'userId와 password는 필수입니다.');
      return;
    }

    const result = await loginService(userId, password);

    res.sendSuccess(200, '로그인 성공', result);
  } catch (err) {
    if (err instanceof Error) {
      res.sendError(401, err.message);
      return;
    }
    next(err);
  }
};

/**
 * 토큰 갱신 컨트롤러
 */
export const refreshTokenController: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.sendError(400, 'refreshToken은 필수입니다.');
      return;
    }

    const result = await refreshTokenService(refreshToken);

    res.sendSuccess(200, '토큰 갱신 성공', result);
  } catch (err) {
    if (err instanceof Error) {
      res.sendError(401, err.message);
      return;
    }
    next(err);
  }
};

/**
 * 로그아웃 컨트롤러
 */
export const logoutController: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.sendError(400, 'refreshToken은 필수입니다.');
      return;
    }

    await logoutService(refreshToken);

    res.sendSuccess(200, '로그아웃 성공');
  } catch (err) {
    next(err);
  }
};

/**
 * 현재 사용자 정보 조회
 */
export const getCurrentUserController: RequestHandler = async (req, res, next) => {
  try {
    if (!req.user) {
      res.sendError(401, '인증이 필요합니다.');
      return;
    }

    res.sendSuccess(200, '사용자 정보 조회 성공', {
      id: req.user.id,
      userId: req.user.userId
    });
  } catch (err) {
    next(err);
  }
}; 