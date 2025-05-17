import { getAllMagazines } from "../repositories/magazine.repository";

export async function getMagazineList() {
  const magazines = await getAllMagazines();
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
