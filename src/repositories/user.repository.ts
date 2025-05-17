import { PrismaClient, User, Region } from "../generated/prisma";
export const prisma = new PrismaClient({ log: ["query"] });
export const findUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({ where: { email } });
};

export const createUser = async (data: {
  userId: string;
  name: string;
  email: string;
  password: string;
  region: Region;
}): Promise<User> => {
  return await prisma.user.create({
    data: {
      userId: data.userId,
      name: data.name,
      email: data.email,
      password: data.password,
      status: "ACTIVE",
      CreatedAt: new Date(),
      region: data.region,
    },
  });
};

export const findUserByUserId = async (userId: string) => {
  return await prisma.user.findFirst({ where: { userId } });
};

export const updateUserRegion = async (userId: string, region: Region) => {
  return await prisma.user.update({
    where: { userId },
    data: { region },
  });
};
