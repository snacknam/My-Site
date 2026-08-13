# Codex 작업 인계

## 목표

기존 HTML/CSS 기반 포트폴리오를 React + TypeScript + Vite로 점진적으로 전환한다.

- 한국어와 영어 사이트를 하나의 컴포넌트 구조로 관리한다.
- 언어를 바꾸면 텍스트뿐 아니라 이미지와 영상도 언어별로 교체할 수 있게 한다.
- 추후 Photography 메뉴와 사진 아카이브 피드를 추가한다.
- 운영 사이트는 기존 커스텀 도메인과 GitHub Pages를 유지한다.

## 현재 구현 상태

- React, TypeScript, Vite, React Router 기반 프로젝트를 구성했다.
- 기존 홈 화면을 React 컴포넌트로 이전했다.
- `/` 접속 시 `/ko`로 이동한다.
- `/ko`와 `/en`에서 언어별 홈 화면을 볼 수 있다.
- 헤더의 `EN` 또는 `KO` 링크로 언어를 전환할 수 있다.
- 프로젝트 텍스트와 미디어 경로를 언어별 데이터 구조로 분리했다.
- 기존 서울 시계와 낮/밤 아이콘 동작을 React로 이전했다.
- 기존 프로젝트 상세 페이지와 About 페이지는 아직 정적 HTML이며 빌드 시 원본 파일을 `dist/`로 복사한다.
- `main` 브랜치 푸시 시 GitHub Actions가 `dist/`를 GitHub Pages 운영 환경에 배포하도록 구성했다.
- SPA 직접 접속을 위해 빌드 시 `404.html`을 생성한다.
- 기존 `CNAME`, 이미지, 영상, PDF, 폰트와 정적 상세 페이지가 빌드 결과에 포함된다.

## 실행 방법

```bash
npm ci
npm run dev
```

개발 서버에서 확인할 주소:

- 한국어 홈: `http://127.0.0.1:5173/ko`
- 영어 홈: `http://127.0.0.1:5173/en`

운영 빌드 확인:

```bash
npm run build
npm run preview
```

## 개발 환경과 운영 환경

- `npm run dev`: 로컬 개발 서버. 공개 사이트에 영향을 주지 않는다.
- `npm run preview`: 운영 빌드 결과를 로컬에서 확인한다.
- GitHub Pages: `main` 브랜치에 반영된 빌드만 운영 배포한다.
- GitHub 저장소의 Pages 설정에서 배포 소스를 **GitHub Actions**로 선택해야 한다.

## 주요 파일

- `src/App.tsx`: 최상위 라우팅
- `src/pages/HomePage.tsx`: 언어별 홈 화면
- `src/components/`: 내비게이션, 서울 시계, 프로젝트 카드
- `src/content/ui.ts`: 언어별 공통 UI 문구
- `src/content/projects.ts`: 언어별 프로젝트 목록 문구와 미디어 경로
- `src/types/content.ts`: 다국어 콘텐츠 타입
- `.github/workflows/deploy.yml`: GitHub Pages 운영 배포

## 다음 작업

1. 기존 프로젝트 상세 HTML을 React 컴포넌트로 점진적으로 이전한다.
2. 상세 페이지 URL을 `/ko/projects/:slug`, `/en/projects/:slug`로 구성한다.
3. 프로젝트별 한국어·영어 본문 및 언어별 이미지/영상 데이터 모델을 확장한다.
4. About 페이지를 React로 이전하고 영어 콘텐츠를 추가한다.
5. Photography 메뉴, 반응형 사진 피드와 사진 상세 보기를 구현한다.
6. 페이지별 title, description, canonical, hreflang 등 다국어 SEO를 적용한다.
7. 모바일과 데스크톱에서 시각 회귀 및 접근성을 점검한다.

## 확인 및 주의사항

- 영어 프로젝트 문구는 구조 검증을 위한 초안이므로 최종 카피 검수가 필요하다.
- 기존 상세 페이지는 React 이전 전까지 `.html` 주소로 연결된다.
- 기존 Google Analytics 스크립트는 React 진입 HTML로 아직 이전하지 않았다.
- 현재 GitHub Actions 파일은 브랜치에 포함되지만 `main`에 병합되기 전에는 운영 배포를 실행하지 않는다.
- GitHub Pages의 커스텀 도메인은 기존 `CNAME` 값인 `kwansik.com`을 유지한다.

## 다른 컴퓨터에서 이어서 작업하기

```bash
git clone https://github.com/snacknam/My-Site.git
cd My-Site
git switch agent/react-migration
npm ci
npm run dev
```

새 Codex 작업에서는 다음처럼 요청한다.

> `CODEX_HANDOFF.md`를 읽고 현재 브랜치의 변경사항을 확인한 다음, 다음 작업부터 이어서 진행해줘.
