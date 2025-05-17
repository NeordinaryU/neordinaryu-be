import { RequestHandler } from "express";
import { registerUser } from "../services/user.service";
import { loginUser, changeUserRegion } from "../services/user.service";
import { Region } from "../generated/prisma";

export const createUserHandler: RequestHandler = async (req, res, next) => {
  try {
    const { userId, name, email, password, region } = req.body;

    const user = await registerUser({ userId, name, email, password, region });

    res.sendSuccess(201, "회원가입 성공", {
      userId: user.userId,
      name: user.name,
      email: user.email,
      region: user.region,
    });
  } catch (err) {
    next(err);
  }
};

export const loginHandler: RequestHandler = async (req, res, next) => {
  try {
    const { userId: userId, password } = req.body;

    if (!userId || !password) {
      res.sendError(400, "userId와 password는 필수입니다.");
      return;
    }

    const user = await loginUser(userId, password);

    res.sendSuccess(200, "로그인 성공", user);
  } catch (err) {
    next(err);
  }
};

export const updateRegionHandler: RequestHandler = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { region } = req.body;

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
    
    const updated = await changeUserRegion(userId, region);
    res.sendSuccess(200, "지역이 변경되었습니다.", updated);
  } catch (err) {
    next(err);
  }
};
