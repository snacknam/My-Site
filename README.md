# Kwansik Nam Portfolio

React, TypeScript, Vite로 만든 한국어·영어 포트폴리오입니다. GitHub Pages를 운영 서버로 사용하며 `main` 브랜치에 병합하면 자동으로 배포됩니다.

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

## 개발과 배포

- 새 작업은 최신 `main`에서 목적에 맞는 작업 브랜치를 만들어 진행합니다.
- `main` 대상 PR에서는 GitHub Actions가 `npm run check`를 실행합니다.
- `main`에 병합되면 검사 후 GitHub Pages에 자동 배포됩니다.

권장 흐름은 `작업 브랜치 생성 → npm run check → main 대상 PR → 병합 및 운영 배포`입니다. GitHub 저장소의 Pages 배포 소스는 **GitHub Actions**로 설정해야 합니다.

## 주요 주소

- 한국어 홈: `/ko`
- 영어 홈: `/en`
- 프로젝트: `/:locale/projects/:slug`
- 소개: `/:locale/about`
- 사진: `/:locale/photography`

기존 `exemble.html` 같은 주소는 대응하는 새 한국어 주소로 자동 이동합니다.

## 콘텐츠 수정 위치

아카이브는 전체·디자인·개발 카테고리로 나뉩니다. 개발 글은 아카이브의 개발 카테고리(`/:locale/archives?category=development`)에서 주제로 필터링할 수 있습니다. `src/content/development.json`에는 2026-09-07에 Velog `@snack`에서 가져온 공개 글 65개의 원문 Markdown, 작성일, 태그, 출처가 있습니다. 본문 이미지 82개는 `image/development/`에 보관했습니다. 영어 화면에서도 이 글들은 한국어 원문으로 표시합니다. 새 개발 글은 같은 구조로 추가하면 목록·상세·사이트맵에 반영됩니다. 현재 총 156개 다국어 경로를 생성합니다.

디자인 생각 아카이브는 `/:locale/archives`에서 볼 수 있습니다. `src/content/archives.ts`의 `archives` 배열에 고유한 slug, 날짜, 한국어·영어 제목·요약·본문을 추가하면 목록과 상세 페이지, 프리렌더 및 사이트맵에 자동 반영됩니다. 현재 아카이브를 포함해 24개 다국어 경로를 생성합니다.

- 프로젝트 목록: `src/content/projects.ts`
- 프로젝트 상세: `src/content/projectDetails/`
- 기존 한국어 원문 연결: `src/content/legacyKorean.ts`와 루트의 기존 `.html` 파일
- 소개/경력: `src/content/about.ts`
- 사진 아카이브: `src/content/photography.ts`
- 공통 번역: `src/content/ui.ts`

사진을 추가할 때는 이미지 파일을 `image/` 아래에 넣고 `src/content/photography.ts`의 `photographs` 배열에 한국어·영어 메타데이터를 추가합니다. 피드와 상세 페이지는 자동으로 만들어집니다.

사진 메뉴(`/ko/photography`)를 열면 촬영일 기준 최신순으로 전체 사진 갤러리가 바로 표시됩니다. `/ko/photography/recents`도 전체 사진 갤러리로 유지합니다. `photoAlbums`에 고유한 slug와 한국어·영어 제목을 추가하고, 사진의 `albumSlugs`에 해당 slug를 지정하면 앨범이 연결됩니다. 선택적으로 `coverSlug`로 표지 사진을 지정할 수 있습니다. 사진 slug에는 예약 경로인 `recents`, `albums`를 사용하지 않습니다. 앨범과 사진 상세는 프리렌더·사이트맵에 자동 포함되며, 현재 빈 사진 데이터를 기준으로 총 26개 경로를 생성합니다.

한국어 프로젝트와 About은 기존 사이트의 문장, 목록, 버튼, 개행과 미디어 구성을 정확히 보존하기 위해 루트의 기존 HTML을 원문으로 사용합니다. 한국어 원문을 바꿀 때는 해당 `.html`을 수정하고 `npm run check`로 이미지·폰트 경로를 확인합니다.

## 다른 컴퓨터에서 이어서 작업하기

```bash
git clone https://github.com/snacknam/My-Site.git
cd My-Site
npm ci
npm run dev
```

새 Codex 작업에서는 `CODEX_HANDOFF.md`를 읽고 이어서 진행해 달라고 요청하면 됩니다.
