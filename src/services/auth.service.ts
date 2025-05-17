import bcrypt from 'bcryptjs';
import { PrismaClient, User as PrismaAppUser } from '@prisma/client';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  UserPayload,
} from '../utils/jwt';
import {
  saveRefreshToken,
  findRefreshTokenByToken,
  deleteRefreshToken,
  deleteAllRefreshTokensByUserId,
} from '../repositories/token.repository';
// import { findUserByUserIdFromRepo } from '../repositories/user.repository'; // 실제 사용자 레포지토리 경로로 수정 필요

const prisma = new PrismaClient(); // 임시, user.repository 사용 권장

// 임시 사용자 조회 함수 (실제로는 user.repository.ts의 함수 사용)
// Prisma User 모델명과 Express User 모델명 충돌 방지를 위해 PrismaAppUser 사용
const findUserByUserIdString = async (userIdString: string): Promise<PrismaAppUser | null> => {
  return prisma.user.findUnique({
    where: { userId: userIdString }, 
  });
};

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user?: {
    userId: string;
    region: string | null;
  };
}

/**
 * 사용자 로그인
 */
export const loginService = async (
  userIdString: string,
  passwordInput?: string
): Promise<AuthTokens> => {
  const user = await findUserByUserIdString(userIdString);

  if (!user) {
    throw Object.assign(new Error('User not found'), { statusCode: 404 });
  }

  if (passwordInput) { // 비밀번호 제공 시 (일반 로그인)
    const isPasswordValid = await bcrypt.compare(passwordInput, user.password);
    if (!isPasswordValid) {
      throw Object.assign(new Error('Invalid credentials'), { statusCode: 401 });
    }
  }
  // 소셜 로그인 등 비밀번호 없이 진행되는 경우, 이 부분은 스킵될 수 있음

  const userPayloadForToken: UserPayload = { id: user.id, userId: user.userId };
  const accessToken = generateAccessToken(userPayloadForToken);
  const refreshToken = generateRefreshToken(userPayloadForToken);

  const refreshTokenExpiresInMs = parseTokenExpirationString(process.env.REFRESH_TOKEN_EXPIRES_IN || '7d');
  const expiresAt = new Date(Date.now() + refreshTokenExpiresInMs);

  await saveRefreshToken(user.id, refreshToken, expiresAt);

  return { 
    accessToken, 
    refreshToken,
    user: {
      userId: user.userId,
      region: user.region,
      isOnboarded: user.isOnboarded
    }
  };
};

/**
 * 토큰 만료 문자열 (예: '7d', '15m')을 밀리초로 변환
 */
const parseTokenExpirationString = (expiresIn: string): number => {
    const unit = expiresIn.charAt(expiresIn.length - 1);
    const value = parseInt(expiresIn.slice(0, -1));
    if (isNaN(value)) throw new Error('Invalid token expiration format');
    switch (unit) {
        case 's': return value * 1000;
        case 'm': return value * 60 * 1000;
        case 'h': return value * 60 * 60 * 1000;
        case 'd': return value * 24 * 60 * 60 * 1000;
        default: 
            const defaultValue = parseInt(expiresIn);
            if (isNaN(defaultValue)) throw new Error('Invalid token expiration format');
            return defaultValue; // 숫자로만 주어지면 ms로 간주
    }
}

/**
 * 리프레시 토큰을 사용하여 새로운 액세스 토큰 발급
 */
export const refreshTokenService = async (
  oldRefreshToken: string
): Promise<AuthTokens> => {
  const decodedPayload = verifyToken(oldRefreshToken);
  if (!decodedPayload) {
    throw Object.assign(new Error('Invalid or expired refresh token'), { statusCode: 401 });
  }

  const existingToken = await findRefreshTokenByToken(oldRefreshToken);
  if (!existingToken || existingToken.userId !== decodedPayload.id || existingToken.expiresAt < new Date()) {
    if(existingToken) await deleteRefreshToken(oldRefreshToken);
    throw Object.assign(new Error('Refresh token not found, mismatched, or expired in DB'), { statusCode: 401 });
  }

  const userPayload: UserPayload = { id: decodedPayload.id, userId: decodedPayload.userId };
  const newAccessToken = generateAccessToken(userPayload);
  
  // 보안 강화: 새 리프레시 토큰 발급 (Rotation)
  const newRefreshToken = generateRefreshToken(userPayload);
  const refreshTokenExpiresInMs = parseTokenExpirationString(process.env.REFRESH_TOKEN_EXPIRES_IN || '7d');
  const expiresAt = new Date(Date.now() + refreshTokenExpiresInMs);
  
  await deleteRefreshToken(oldRefreshToken); // 이전 리프레시 토큰 삭제
  await saveRefreshToken(decodedPayload.id, newRefreshToken, expiresAt); // 새 리프레시 토큰 저장

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};

/**
 * 로그아웃 (특정 리프레시 토큰 삭제)
 */
export const logoutService = async (refreshToken?: string): Promise<void> => {
  if (refreshToken) {
    const deleted = await deleteRefreshToken(refreshToken);
    if (!deleted) {
        console.warn('Logout: Refresh token to delete was not found in DB.');
    }
  } else {
    console.log('Logout request without a refresh token (client might have already cleared it).');
  }
};

/**
 * 특정 사용자의 모든 세션에서 로그아웃 (모든 리프레시 토큰 삭제)
 */
export const logoutFromAllDevicesService = async (userId: number): Promise<void> => {
  await deleteAllRefreshTokensByUserId(userId);
}; 