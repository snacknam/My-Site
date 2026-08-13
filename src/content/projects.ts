import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    slug: "exemble",
    hasReactDetail: true,
    content: {
      ko: { title: "사내 데이터 기반 LLM 워크플로우 환경 설계하기", description: "온프레미스 기반 LLM 서비스 Exemble" },
      en: { title: "Designing an LLM workflow powered by internal data", description: "Exemble, an on-premise LLM service" },
    },
    media: {
      ko: { image: "/image/main/exemble.jpg", alt: "Exemble 프로젝트 표지" },
      en: { image: "/image/main/exemble.jpg", alt: "Exemble project cover" },
    },
  },
  {
    slug: "exemui",
    hasReactDetail: true,
    content: {
      ko: { title: "디자인 라이브러리로 사내 제품 통합하기", description: "디자인 · 개발 통합 라이브러리 Exem UI" },
      en: { title: "Unifying products with a shared design library", description: "Exem UI, a library for design and development" },
    },
    media: {
      ko: { image: "/image/main/exemui.jpg", alt: "Exem UI 프로젝트 표지" },
      en: { image: "/image/main/exemui.jpg", alt: "Exem UI project cover" },
    },
  },
  {
    slug: "orbro",
    hasReactDetail: true,
    content: {
      ko: { title: "원칙부터 패턴까지, 디자인 시스템 구축하기", description: "디지털 트윈 서비스 Orbro 디자인 시스템" },
      en: { title: "Building a design system from principles to patterns", description: "Design system for the Orbro digital twin platform" },
    },
    media: {
      ko: { image: "/image/main/orbro.jpg", alt: "Orbro 프로젝트 표지" },
      en: { image: "/image/main/orbro.jpg", alt: "Orbro project cover" },
    },
  },
  {
    slug: "safetybell",
    hasReactDetail: true,
    content: {
      ko: { title: "경찰과 함께 경기도민의 긴급 상황 대처하기", description: "경기도 긴급 신고 시스템 모두의 안심벨" },
      en: { title: "Helping Gyeonggi residents respond to emergencies", description: "Safety Bell, an emergency reporting system" },
    },
    media: {
      ko: { image: "/image/main/safetybell.jpg", alt: "모두의 안심벨 프로젝트 표지" },
      en: { image: "/image/main/safetybell.jpg", alt: "Safety Bell project cover" },
    },
  },
  {
    slug: "ada",
    hasReactDetail: true,
    content: {
      ko: { title: "개발자로서 iOS와 개발 환경 공부하기", description: "Apple Developer Academy @ POSTECH" },
      en: { title: "Learning iOS and development as a developer", description: "Apple Developer Academy @ POSTECH" },
    },
    media: {
      ko: { image: "/image/main/ada.jpg", alt: "Apple Developer Academy 프로젝트 표지" },
      en: { image: "/image/main/ada.jpg", alt: "Apple Developer Academy project cover" },
    },
  },
  {
    slug: "together",
    hasReactDetail: true,
    content: {
      ko: { title: "공감을 통해 집중된 가사부담 해결하기", description: "가족 가사분담 서비스 Together" },
      en: { title: "Sharing concentrated household work through empathy", description: "Together, a household task-sharing service" },
    },
    media: {
      ko: { image: "/image/main/together.jpg", alt: "Together 프로젝트 표지" },
      en: { image: "/image/main/together.jpg", alt: "Together project cover" },
    },
  },
  {
    slug: "koin",
    hasReactDetail: true,
    content: {
      ko: { title: "Firebase로 음식 주문 사용성 개선하기", description: "학생 커뮤니티 플랫폼 Koin" },
      en: { title: "Improving food-ordering usability with Firebase", description: "Koin, a community platform for students" },
    },
    media: {
      ko: { image: "/image/main/koin.jpg", alt: "Koin 프로젝트 표지" },
      en: { image: "/image/main/koin.jpg", alt: "Koin project cover" },
    },
  },
];
