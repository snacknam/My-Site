# Kwansik Nam Portfolio

React, TypeScript, Vite로 만든 한국어·영어 포트폴리오입니다. GitHub Pages를 운영 서버로 사용하며 `dev`와 `main` 브랜치로 개발과 배포를 분리합니다.

## 로컬에서 확인하기

```bash
npm ci
npm run dev
```

터미널에 표시되는 주소에서 `/ko` 또는 `/en`을 엽니다. 로컬 변경은 공개 사이트에 영향을 주지 않습니다.

운영 빌드와 동일한 결과를 확인하려면 다음 명령을 사용합니다.

```bash
npm run check
npm run preview
```

`npm run check`는 코드 규칙, 한국어·영어 콘텐츠와 이미지 경로, 타입, 빌드, 20개 다국어 페이지의 HTML 생성을 한 번에 검사합니다.

## 브랜치와 배포

- `dev`: 평소 작업 브랜치. GitHub Actions가 검사만 하고 공개 사이트는 바꾸지 않습니다.
- `main`: 운영 브랜치. 푸시되면 GitHub Pages에 자동 배포됩니다.

권장 흐름은 `dev에서 작업 → 검사 통과 → dev를 main으로 병합 → 운영 배포`입니다. GitHub 저장소의 Pages 배포 소스는 **GitHub Actions**로 설정해야 합니다.

## 주요 주소

- 한국어 홈: `/ko`
- 영어 홈: `/en`
- 프로젝트: `/:locale/projects/:slug`
- 소개: `/:locale/about`
- 사진: `/:locale/photography`

기존 `exemble.html` 같은 주소는 대응하는 새 한국어 주소로 자동 이동합니다.

## 콘텐츠 수정 위치

- 프로젝트 목록: `src/content/projects.ts`
- 프로젝트 상세: `src/content/projectDetails/`
- 기존 한국어 원문 연결: `src/content/legacyKorean.ts`와 루트의 기존 `.html` 파일
- 소개/경력: `src/content/about.ts`
- 사진 아카이브: `src/content/photography.ts`
- 공통 번역: `src/content/ui.ts`

사진을 추가할 때는 이미지 파일을 `image/` 아래에 넣고 `src/content/photography.ts`의 `photographs` 배열에 한국어·영어 메타데이터를 추가합니다. 피드와 상세 페이지는 자동으로 만들어집니다.

한국어 프로젝트와 About은 기존 사이트의 문장, 목록, 버튼, 개행과 미디어 구성을 정확히 보존하기 위해 루트의 기존 HTML을 원문으로 사용합니다. 한국어 원문을 바꿀 때는 해당 `.html`을 수정하고 `npm run check`로 이미지·폰트 경로를 확인합니다.

## 다른 컴퓨터에서 이어서 작업하기

```bash
git clone https://github.com/snacknam/My-Site.git
cd My-Site
git switch dev
npm ci
npm run dev
```

새 Codex 작업에서는 `CODEX_HANDOFF.md`를 읽고 이어서 진행해 달라고 요청하면 됩니다.
