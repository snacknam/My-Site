# Codex 작업 인계

## 프로젝트 상태

기존 HTML/CSS 포트폴리오의 React + TypeScript + Vite 전환 10단계를 완료했다. 작업 브랜치는 `dev`, 운영 배포 브랜치는 `main`이다.

## 완료한 10단계

- [x] 1. 기준선 안정화: 의존성 버전 고정, ESLint·타입·콘텐츠·빌드 검사 통합
- [x] 2. 공통 구조: `SiteLayout`, 내비게이션, 디자인 토큰, 건너뛰기 링크와 포커스 스타일
- [x] 3. 콘텐츠 모델: UI, 프로젝트, 미디어를 한국어·영어 데이터로 분리
- [x] 4. 파일럿 이전: Safety Bell과 Exemble 상세 페이지를 React로 이전
- [x] 5. 전체 프로젝트 이전: Exem UI, Orbro, Together, Koin, ADA 상세 페이지와 영문 초안 추가
- [x] 6. About 이전: 한국어·영어 소개와 경력 페이지 구현
- [x] 7. 영문 완성도 검사: 양 언어 콘텐츠 파일과 참조 에셋 자동 검증
- [x] 8. Photography: 메뉴, 반응형 피드, 상세 화면, 빈 상태와 데이터 모델 구현
- [x] 9. 미디어 최적화: 로컬 가변 폰트, 이미지·영상 지연 로딩, `particle.mov` 71MB → 7.2MB
- [x] 10. SEO·배포: 20개 경로 프리렌더, canonical·hreflang·OG·Twitter·JSON-LD·sitemap·robots, 기존 주소 리다이렉트

## 현재 라우팅

- `/` → `/ko`
- `/:locale` → 홈
- `/:locale/projects/:slug` → 7개 프로젝트 상세
- `/:locale/about` → 소개
- `/:locale/photography` → 사진 피드
- `/:locale/photography/:slug` → 사진 상세
- 없는 경로 → 언어별 404

언어 전환은 현재 하위 경로를 보존한다. 예를 들어 `/ko/projects/exemui`에서 EN을 누르면 `/en/projects/exemui`로 이동한다.

## 실행과 검증

```bash
npm ci
npm run dev
npm run check
npm run preview
```

`npm run check`에 포함되는 검사:

1. ESLint
2. 한국어·영어 콘텐츠 및 이미지·PDF 경로 검증
3. TypeScript 빌드
4. Vite 클라이언트 빌드
5. React 서버 렌더링과 20개 정적 HTML 생성
6. 기존 `.html` 주소 리다이렉트 생성

## 배포 방식

- `.github/workflows/check.yml`: `dev` 푸시와 `main` 대상 PR에서 `npm run check`
- `.github/workflows/deploy.yml`: `main` 푸시에서 검사 후 `dist/`를 GitHub Pages에 배포
- `CNAME`: `kwansik.com` 유지
- GitHub Pages 설정의 Source는 **GitHub Actions**여야 한다.

개발 화면을 공유하려면 `dev`를 받은 뒤 로컬 서버를 실행한다. GitHub Pages는 브랜치별 미리보기 환경을 기본 제공하지 않으므로 `dev`는 검사 환경, `main`은 운영 환경으로 사용한다.

## 주요 파일

- `src/App.tsx`: 전체 라우팅
- `src/layouts/SiteLayout.tsx`: 공통 레이아웃
- `src/content/`: 번역 가능한 콘텐츠와 사진 데이터
- `src/content/projectDetails/`: 7개 프로젝트 상세
- `src/components/ProjectMedia.tsx`: 이미지·영상 표시와 지연 로딩
- `scripts/validate-content.mjs`: 콘텐츠와 에셋 검증
- `scripts/prerender.mjs`: 다국어 정적 HTML과 SEO 파일 생성
- `scripts/write-legacy-redirects.mjs`: 기존 `.html` 주소 호환

## 확인 결과

- 한국어·영어 20개 경로 렌더링 성공
- 전체 확인 경로에서 깨진 이미지 0개
- 데스크톱과 390px 모바일에서 가로 넘침 0개
- 프로젝트 상세 언어 전환 시 현재 프로젝트 유지
- 언어별 404 정상
- 브라우저 콘솔 오류 0개
- 기존 운영 사이트와 홈·About·7개 프로젝트의 글자 크기, 굵기, 행간, 공통 여백을 브라우저 계산값으로 대조
- About 데스크톱 전체 높이와 주요 요소 위치가 기존 운영 화면과 동일
- 모바일에서는 추가된 사진·언어 메뉴 공간을 확보하기 위해 개발 링크를 숨기고, 기존 24px 메뉴 간격과 프로필 로고를 유지
- 한국어 About과 7개 프로젝트는 기존 HTML 원문을 그대로 렌더링해 축약됐던 문장, 목록, 버튼과 미디어 구성을 모두 복원
- 7개 프로젝트의 원문 길이, 문단별 줄 수, 섹션 위치와 전체 페이지 높이가 기존 운영 페이지와 일치하는 것을 브라우저에서 검증
- Pretendard 가변 폰트를 기존 사이트와 같은 정적 Light 300, Regular 400 파일로 교체

## 콘텐츠 운영 시 주의

- 영어 프로젝트 문구는 게시 가능한 구조와 분량의 초안이다. 본인의 어조와 채용 포지션에 맞춘 최종 카피 검수는 별도로 권장한다.
- Photography 기능은 완성됐지만 개인 사진 데이터는 아직 비어 있다. `src/content/photography.ts`에 사진을 추가하면 피드와 상세 페이지가 자동 생성된다.
- 새 사진 상세 페이지를 검색 엔진에 노출하려면 `scripts/prerender.mjs`의 경로 생성부가 사진 데이터도 포함하도록 확장한다.

## 다른 컴퓨터에서 이어서 작업

```bash
git clone https://github.com/snacknam/My-Site.git
cd My-Site
git switch dev
npm ci
npm run dev
```

새 Codex 작업에서 다음과 같이 요청한다.

> `CODEX_HANDOFF.md`를 읽고 dev 브랜치 상태와 GitHub Actions를 확인한 다음 이어서 진행해줘.
