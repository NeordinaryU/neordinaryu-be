import { PrismaClient, Magazine } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllMagazines(): Promise<Magazine[]> {
  return prisma.magazine.findMany({
    orderBy: { createdAt: "desc" }
  });
}
