import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.magazine.createMany({
    data: [
      {
        title: "태양광 발전, 안 할 이유가 없다.",
        body: "재생에너지 가운데서도 태양광 발전은 다른 에너지원과 견주어 여러 가지 장점이 있다!",
        photo:
          "https://www.koya-culture.com/data/photos/20231145/art_16994291759244_97bac0.jpg",
        link: "https://www.koya-culture.com/news/article.html?no=142903",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "글로벌 재생에너지 목표치가 태양광 발전을 활성화시키는 이유",
        body: "지구 평균 기온 상승을 막아줄 기대 요인",
        photo:
          "https://assets.lightsourcebp.com/app/uploads/2023/11/20162056/Global-Insight-supercharge-solar-Banner-2.jpg",
        link: "https://lightsourcebp.com/kr/news/how-a-global-renewable-target-can-supercharge-the-solar-sector/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:
          "작년 속도 넘어선 태양광 설치 ...전기료보다 낮은 단가에 인기 고공행진",
        body: "태양광 발전 신규 보급량이 지난해에 이어 올해도 증가 추세를 이어지고 있다. ",
        photo:
          "https://img.etnews.com/news/article/2025/04/14/news-p.v1.20250414.4753deb6b7e84d5bba65766f276f9f93_P1.jpg",
        link: "https://www.etnews.com/20250414000371",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });
}

main()
  .then(() => {
    console.log("✅ Seed 완료");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => prisma.$disconnect());
