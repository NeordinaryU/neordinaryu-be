import { Response } from 'express';
import { User as PrismaUser, Region } from '@prisma/client'; // Prisma User 타입과 Region Enum 가져오기

declare global {
  namespace Express {
    // req.user의 타입을 정의합니다.
    // Prisma의 User 모델을 기반으로 하되, 비밀번호 등 민감 정보는 제외하고 필요한 정보만 포함합니다.
    interface User {
      id: number; // User 모델의 PK
      userId: string; // User 모델의 문자열 ID (user_id)
      region?: Region | null; // User 모델의 region
      // 필요에 따라 email, name 등 JWT 페이로드에 포함된 다른 안전한 사용자 정보 추가
      // 예: email?: string | null;
      // 예: name?: string | null;
    }

    interface Request {
      user?: User; // req.user를 선택적 속성으로 추가합니다.
    }

    interface Response {
      sendSuccess(statusCode?: number, message?: string, data?: any): Response;
      sendError(statusCode?: number, message?: string, error?: any, data?: any): Response;
    }
  }
}

export {};
