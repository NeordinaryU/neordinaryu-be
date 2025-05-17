import { Response } from 'express';

declare global {
  namespace Express {
    interface Response {
      sendSuccess(statusCode?: number, message?: string, data?: any): Response;
      sendError(statusCode?: number, message?: string, error?: any, data?: any): Response;
    }
  }
}

export {};
