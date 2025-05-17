import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getMagazineList() {
  const magazines = await prisma.magazine.findMany({
    orderBy: { createdAt: "desc" }
  });
  // photo → photoUrl로 변환
  return magazines.map(m => ({
    id: m.id,
    title: m.title,
    body: m.body,
    photoUrl: m.photoUrl,
    link: m.link,
    createdAt: m.createdAt
  }));
}
