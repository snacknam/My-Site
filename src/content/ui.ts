import type { Locale } from "../types/content";

export const ui = {
  ko: {
    introduction: ["안녕하세요 :)", "기술을 이해하고 시스템을 설계하는", "디자이너 남관식입니다"],
    navigation: { projects: "프로젝트", development: "개발", about: "소개", language: "EN" },
    languageLabel: "영어로 보기",
  },
  en: {
    introduction: ["Hello :)", "I understand technology and design systems.", "I'm Kwansik Nam, a product designer."],
    navigation: { projects: "Projects", development: "Development", about: "About", language: "KO" },
    languageLabel: "View in Korean",
  },
} satisfies Record<Locale, object>;
