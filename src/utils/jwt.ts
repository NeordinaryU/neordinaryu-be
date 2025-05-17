import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// 환경 변수에서 시크릿 키 가져오기
const ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_SECRET || 'access_secret_key';
const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh_secret_key';

// 토큰 만료 시간 (초)
const ACCESS_TOKEN_EXPIRES_IN = 60 * 30; // 30분
const REFRESH_TOKEN_EXPIRES_IN = 60 * 60 * 24 * 7; // 7일

/**
 * 액세스 토큰 생성
 */
export const generateAccessToken = (payload: { userId: string; id: number }): string => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN
  });
};

/**
 * 리프레시 토큰 생성
 */
export const generateRefreshToken = (payload: { userId: string; id: number }): string => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN
  });
};

/**
 * 토큰 검증
 */
export const verifyToken = (token: string, type: 'access' | 'refresh'): any => {
  try {
    const secret = type === 'access' ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;
    return jwt.verify(token, secret);
  } catch (error) {
    throw error;
  }
};

/**
 * 리프레시 토큰 만료 시간 계산
 */
export const getRefreshTokenExpiryDate = (): Date => {
  return new Date(Date.now() + REFRESH_TOKEN_EXPIRES_IN * 1000);
};

/**
 * 토큰에서 사용자 ID 추출
 */
export const extractUserFromToken = (token: string, type: 'access' | 'refresh'): { userId: string; id: number } => {
  const decoded = verifyToken(token, type);
  return {
    userId: decoded.userId,
    id: decoded.id
  };
}; 