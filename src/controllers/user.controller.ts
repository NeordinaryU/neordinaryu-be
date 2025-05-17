import { Request, Response } from "express";
import { registerUser } from "../services/user.service";
import { loginUser, changeUserRegion } from "../services/user.service";
import { PrismaClient, Region } from "../generated/prisma";
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { userId, name, email, password, region } = req.body;

    const user = await registerUser({ userId, name, email, password, region });

    res.status(201).json({
      message: "회원가입 성공",
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
        region: user.region,
      },
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message || "회원가입 실패" });
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const { userId: userId, password } = req.body;

    if (!userId || !password) {
      res.status(400).json({ message: "userId와 password는 필수입니다." });
    }

    const user = await loginUser(userId, password);

    res.status(200).json({
      message: "로그인 성공",
      user,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message || "로그인 실패" });
  }
};

export const updateRegionHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { region } = req.body;

    if (!region) {
      res.status(400).json({ message: "region은 필수입니다." });
    }
    const isValid = Object.values(Region).includes(region as Region);
    if (!isValid) {
      res.status(400).json({
        message: `region 값은 다음 중 하나여야 합니다: ${Object.values(
          Region
        ).join(", ")}`,
      });
    }
    const updated = await changeUserRegion(userId, region);
    res.status(200).json({
      message: "지역이 변경되었습니다.",
      user: updated,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message || "지역 변경 실패" });
  }
};
