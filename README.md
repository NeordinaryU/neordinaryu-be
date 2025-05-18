# 🌞 Sunning 써닝 

> 태양을 따라 계속 가치를 만들어가는 재생 에너지 펀딩 플랫폼

<img src="https://github.com/user-attachments/assets/bb29b1dd-1ed8-4207-8ce2-165b31229f5d" width="1140px" alt="overview" />


## 🌅 개요

**태양**이라는 재생에너지를 통해 지속적으로 가치를 만들어가는 플랫폼

**써닝(Sunning)은 보이지 않는 환경 가치를 후원하고, 후원받는 새로운 형태의 펀딩 플랫폼입니다.**


## 🧠 문제 인식
- 한국은 OECD 국가 중 재생에너지 발전 비중 **꼴찌** 수준입니다.
- 기후위기의 심각성에 공감하는 국민은 많지만, **"어떻게 참여해야 할지"** 모르기 때문에 실질적 행동으로 이어지지 않고 있습니다.



## 🌱 해결 방안

✅ 민간 참여가 쉬운 **태양광 중심** 플랫폼

민간이 가장 쉽게 참여할 수 있는 재생에너지는 "태양광"입니다.

→ 수력·폐기물 등은 인허가·시설 진입장벽이 높아 B2C 확장이 어렵습니다.

→ 태양광은 유휴공간 활용, 소형 모듈, 설치 용이로 참여장벽이 낮습니다.



## 🔧 핵심 기능

**📖 매거진**
- 뉴스, 유튜브, 카드형 콘텐츠 큐레이션  
- 재생에너지에 대한 이해 및 인식 개선

**💸 커뮤니티 기반 펀딩**
- 마을/아파트 단위 공동 태양광 설치  
- 목표금액 달성 시 실제 설치 → 공동체가 사용


## 👥 타겟 유저

- 🎯 **타겟 1**  
  재생에너지에 대해 아직 잘 모르는 사용자

- 🎯 **타겟 2**  
  관심은 있지만 참여 방법을 모르는 사용자

- 🎯 **타겟 3**  
  재생에너지에 관심이 많고 적극적 참여 준비가 된 사용자


## 💡 SWOT 분석

**✅ Strength**
- 초기 비용 없이 간편하게 참여 가능  
- 환경 가치 + 경제 보상 동시 제공  
- 커뮤니티 기반으로 입소문 효과 기대

**⚠️ Weakness**
- 낮은 초기 인식으로 참여 진입 유도 어려움  
- 설치까지 신뢰 확보와 시간 소요

**🌟 Opportunity**
- 정부·지자체 정책과의 연계 가능  
- ESG 경영 확산과 함께 관심도 증가

**🚨 Threat**
- 정책/법률 변화에 따른 불확실성  
- 기술 발전에 따른 수익성 변화 리스크


## 🔭 앞으로의 확장 계획 (Future Plans)

- 소셜 로그인 도입
- 기업·지자체 연계 리워드 확대
- 설치 진행 상황 트래킹 기능
- 개인용 미니 태양광판 판매 기능
- 지역 커뮤니티 별 랭킹/기여도 시각화
- 소셜 로그인 기반 리워드 참여 구조  
- 기업/지자체와 연계한 인센티브 제공


## 🖌️ 디자인 방향 (Design Direction)

**🎨 로고**
- 태양이 떠오르는 생명력 있는 비주얼

**🖥️ UI/UX**
- 카드형 펀딩 리스트  
- 배경 이미지가 스크롤과 함께 자연스럽게 이동하는 인터랙션

**🌿 컬러톤**
- 자연, 생동감, 지속가능성을 상징하는 색감 사용


## 🛠️ 기술 스택

- **언어 및 런타임**: TypeScript, Node.js
- **프레임워크**: Express.js
- **데이터베이스**: MySQL (with Prisma ORM)
- **인증**: JWT, Passport.js (Google, Kakao, Naver OAuth)
- **배포**: GitHub Actions, AWS EC2
- **문서화**: Swagger UI

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.x 이상
- npm
- MySQL 데이터베이스

### 설치

```bash
# 저장소 클론
git clone https://github.com/NeordinaryU/neordinaryu-be.git
cd neordinaryu-be

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일을 편집하여 필요한 환경 변수 설정

# Prisma 클라이언트 생성
npx prisma generate

# 데이터베이스 마이그레이션
npx prisma migrate deploy

# 개발 서버 실행
npm run dev
```

### 빌드 및 실행

```bash
# 프로젝트 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
src/
├── controllers/    # 요청 처리 및 응답 반환
├── services/       # 비즈니스 로직
├── repositories/   # 데이터 액세스 로직
├── routes/         # API 라우트 정의
├── dtos/           # 데이터 전송 객체
├── utils/          # 유틸리티 함수
├── middleware/     # 미들웨어
├── swagger/        # API 문서화
└── index.ts        # 애플리케이션 진입점
```

## 🔄 API 문서

API 문서는 Swagger UI를 통해 제공됩니다. 서버 실행 후 다음 URL에서 확인할 수 있습니다:

```
http://localhost:3000/api-docs
```

## 🌐 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 AWS EC2 인스턴스에 배포됩니다. `main` 브랜치에 변경사항이 푸시되면 자동으로 배포 프로세스가 시작됩니다.

## 👤 개발팀

| <img src="https://github.com/chowon442.png" width=100> | <img src="https://github.com/hardwoong.png" width=100> | <img src="https://github.com/yee2know.png" width=100> |
| :---: | :---: | :---: |
| [chowon442](https://github.com/chowon442) | [hardwoong](https://github.com/hardwoong) | [yee2know](https://github.com/yee2know) |

<br>

## 🤙🏼 컨벤션
### 💡커밋 메시지

✅ **{커밋 태그}: {메시지}**

ex) `feat: 댓글 등록 기능 추가`

<br>

### 💫 commit 태그

| 태그 | 설명 |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| refactor | 코드 리팩토링 |
| chore | 빌드 업무 수정, 패키지 매니저 수정 |
| docs | 문서 수정 |