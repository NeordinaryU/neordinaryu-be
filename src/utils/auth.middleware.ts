import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './jwt';
import { findUserByUserId } from '../repositories/user.repository';

/**
 * 인증 미들웨어
 * Bearer token을 확인하여 사용자 정보를 req.user에 저장
 */
export const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.sendError(401, '인증이 필요합니다.');
      return;
    }

    const token = authHeader.split(' ')[1];
    
    try {
      const decoded = verifyToken(token, 'access');
      
      // 유효한 사용자인지 확인 (선택사항)
      const user = await findUserByUserId(decoded.userId);
      if (!user) {
        res.sendError(401, '유효하지 않은 사용자입니다.');
        return;
      }
      
      // req.user에 사용자 정보 저장
      req.user = {
        id: decoded.id,
        userId: decoded.userId
      };
      
      next();
    } catch (err) {
      // 토큰 만료 오류를 구체적으로 처리
      if (err instanceof Error && err.name === 'TokenExpiredError') {
        res.sendError(401, '토큰이 만료되었습니다.');
        return;
      }
      
      res.sendError(401, '유효하지 않은 토큰입니다.');
      return;
    }
  } catch (err) {
    next(err);
  }
};

/**
 * 선택적 인증 미들웨어
 * 토큰이 있으면 검증하지만, 없어도 계속 진행
 */
export const optionalAuthenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      next();
      return;
    }

    const token = authHeader.split(' ')[1];
    
    try {
      const decoded = verifyToken(token, 'access');
      
      // 유효한 사용자인지 확인 (선택사항)
      const user = await findUserByUserId(decoded.userId);
      if (user) {
        // req.user에 사용자 정보 저장
        req.user = {
          id: decoded.id,
          userId: decoded.userId
        };
      }
    } catch (err) {
      // 토큰 오류가 있어도 계속 진행
    }
    
    next();
  } catch (err) {
    next(err);
  }
}; 