// filepath: /Users/chowon/Projects/neordinaryu-be/src/repositories/user.repository.ts
import { PrismaClient, User, Region } from "@prisma/client";
export const prisma = new PrismaClient({ log: ["query"] });

export const createUser = async (data: {
  userId: string;
  password: string;
  region: Region;
}): Promise<User> => {
  return await prisma.user.create({
    data: {
      userId: data.userId,
      password: data.password,
      createdAt: new Date(),
      region: data.region,
    },
  });
};

export const findUserByUserId = async (userId: string) => {
  return await prisma.user.findFirst({ where: { userId } });
};

export const updateUserRegion = async (userId: string, region: Region) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: userId
    }
  });
  
  if (!user) {
    throw new Error('User not found');
  }
  
  return await prisma.user.update({
    where: { id: user.id },
    data: { region },
  });
};
