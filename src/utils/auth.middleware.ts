import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verifyToken } from './jwt';
import { PrismaClient, User as PrismaAppUser } from '@prisma/client'; // Prisma User 모델명과 Express User 모델명 충돌 방지

const prisma = new PrismaClient(); // 실제로는 userRepository.ts의 함수를 사용하는 것이 좋습니다.

// 임시 사용자 ID(PK) 조회 함수 - 실제로는 userRepository.ts의 함수를 사용해야 합니다.
const findUserByPkId = async (id: number): Promise<PrismaAppUser | null> => {
    return prisma.user.findUnique({ where: { id } });
};

/**
 * JWT 토큰을 검증하고, 유효한 경우 req.user에 사용자 정보를 추가하는 미들웨어입니다.
 * 토큰이 없거나 유효하지 않아도 바로 에러를 반환하지 않고 다음 미들웨어로 넘어갈 수 있도록 설계되었습니다.
 * 실제 인증이 필요한 라우트에서는 requireAuth 미들웨어를 사용하거나 req.user의 존재 유무를 확인해야 합니다.
 */
export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') && authHeader.split(' ')[1];

  if (!token) {
    return next(); // 토큰이 없으면 req.user 설정 없이 다음으로 진행
  }

  const decodedPayload = verifyToken(token);

  if (!decodedPayload) {
    // 토큰은 있지만 유효하지 않은 경우 (만료, 잘못된 서명 등)
    // 선택: 여기서 401을 보낼 수도 있지만, 일단은 req.user 없이 다음으로 넘김
    // (엄격한 경우) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid or expired token' });
    return next(); 
  }

  try {
    const userFromDb = await findUserByPkId(decodedPayload.id); // decodedPayload.id는 User의 PK

    if (!userFromDb) {
      // 토큰은 유효했으나 해당 사용자가 DB에 없는 경우
      // (엄격한 경우) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'User not found for token' });
      return next();
    }

    // req.user에 사용자 정보 설정 (Express.User 타입 사용)
    req.user = {
      id: userFromDb.id,
      userId: userFromDb.userId, // User 모델의 문자열 ID
      region: userFromDb.region,
      // 필요한 다른 안전한 정보 추가 가능
    };

    next();
  } catch (error) {
    console.error('Error retrieving user for token:', error);
    // (엄격한 경우) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error authenticating user' });
    return next(error); // 에러 핸들러로 전달 또는 그냥 next()
  }
};

/**
 * 반드시 인증된 사용자만 접근을 허용하는 미들웨어입니다.
 * authenticateToken 미들웨어가 먼저 실행되어 req.user가 설정된 것을 전제로 합니다.
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Authentication required. No user data found on request.' });
    }
    next();
};

/**
 * 특정 역할(role)을 가진 사용자인지 확인하는 미들웨어 (예시)
 * Express.User 타입에 'role' 필드가 추가되어 있다고 가정합니다.
 */
export const authorizeRole = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Authentication required.' });
    }
    // Express.User 타입에 role이 실제로 있는지 확인 필요
    const userRole = (req.user as any).role; // 타입 단언은 실제 타입 정의에 맞게 수정 필요
    if (userRole !== requiredRole) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: `Forbidden: Role \"${requiredRole}\" required.` });
    }
    next();
  };
}; 