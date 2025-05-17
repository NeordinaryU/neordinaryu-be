import { Response } from 'express';
import { User as PrismaUser } from '@prisma/client';

declare global {
  namespace Express {
    interface User extends Partial<PrismaUser> {
      id: number;
      userId?: string;
    }

    interface Request {
      user?: User;
    }

    interface Response {
      sendSuccess(statusCode?: number, message?: string, data?: any): Response;
      sendError(statusCode?: number, message?: string, error?: any, data?: any): Response;
    }
  }
}

export {};
