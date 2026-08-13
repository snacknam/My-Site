import type { Locale } from "../types/content";

export interface CareerItem { title: string; description: string }
export interface CareerYear { year: string; items: CareerItem[] }

export const aboutContent: Record<Locale, {
  title: string;
  introduction: string[];
  resumeLabel: string;
  timeline: CareerYear[];
}> = {
  ko: {
    title: "안녕하세요, 디자이너 남관식입니다",
    introduction: ["복잡하게 얽힌 구조 속에서 불필요한 것을 덜어내고 가장 기본적인 것을 남깁니다.", "기준을 세워 일관되고 확장 가능한 경험으로 정리하는 일을 좋아합니다."],
    resumeLabel: "이력서 확인",
    timeline: [
      { year: "2025", items: [{ title: "EXEM 근무", description: "프로덕트 디자이너·플랫폼 디자이너" }, { title: "널리소프트 근무", description: "프로덕트 디자이너" }] },
      { year: "2024", items: [{ title: "EXEM 근무", description: "프로덕트 디자이너" }] },
      { year: "2023", items: [{ title: "Apple Developer Academy @ POSTECH 수료", description: "iOS 개발 환경과 프로세스 학습" }, { title: "WWDC23 참여 및 KWDC23 발표", description: "Apple 생태계와 현장 경험 공유" }, { title: "Swift Student Challenge 우승", description: "달 위상 관측 앱 MellowYellows 개발" }] },
      { year: "2022", items: [{ title: "야곰 아카데미 코드 스타터 캠프 수료", description: "Swift 기초 학습" }, { title: "경영학 전문학사 취득", description: "국가평생교육진흥원 학점은행" }] },
      { year: "2021", items: [{ title: "ORBRO 근무", description: "UI/UX 디자이너" }, { title: "서비스경험디자인기사 취득", description: "제1회 국가기술자격검정 합격" }, { title: "한국기술교육대학교 졸업", description: "디자인공학과 제품디자인 전공" }] },
      { year: "2020", items: [{ title: "306Crew 인턴", description: "UI/UX 디자이너" }, { title: "라우드소싱 콘테스트 우승", description: "영수의 여행 모바일 앱 디자인" }] },
      { year: "2019", items: [{ title: "BCSD LAB 활동", description: "교내 서비스 개발 동아리 디자인 팀장" }] },
      { year: "2015", items: [{ title: "한국기술교육대학교 입학", description: "디자인공학과 제품디자인 전공" }] },
    ],
  },
  en: {
    title: "Hello, I'm Kwansik Nam, a product designer",
    introduction: ["I remove unnecessary complexity from tangled systems and keep what is essential.", "I enjoy establishing clear standards and turning them into consistent, scalable experiences."],
    resumeLabel: "View résumé",
    timeline: [
      { year: "2025", items: [{ title: "EXEM", description: "Product and platform designer" }, { title: "Nullysoft", description: "Product designer" }] },
      { year: "2024", items: [{ title: "EXEM", description: "Product designer" }] },
      { year: "2023", items: [{ title: "Apple Developer Academy @ POSTECH", description: "Studied iOS development environments and processes" }, { title: "WWDC23 and KWDC23", description: "Shared insights from the Apple ecosystem and event" }, { title: "Swift Student Challenge winner", description: "Built the MellowYellows moon-phase app" }] },
      { year: "2022", items: [{ title: "Yagom Code Starter Camp", description: "Studied Swift fundamentals" }, { title: "Associate degree in Business Administration", description: "National Institute for Lifelong Education" }] },
      { year: "2021", items: [{ title: "ORBRO", description: "UI/UX designer" }, { title: "Service Experience Design Engineer", description: "Passed the first national certification examination" }, { title: "Korea University of Technology and Education", description: "B.S. in Design Engineering, Product Design" }] },
      { year: "2020", items: [{ title: "306Crew internship", description: "UI/UX designer" }, { title: "Loudsourcing contest winner", description: "Designed the Youngsoo's Travel mobile app" }] },
      { year: "2019", items: [{ title: "BCSD LAB", description: "Design lead in a student product-development club" }] },
      { year: "2015", items: [{ title: "Korea University of Technology and Education", description: "Entered the Design Engineering program" }] },
    ],
  },
};
