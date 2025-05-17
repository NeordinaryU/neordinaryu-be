import { PrismaClient } from "@prisma/client";
import { getRefreshTokenExpiryDate } from "../utils/jwt";

export const prisma = new PrismaClient({ log: ["query"] });

/**
 * 리프레시 토큰 저장
 */
export const saveRefreshToken = async (userId: number, token: string): Promise<void> => {
  // 기존 사용자의 리프레시 토큰 삭제 (여러 디바이스 로그인 방지 - 선택사항)
  await prisma.refreshToken.deleteMany({
    where: { userId }
  });

  // 새 리프레시 토큰 저장
  await prisma.refreshToken.create({
    data: {
      userId,
      token,
      expiresAt: getRefreshTokenExpiryDate(),
    }
  });
};

/**
 * 토큰으로 리프레시 토큰 조회
 */
export const findRefreshTokenByToken = async (token: string) => {
  return await prisma.refreshToken.findUnique({
    where: { token },
    include: { user: true }
  });
};

/**
 * 사용자 ID로 리프레시 토큰 조회
 */
export const findRefreshTokenByUserId = async (userId: number) => {
  return await prisma.refreshToken.findFirst({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });
};

/**
 * 리프레시 토큰 삭제 (로그아웃)
 */
export const deleteRefreshToken = async (token: string): Promise<void> => {
  await prisma.refreshToken.delete({
    where: { token }
  }).catch(() => {
    // 토큰이 이미 삭제되었거나 없는 경우 에러 무시
  });
};

/**
 * 만료된 리프레시 토큰 정리
 */
export const cleanupExpiredTokens = async (): Promise<void> => {
  await prisma.refreshToken.deleteMany({
    where: {
      expiresAt: {
        lt: new Date()
      }
    }
  });
}; 