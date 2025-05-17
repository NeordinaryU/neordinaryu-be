import { PrismaClient, RefreshToken } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * 새로운 리프레시 토큰 저장
 */
export const saveRefreshToken = async (
  userId: number,
  token: string,
  expiresAt: Date
): Promise<RefreshToken> => {
  return prisma.refreshToken.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });
};

/**
 * 토큰 문자열로 리프레시 토큰 조회 (user 정보 포함)
 */
export const findRefreshTokenByToken = async (
  token: string
): Promise<(RefreshToken & { user: { id: number, userId: string } }) | null> => {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
    include: {
      user: {
        select: { // 필요한 사용자 정보만 선택
          id: true,
          userId: true,
        }
      }
    }
  });
};

/**
 * 특정 리프레시 토큰 삭제 (토큰 문자열 기반)
 */
export const deleteRefreshToken = async (token: string): Promise<RefreshToken | null> => {
  try {
    return await prisma.refreshToken.delete({
      where: { token },
    });
  } catch (error: any) {
    if (error.code === 'P2025') { // Prisma 에러 코드: Record to delete does not exist.
      console.warn('Attempted to delete a non-existent refresh token:', token);
    } else {
      console.error('Error deleting refresh token:', error);
    }
    return null;
  }
};

/**
 * 특정 사용자의 모든 리프레시 토큰 삭제
 */
export const deleteAllRefreshTokensByUserId = async (userId: number): Promise<{ count: number }> => {
  return prisma.refreshToken.deleteMany({
    where: {
      userId,
    },
  });
};

/**
 * 만료된 리프레시 토큰 삭제
 */
export const deleteExpiredRefreshTokens = async (): Promise<{ count: number }> => {
  return prisma.refreshToken.deleteMany({
    where: {
      expiresAt: {
        lt: new Date(),
      },
    },
  });
}; 