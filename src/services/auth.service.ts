import { User } from '@prisma/client';
import { comparePassword } from '../utils/hash';
import { findUserByUserId } from '../repositories/user.repository';
import { 
  generateAccessToken, 
  generateRefreshToken, 
  verifyToken, 
  extractUserFromToken 
} from '../utils/jwt';
import { 
  saveRefreshToken, 
  findRefreshTokenByToken, 
  deleteRefreshToken
} from '../repositories/token.repository';
import jwt from 'jsonwebtoken';

/**
 * 로그인 서비스
 */
export const loginService = async (userId: string, password: string) => {
  // 사용자 찾기
  const user = await findUserByUserId(userId);
  if (!user) {
    throw new Error("존재하지 않는 사용자입니다.");
  }

  // 비밀번호 검증
  const valid = await comparePassword(password, user.password);
  if (!valid) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  // 토큰 생성
  const accessToken = generateAccessToken({ userId: user.userId, id: user.id });
  const refreshToken = generateRefreshToken({ userId: user.userId, id: user.id });

  // 리프레시 토큰 저장
  await saveRefreshToken(user.id, refreshToken);

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      userId: user.userId,
      region: user.region
    }
  };
};

/**
 * 토큰 갱신 서비스
 */
export const refreshTokenService = async (refreshToken: string) => {
  try {
    // 리프레시 토큰 검증
    const tokenData = await findRefreshTokenByToken(refreshToken);
    
    if (!tokenData) {
      throw new Error("유효하지 않은 리프레시 토큰입니다.");
    }
    
    // 토큰 만료 확인
    if (tokenData.expiresAt < new Date()) {
      await deleteRefreshToken(refreshToken);
      throw new Error("만료된 리프레시 토큰입니다.");
    }
    
    // 토큰 내용 검증
    const user = tokenData.user;
    
    // JWT 유효성 검증
    try {
      verifyToken(refreshToken, 'refresh');
    } catch (error) {
      await deleteRefreshToken(refreshToken);
      throw new Error("유효하지 않은 리프레시 토큰입니다.");
    }

    // 새로운 액세스 토큰 발급
    const newAccessToken = generateAccessToken({ userId: user.userId, id: user.id });
    
    return {
      accessToken: newAccessToken,
      user: {
        id: user.id,
        userId: user.userId,
        region: user.region
      }
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("토큰 갱신 중 오류가 발생했습니다.");
  }
};

/**
 * 로그아웃 서비스
 */
export const logoutService = async (refreshToken: string) => {
  try {
    await deleteRefreshToken(refreshToken);
    return { success: true };
  } catch (error) {
    throw new Error("로그아웃 중 오류가 발생했습니다.");
  }
}; 