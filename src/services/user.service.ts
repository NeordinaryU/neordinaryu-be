import { createUser } from "../repositories/user.repository";
import { hashPassword } from "../utils/hash";
import { PrismaClient, User, Region } from "@prisma/client";
import {
  findUserByUserId,
  updateUserRegion,
} from "../repositories/user.repository";
import { comparePassword } from "../utils/hash";
export const prisma = new PrismaClient({ log: ["query"] });
export const registerUser = async (data: {
  userId: string;
  password: string;
  region: Region;
}) => {
  const hashedPassword = await hashPassword(data.password);

  try {
    const { region, ...userData } = data;
    return await createUser({
      ...userData,
      password: hashedPassword,
      region: region,
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      throw new Error("중복된 이메일입니다.");
    }
    throw err;
  }
};
export const loginUser = async (userId: string, password: string) => {
  const user = await findUserByUserId(userId);
  if (!user) {
    throw new Error("존재하지 않는 사용자입니다.");
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  // 토큰 발급을 원할 경우 여기에 추가
  return {
    userId: user.userId,
    region: user.region,
  };
};
export const changeUserRegion = async (userId: string, region: Region) => {
  try {
    const user = await updateUserRegion(userId, region);
    return {
      userId: user.userId,
      region: user.region,
    };
  } catch (err: any) {
    if (err.code === "P2025") {
      throw new Error("사용자를 찾을 수 없습니다.");
    }
    throw err;
  }
};
