# Kwansik Nam Portfolio

React, TypeScript, Vite 기반의 포트폴리오입니다.

## 개발 환경

```bash
npm install
npm run dev
```

로컬 개발 서버의 변경사항은 공개 사이트에 영향을 주지 않습니다.

## 운영 배포

`main` 브랜치에 반영된 코드만 GitHub Actions에서 빌드되어 GitHub Pages에 배포됩니다.

## 브랜치 운영

- `dev`: 평소 개발 작업을 올리는 브랜치. 푸시할 때 빌드만 검사하며 공개 사이트에는 배포하지 않습니다.
- `main`: 운영 브랜치. `dev`의 검증된 작업을 병합하면 GitHub Pages에 자동 배포됩니다.

권장 흐름은 `dev에서 작업 → GitHub 빌드 검사 → main으로 병합 → 운영 배포`입니다.

```bash
npm run build
npm run preview
```

`npm run preview`로 배포용 결과물을 로컬에서 미리 확인할 수 있습니다.
