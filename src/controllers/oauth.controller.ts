// src/controllers/auth.controller.ts
import { RequestHandler } from "express";

export const getCurrentUser: RequestHandler = (req, res, next) => {
  try {
    if (!req.user) {
      res.sendError(401, "Unauthorized");
      return;
    }

    res.sendSuccess(200, "사용자 정보를 성공적으로 가져왔습니다.", req.user);
  } catch (error) {
    next(error);
  }
};
