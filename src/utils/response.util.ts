import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

interface ErrorWithStatusCode extends Error {
    statusCode?: number;
}

// Custom Express Response interface
interface CustomResponse extends Response {
    sendSuccess: (statusCode?: number, message?: string, data?: any) => Response;
    sendError: (statusCode?: number, message?: string, error?: any, data?: any) => Response;
}

class ApiResponse {
        static success(
                statusCode = StatusCodes.OK,
                message = "요청이 성공적으로 처리되었습니다.",
                data: any = null
        ) {
                return {
                        statusCode,
                        message,
                        data,
                };
        }
        static error(
                statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
                message = "요청 처리 중 오류가 발생했습니다.",
                error: any = null,
                data: any = null
        ) {
                return {
                        statusCode,
                        message,
                        error,
                        data,
                };
        }
}

export const responseHandler = (_req: Request, res: Response, next: NextFunction): void => {
        // 성공 응답을 위한 메서드
        (res as CustomResponse).sendSuccess = function (
                statusCode = StatusCodes.OK,
                message = "요청이 성공적으로 처리되었습니다.",
                data = null
        ) {
                const response = ApiResponse.success(statusCode, message, data);
                return this.status(statusCode).json(response);
        };

        // 에러 응답을 위한 메서드
        (res as CustomResponse).sendError = function (
                statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
                message = "요청 처리 중 오류가 발생했습니다.",
                error = null,
                data = null,
        ) {
                const response = ApiResponse.error(statusCode, message, error, data);
                return this.status(statusCode).json(response);
        };
        next();
};

// 글로벌 에러 핸들러 미들웨어
export const errorHandler = (
        err: ErrorWithStatusCode, 
        _req: Request, 
        res: Response, 
        _next: NextFunction
): void => {
        console.error("Error:", err);

        // 기본 에러 메시지와 상태 코드
        const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
        const message = err.message || "서버 내부 오류가 발생했습니다.";

        res.status(statusCode).json(ApiResponse.error(statusCode, message));
};

export default {
        ApiResponse,
        responseHandler,
        errorHandler,
};
