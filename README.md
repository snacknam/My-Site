# Kwansik Nam Portfolio

React, TypeScript, Vite로 만든 한국어·영어 포트폴리오입니다. GitHub Pages를 운영 서버로 사용하며 `main` 브랜치에 푸시하면 자동으로 검사하고 배포합니다.

## 로컬 실행

```bash
npm ci
npm run dev
```

터미널에 표시되는 주소에서 `/ko` 또는 `/en`을 엽니다. 운영 빌드와 동일한 검사는 다음 명령으로 실행합니다.

```bash
npm run check
npm run preview
```

`npm run check`는 ESLint, 다국어 콘텐츠와 에셋 검사, TypeScript 컴파일, 클라이언트·서버 빌드, 202개 경로의 정적 HTML 생성을 순서대로 수행합니다.

## 주요 경로

- 홈: `/:locale`
- 프로젝트 상세: `/:locale/projects/:slug`
- 아카이브: `/:locale/archives`
- 아카이브 상세: `/:locale/archives/:slug`
- 사진: `/:locale/photography`
- 사진 상세: `/:locale/photography/:slug`
- 소개: `/:locale/about`

지원 언어는 한국어(`ko`)와 영어(`en`)입니다. 기존 `exemble.html` 같은 주소는 대응하는 한국어 프로젝트 주소로 자동 이동합니다.

## 콘텐츠 관리

- 프로젝트 목록: `src/content/projects.ts`
- 프로젝트 상세: `src/content/projectDetails/`
- 한국어 프로젝트·소개 원문: `src/content/legacyKorean.ts`와 `src/content/legacy/`
- 아카이브: `src/content/archives.ts`
- 개발 아카이브: `src/content/development.json`
- 사진: `src/content/photography.ts`
- 소개와 경력: `src/content/about.ts`
- 공통 번역: `src/content/ui.ts`

현재 아카이브에는 디자인 글 1개와 개발 글 65개가 있습니다. 개발 글의 Markdown 이미지 82개는 `image/development/`에 보관하며, 영어 화면에서도 개발 글은 한국어 원문으로 표시합니다.

사진 컬렉션에는 23개 항목이 있습니다. 사진 파일을 `image/photography/`에 추가하고 `src/content/photography.ts`의 `photographs` 배열에 한국어·영어 메타데이터를 등록하면 목록·상세·사이트맵에 반영됩니다. 앨범은 `photoAlbums`와 각 사진의 `albumSlugs`로 연결합니다.

한국어 프로젝트와 소개는 기존 문장, 목록, 버튼, 개행과 미디어 구성을 보존한 HTML 본문 조각을 사용합니다. 원문을 수정한 뒤 `npm run check`로 에셋 경로를 확인해야 합니다.

## 배포

- Pull Request: `.github/workflows/check.yml`에서 `npm run check` 실행
- `main` 푸시: `.github/workflows/deploy.yml`에서 검사 후 `dist/`를 GitHub Pages에 배포
- 도메인: [kwansik.com](https://kwansik.com)

GitHub Pages의 Source 설정은 **GitHub Actions**를 사용합니다.
