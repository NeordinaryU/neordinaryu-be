import { Request, Response, NextFunction, RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { registerUser, changeUserRegion, getUserRegionService } from "../services/user.service";
import { Region } from "@prisma/client";

// 사용자 생성 핸들러
export const createUserHandler: RequestHandler = async (req, res, next) => {
  try {
    const { userId, password, region } = req.body;

    const user = await registerUser({ userId, password, region });
    res.sendSuccess(201, "회원가입 성공", {
      userId: user.userId,
      region: user.region,
    });
  } catch (err) {
    next(err);
  }
};

// 사용자 지역 변경 핸들러
export const updateRegionHandler: RequestHandler = async (req, res, next) => {
  try {
    const user = req.user;
    const { region } = req.body;

    if (!user) {
      res.sendError(401, "인증이 필요한 기능입니다.");
      return;
    }

    if (!region) {
      res.sendError(400, "region은 필수입니다.");
      return;
    }
    
    const isValid = Object.values(Region).includes(region as Region);
    if (!isValid) {
      res.sendError(400, `region 값은 다음 중 하나여야 합니다: ${Object.values(
          Region
        ).join(", ")}`);
      return;
    }
    
    const updated = await changeUserRegion(user.userId, region);
    res.sendSuccess(200, "지역이 변경되었습니다.", updated);
  } catch (err) {
    next(err);
  }
};

// 사용자 지역 변경 컨트롤러
export const changeUserRegionController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const userId = req.user!.userId;
    const { region } = req.body;

    if (!region) {
      res.sendError(StatusCodes.BAD_REQUEST, "지역을 입력해주세요.");
      return;
    }

    if (!Object.values(Region).includes(region as Region)) {
      res.sendError(
        StatusCodes.BAD_REQUEST,
        `지역은 다음 중 하나여야 합니다: ${Object.values(Region).join(", ")}`
      );
      return;
    }

    const updatedUser = await changeUserRegion(userId, region as Region);
    res.sendSuccess(
      StatusCodes.OK,
      "사용자 지역이 성공적으로 변경되었습니다.",
      updatedUser
    );
  } catch (error) {
    next(error);
  }
};

// 사용자 지역 정보 조회 컨트롤러
export const getUserRegionController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const userId = req.user?.userId; 

    if (!userId) {
      res.sendError(StatusCodes.UNAUTHORIZED, "인증되지 않은 사용자입니다.");
      return;
    }

    const result = await getUserRegionService(userId);
    res.setHeader('Cache-Control', 'no-store'); // 캐시 제어 헤더 추가
    res.sendSuccess(
      StatusCodes.OK,
      "사용자 지역 정보를 성공적으로 조회했습니다.",
      result
    );
  } catch (error) {
    next(error);
  }
};
