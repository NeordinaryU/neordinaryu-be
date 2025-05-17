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
      isOnboarded: (user as any).isOnboarded
    };
  } catch (err: any) {
    if (err.code === "P2025") {
      throw new Error("사용자를 찾을 수 없습니다.");
    }
    throw err;
  }
};

// 사용자 지역 정보 조회 서비스
export const getUserRegionService = async (userIdString: string): Promise<{ region: Region | null }> => {
  const user = await findUserByUserId(userIdString); // user.repository에서 사용자 ID로 사용자 정보 조회
  if (!user) {
    throw Object.assign(new Error("사용자를 찾을 수 없습니다."), { statusCode: 404 });
  }
  if (user.region === null) {
    // 사용자는 존재하지만 지역 정보가 없는 경우 (예: 아직 온보딩 전)
    // 클라이언트 요구사항에 따라 null을 반환하거나, 특정 메시지와 함께 오류를 반환할 수 있습니다.
    // 여기서는 null을 포함하는 객체를 반환합니다.
     throw Object.assign(new Error("사용자 지역 정보가 설정되지 않았습니다."), { statusCode: 400 });
  }
  return { region: user.region };
};
