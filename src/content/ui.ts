import type { Locale } from "../types/content";

export const ui = {
  ko: {
    introduction: ["안녕하세요 :)", "기술을 이해하고 시스템을 설계하는", "디자이너 남관식입니다"],
    navigation: { projects: "프로젝트", photography: "사진", development: "개발", about: "소개", language: "EN" },
    languageLabel: "영어로 보기",
    primaryNavigationLabel: "주요 메뉴",
    footerNavigationLabel: "하단 메뉴",
    skipToContent: "본문으로 건너뛰기",
    notFound: { title: "페이지를 찾을 수 없습니다", description: "주소가 변경되었거나 존재하지 않는 페이지입니다.", action: "프로젝트로 돌아가기" },
    photography: { title: "Photography", description: "일상에서 발견한 장면을 기록합니다.", empty: "아직 공개한 사진이 없습니다. 사진 데이터와 파일을 추가하면 이곳에 자동으로 표시됩니다." },
  },
  en: {
    introduction: ["Hello :)", "I understand technology and design systems.", "I'm Kwansik Nam, a product designer."],
    navigation: { projects: "Projects", photography: "Photography", development: "Development", about: "About", language: "KO" },
    languageLabel: "View in Korean",
    primaryNavigationLabel: "Primary navigation",
    footerNavigationLabel: "Footer navigation",
    skipToContent: "Skip to content",
    notFound: { title: "Page not found", description: "The page may have moved or does not exist.", action: "Back to projects" },
    photography: { title: "Photography", description: "A visual archive of moments I notice in everyday life.", empty: "No photographs have been published yet. Adding photo data and an image file will automatically populate this archive." },
  },
} satisfies Record<Locale, {
  introduction: string[];
  navigation: { projects: string; photography: string; development: string; about: string; language: string };
  languageLabel: string;
  primaryNavigationLabel: string;
  footerNavigationLabel: string;
  skipToContent: string;
  notFound: { title: string; description: string; action: string };
  photography: { title: string; description: string; empty: string };
}>;
