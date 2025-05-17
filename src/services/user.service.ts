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
