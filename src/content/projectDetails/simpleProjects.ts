import type { ProjectDetail, ProjectMediaItem } from "../../types/content";

interface BilingualSection {
  id: string;
  ko: [title: string, body: string];
  en: [title: string, body: string];
  media?: string[];
}

interface SimpleProjectSource {
  slug: string;
  name: string;
  koHeadline: string;
  enHeadline: string;
  koMetadata: string;
  enMetadata: string;
  koIntroduction: string;
  enIntroduction: string;
  cover: string;
  sections: BilingualSection[];
}

function mediaItem(src: string, title: string): ProjectMediaItem {
  const isVideo = /\.(mov|mp4|webm)$/i.test(src);
  return isVideo
    ? { type: "video", src, label: title, caption: title }
    : { type: "image", src, alt: title, caption: title };
}

function makeProject(source: SimpleProjectSource): ProjectDetail {
  const localized = (locale: "ko" | "en") => ({
    name: source.name,
    headline: locale === "ko" ? source.koHeadline : source.enHeadline,
    metadata: locale === "ko" ? source.koMetadata : source.enMetadata,
    introduction: [locale === "ko" ? source.koIntroduction : source.enIntroduction],
    cover: {
      image: source.cover,
      alt: locale === "ko" ? `${source.name} 프로젝트 대표 화면` : `${source.name} project overview`,
    },
    sections: source.sections.map((section) => {
      const [title, body] = section[locale];
      return {
        id: section.id,
        title,
        paragraphs: [body],
        media: section.media?.map((src) => mediaItem(src, title)),
      };
    }),
  });

  return { slug: source.slug, content: { ko: localized("ko"), en: localized("en") } };
}

export const exemUiProject = makeProject({
  slug: "exemui",
  name: "Exem UI",
  koHeadline: "디자인 라이브러리로 사내 제품 통합하기",
  enHeadline: "Unifying internal products with a design library",
  koMetadata: "디자인·개발 통합 라이브러리 Exem UI · 2025.05–2026.02",
  enMetadata: "Unified design and development library · May 2025–Feb 2026",
  koIntroduction: "서로 다른 방식으로 만들어진 사내 제품을 하나의 경험으로 통합하기 위해 디자인과 개발이 같은 구조를 공유하는 라이브러리를 구축했습니다.",
  enIntroduction: "I built a shared design and development library to unify internal products that had evolved with different structures, styles, and component rules.",
  cover: "/image/exemui/img_1.jpg",
  sections: [
    { id: "common-system", ko: ["사내 제품 통합을 위한 공통 시스템", "제품마다 달랐던 화면 구조와 컴포넌트 기준은 경험의 불일치와 유지보수 비용을 만들었습니다. 제품이 확장되어도 일관성을 유지할 수 있는 공통 시스템이 필요했습니다."], en: ["A shared system for product unification", "Different structures and component rules created inconsistent experiences and rising maintenance costs. A shared system was needed to preserve consistency as products expanded."], media: ["/image/exemui/img_2.jpg"] },
    { id: "frontend-library", ko: ["프론트엔드 환경에 기반한 라이브러리 구축", "실제 제품에 적용되는 라이브러리를 목표로 각 개발팀과 구현 방식을 조율하고 React와 Tailwind 등 사용 기술을 고려해 시스템을 설계했습니다."], en: ["A library grounded in the frontend environment", "The system was designed as a production library, aligning implementation with each engineering team and the React and Tailwind stack used by the products."], media: ["/image/exemui/img_3.jpg"] },
    { id: "design-code-alignment", ko: ["디자인과 개발 구조의 정합성 설계", "컴포넌트 Props, 변수명과 상태 구조를 개발팀과 함께 정의해 디자인과 코드가 같은 언어로 소통하도록 만들었습니다."], en: ["Aligning design and code structures", "Component props, variable names, and states were defined with engineers so design and implementation could share the same language."], media: ["/image/exemui/img_4.jpg"] },
    { id: "figma-components", ko: ["디자인 컴포넌트 구조의 효율화", "Nested Instance, Instance Swap과 Slot을 활용해 적은 컴포넌트로 다양한 화면 맥락을 빠르고 일관되게 구성했습니다."], en: ["A more efficient Figma component structure", "Nested instances, instance swaps, and slots made components reusable across contexts while keeping composition fast and consistent."], media: ["/image/exemui/img_5.jpg"] },
    { id: "theme-tokens", ko: ["컬러 토큰 기반의 다크 테마 체계", "의미 기반 컬러 토큰과 Figma Variables로 라이트·다크 테마를 지원하고, 투명도 기반 elevation으로 일관된 레이어 위계를 표현했습니다."], en: ["Dark themes built with color tokens", "Semantic tokens and Figma Variables support light and dark themes, while opacity-based elevation preserves a consistent layer hierarchy."], media: ["/image/exemui/img_6.jpg"] },
    { id: "contribution-guide", ko: ["모두가 기여할 수 있는 디자인 가이드", "개인의 감각이 아닌 명확한 기준으로 신규 디자이너와 여러 제품 담당자가 시스템에 일관되게 기여할 수 있도록 가이드를 만들었습니다."], en: ["A design guide everyone can contribute to", "Clear shared guidance lets new designers and product teams contribute consistently without relying on one person's intuition."], media: ["/image/exemui/img_7.jpg"] },
    { id: "documentation", ko: ["라이브러리 문서화를 위한 사이트 구축", "디자인과 개발 구성 요소, 활용 방식과 변경 이력을 한곳에서 공유하는 Exem UI 문서 사이트를 구축했습니다."], en: ["A documentation site for the library", "The Exem UI site documents design and development elements, usage, and change history in one shared reference."], media: ["/image/exemui/img_8.jpg"] },
    { id: "playground", ko: ["디자인 스펙과 사용 맥락에 대한 이해", "속성과 상태를 조작하는 Playground와 Usage 가이드로 스펙뿐 아니라 실제 동작과 사용 맥락을 이해하도록 했습니다."], en: ["Understanding specifications in context", "An interactive playground and usage guidance explain not only component specs but also behavior and real product context."], media: ["/image/exemui/img_9.jpg"] },
    { id: "governance", ko: ["지속 가능한 시스템 운영 정책 수립", "책임과 권한, 커뮤니케이션과 작업 프로세스를 함께 정의해 특정 개인에게 의존하지 않고 계속 개선되는 운영 구조를 만들었습니다."], en: ["Sustainable system governance", "Ownership, communication, and contribution processes keep the system improving without dependence on a single person or team."], media: ["/image/exemui/img_10.jpg"] },
    { id: "ai-ready", ko: ["AI 활용을 고려한 라이브러리 환경", "CLI 설치 환경과 디자인 가이드 연결로 LLM이 라이브러리를 이해하고 내부 도구와 문서 제작에도 같은 디자인 언어를 사용하도록 확장했습니다."], en: ["A library environment prepared for AI", "CLI installation and connected guidelines help LLM tools understand and apply the library to products, documents, and internal tools."], media: ["/image/exemui/img_11.jpg"] },
    { id: "internal-product", ko: ["Exem UI를 활용한 인터널 프로덕트 제작 사례", "Claude Code에 라이브러리와 가이드를 적용해 3주 안에 내부 제품의 기획·디자인·개발을 완성하며 시스템의 실용성을 검증했습니다."], en: ["Building an internal product with Exem UI", "Applying the library and guidance in Claude Code enabled an internal product to move from planning to implementation in three weeks."], media: ["/image/exemui/img_12.jpg"] },
    { id: "organizational-impact", ko: ["조직 전체의 비효율을 해결한 경험", "제품 조직 사이의 이해관계를 조율하고 새 기준을 정착시켜 개별 화면을 넘어 조직의 업무 비효율을 구조적으로 개선했습니다."], en: ["Addressing inefficiency across the organization", "Aligning product teams around shared standards turned the project from a UI library into a structural improvement to how the organization works."], media: ["/image/exemui/img_13.jpg"] },
  ],
});

export const orbroProject = makeProject({
  slug: "orbro", name: "Orbro",
  koHeadline: "원칙부터 패턴까지, 디자인 시스템 구축하기", enHeadline: "Building a design system from principles to patterns",
  koMetadata: "디지털 트윈 서비스 Orbro 디자인 시스템 · 2022.10–2022.12", enMetadata: "Design system for the Orbro digital twin platform · Oct–Dec 2022",
  koIntroduction: "여러 제품과 외부 플러그인이 공존하는 디지털 트윈 플랫폼에서 일관된 경험과 효율적인 협업을 만들기 위해 디자인 시스템을 구축했습니다.",
  enIntroduction: "I built a design system for a digital twin platform where multiple products and third-party plugins needed a consistent experience and a more efficient workflow.", cover: "/image/orbro/img_1.jpg",
  sections: [
    { id: "need", ko: ["디자인 시스템이 왜 필요한가?", "다수의 제품과 외부 작업자가 가이드 없이 일관된 경험을 만드는 데 한계가 있어 공통 기준이 필요했습니다."], en: ["Why the design system was needed", "Multiple products and external contributors made consistency difficult without a shared foundation."], media: ["/image/orbro/img_2.jpg"] },
    { id: "principles", ko: ["시스템의 기준이 되는 디자인 원칙", "서비스 환경을 바탕으로 의사결정의 근거가 되는 원칙과 Orbro만의 디자인 철학을 정의했습니다."], en: ["Principles as the system's foundation", "Product-informed principles became a basis for design decisions and an expression of Orbro's design philosophy."], media: ["/image/orbro/img_3.jpg"] },
    { id: "definition", ko: ["컴포넌트의 기능적 정의", "재사용성이 높은 컴포넌트를 선정하고 variants, anatomy와 states를 기준으로 기능을 다시 정의했습니다."], en: ["Functional component definitions", "Reusable components were selected and defined through variants, anatomy, and states."], media: ["/image/orbro/img_4.jpg"] },
    { id: "ux-guide", ko: ["컴포넌트 UX 가이드라인", "같은 상황에서 다른 컴포넌트를 쓰는 문제를 해결하기 위해 목적, 변형과 주의사항을 문서화했습니다."], en: ["Component UX guidance", "Usage, variants, and cautions were documented to prevent inconsistent choices in the same context."], media: ["/image/orbro/img_5.jpg"] },
    { id: "ui-guide", ko: ["컴포넌트 UI 가이드라인", "컴포넌트의 구성과 외형, 상황별 표현을 통일해 디자인 일관성과 개발 효율을 높였습니다."], en: ["Component UI guidance", "Consistent anatomy, appearance, and state presentation improved both design consistency and implementation efficiency."], media: ["/image/orbro/img_6.jpg"] },
    { id: "type", ko: ["데이터에 최적화된 타이포그래피", "플랫폼마다 달랐던 폰트를 통일하고 데이터 중심 화면의 가독성과 레이아웃 안정성을 개선했습니다."], en: ["Typography optimized for data", "A unified type system replaced platform-specific fonts and improved readability and layout stability in data-heavy interfaces."], media: ["/image/orbro/img_7.jpg"] },
    { id: "color", ko: ["컬러 시스템과 시멘틱 컬러 토큰", "제품 컬러를 명도별 팔레트와 사용 목적에 따른 시멘틱 토큰으로 정리했습니다."], en: ["Color system and semantic tokens", "Product colors were organized into tonal palettes and semantic tokens based on usage."], media: ["/image/orbro/img_8.jpg"] },
    { id: "icons", ko: ["브랜드를 표현할 수 있는 아이콘", "BX 디자이너와 협업해 의미 전달과 브랜드 표현을 함께 만족하는 다섯 종류의 아이콘 체계를 만들었습니다."], en: ["Icons that express the brand", "Collaboration with brand design produced five icon categories balancing clarity and brand expression."], media: ["/image/orbro/img_9.jpg"] },
    { id: "layout", ko: ["반응형과 데이터 타입을 고려한 레이아웃", "4px 기준과 16컬럼 그리드로 반응형 카드, 데이터 테이블과 그래프 레이아웃을 정의했습니다."], en: ["Layouts for responsive and data contexts", "A 4px base and 16-column grid support responsive cards, data tables, and charts."], media: ["/image/orbro/img_10.jpg"] },
    { id: "figma-assets", ko: ["디자인 작업 효율을 위한 시스템 에셋화", "컴포넌트, 타입, 컬러와 아이콘을 Figma 라이브러리로 제공해 반복 작업을 줄였습니다."], en: ["System assets for efficient design", "Components, typography, color, and icons were published as Figma assets to reduce repetitive work."], media: ["/image/orbro/img_11.jpg"] },
    { id: "code-library", ko: ["개발 작업 효율을 위한 시스템 라이브러리화", "문서와 에셋을 개발팀과 공유하고 코드 라이브러리로 구현해 개발 과정의 효율도 높였습니다."], en: ["A coded library for engineering efficiency", "Documentation and assets were shared with engineers and implemented as a reusable code library."], media: ["/image/orbro/img_12.jpg"] },
    { id: "reflection", ko: ["디자인 시스템 구축 후기", "UI 요소의 역할과 맥락을 깊이 이해하고, 모호한 판단과 불필요한 고민을 공통 기준으로 해결하는 경험을 얻었습니다."], en: ["What I learned", "The work deepened my understanding of UI roles and context and showed how shared standards remove ambiguity."], media: ["/image/orbro/img_13.jpg"] },
  ],
});

export const togetherProject = makeProject({
  slug: "together", name: "Together", koHeadline: "공감을 통해 집중된 가사 부담 해결하기", enHeadline: "Sharing concentrated household work through empathy",
  koMetadata: "가족 가사분담 서비스 Together · 2021.01–2021.02", enMetadata: "Household task-sharing service · Jan–Feb 2021",
  koIntroduction: "한 사람에게 집중되는 가사 부담을 명확한 역할 분담, 성과의 시각화와 가족 간 공감으로 완화하는 서비스를 설계했습니다.",
  enIntroduction: "I designed a family task-sharing service that reduces concentrated household work through clear ownership, visible progress, and empathy.", cover: "/image/together/img_1.jpg",
  sections: [
    { id: "inequality", ko: ["인식과 달리 공평하지 못한 가사분담", "공평한 분담에 대한 인식은 높아졌지만 실제 행동의 격차와 가족 갈등은 계속되고 있었습니다."], en: ["Household work remained unequal", "Awareness of fair sharing had grown, but behavior still lagged and family conflict continued."], media: ["/image/together/img_2.jpg"] },
    { id: "ownership", ko: ["주인의식 부족과 동기부여의 부재", "가사가 한 명에게 집중된 가정에서는 함께한다기보다 도와준다는 인식과 지속적인 동기 부족이 나타났습니다."], en: ["Limited ownership and motivation", "In unequal households, chores were framed as helping one person rather than shared ownership, with little lasting motivation."], media: ["/image/together/img_3.jpg"] },
    { id: "roles", ko: ["공평한 가정일수록 역할을 정해서 전담", "공평하게 분담하는 가정은 능력에 따라 명확한 역할을 정하고 각자 책임지는 비율이 높았습니다."], en: ["Fairer households assigned clear roles", "Households with fairer sharing were more likely to assign work by ability and give each person clear ownership."], media: ["/image/together/img_4.jpg"] },
    { id: "empathy", ko: ["가장 중요한 것은 서로에 대한 이해와 공감", "리서치에서 가장 중요한 인사이트는 상대의 상황과 성향을 이해하고 공감하는 태도였습니다."], en: ["Understanding and empathy mattered most", "The strongest insight was the importance of understanding and empathizing with each family member's situation."], media: ["/image/together/img_5.jpg"] },
    { id: "personas", ko: ["가사 부담이 집중된 상황에서의 두 사용자 유형", "두 페르소나와 문제 시나리오를 만들고 각자의 니즈를 서비스 컨셉에 반영했습니다."], en: ["Two user types in an unequal household", "Two personas and problem scenarios translated different needs into the service concept."], media: ["/image/together/img_6.jpg"] },
    { id: "concept", ko: ["명확한 역할 분담과 지속적인 동기부여", "명확한 역할, 시각화된 성과, 칭찬과 격려를 통해 책임감과 지속적인 동기를 만들었습니다."], en: ["Clear ownership and lasting motivation", "Clear roles, visible progress, and family encouragement create responsibility and ongoing motivation."], media: ["/image/together/img_7.jpg"] },
    { id: "structure", ko: ["가족 모두가 사용할 수 있는 단순한 서비스 구조", "연령과 디지털 친숙도에 상관없이 사용할 수 있도록 구조를 단순화하고 핵심 기능에 집중했습니다."], en: ["A simple structure for the whole family", "The structure was simplified around essential features so all ages and levels of digital familiarity could participate."], media: ["/image/together/img_8.jpg"] },
    { id: "tasks", ko: ["집안일을 추가하고 완료 후 댓글 남기기", "누구나 집안일을 추가하고 역할을 공유하며, 간단한 제스처로 완료한 뒤 댓글로 격려할 수 있습니다."], en: ["Adding tasks and leaving encouragement", "Any family member can add and assign a task, complete it with a simple gesture, and leave an encouraging comment."], media: ["/image/together/img_9.jpg"] },
    { id: "progress", ko: ["함께한 집안일을 확인하고 가족 관리하기", "차트로 함께한 성과를 확인하고 역할을 조율하며 링크로 가족 구성원을 쉽게 초대합니다."], en: ["Reviewing progress and managing the family", "Charts make shared progress visible, support role coordination, and let families invite members by link."], media: ["/image/together/img_10.jpg"] },
    { id: "notifications", ko: ["알림을 확인하고 프로필 관리하기", "집안일과 댓글 알림, 프로필과 알림 설정 등 서비스 이용에 필요한 기능을 제공합니다."], en: ["Notifications and profile management", "Task and comment notifications sit alongside profile and preference controls."], media: ["/image/together/img_11.jpg"] },
    { id: "attention", ko: ["집안일에 대한 지속적인 관심", "푸시 알림과 위젯으로 앱 밖에서도 집안일을 떠올리고 함께 책임지는 태도를 유지합니다."], en: ["Keeping household work visible", "Push notifications and widgets maintain awareness and a sense of shared responsibility beyond the app."], media: ["/image/together/img_12.jpg"] },
    { id: "validation", ko: ["실제 인터뷰이들의 긍정적 기대", "인터뷰 참여자들은 서비스가 실제로 가사 부담과 동기 문제를 완화하는 데 도움이 될 것이라는 긍정적 반응을 보였습니다."], en: ["Positive expectations from interviewees", "Interview participants responded that the concept could meaningfully reduce workload and motivation problems."], media: ["/image/together/img_13.jpg"] },
  ],
});

export const koinProject = makeProject({
  slug: "koin", name: "Koin", koHeadline: "Firebase로 음식 주문 사용성 개선하기", enHeadline: "Improving food-ordering usability with Firebase",
  koMetadata: "학생 커뮤니티 플랫폼 Koin · 2020.09–2020.10", enMetadata: "Student community platform Koin · Sep–Oct 2020",
  koIntroduction: "교내 주변 상점에서 원하는 정보와 메뉴를 더 빠르게 찾도록 검색과 탐색 흐름을 개선하고, 실제 주문 완료 시간을 줄였습니다.",
  enIntroduction: "I improved search and browsing for nearby campus shops so students could find menus faster and complete phone orders in less time.", cover: "/image/koin/img_1.jpg",
  sections: [
    { id: "problem", ko: ["불편한 주문 과정", "상점 정보가 있어도 사용자는 원하는 메뉴를 찾고 주문하기까지 많은 어려움을 겪었습니다."], en: ["A difficult ordering journey", "Even with shop data available, students struggled to find the right menu and complete an order."], media: ["/image/koin/img_2.jpg"] },
    { id: "hypothesis", ko: ["가설과 KPI 설정", "원하는 정보를 빠르게 찾으면 주문 시간이 단축될 것이라는 가설을 세우고 태스크 달성 시간을 KPI로 정했습니다."], en: ["Hypothesis and KPI", "I hypothesized that faster information discovery would reduce ordering time and selected task completion time as the KPI."], media: ["/image/koin/img_3.jpg"] },
    { id: "benchmark", ko: ["유사 서비스 분석", "배달 앱의 주문 과정을 직접 분석해 장점과 차별점을 개선 방향에 반영했습니다."], en: ["Competitive analysis", "Ordering flows in delivery apps were reviewed to identify useful patterns and opportunities for differentiation."], media: ["/image/koin/img_4.jpg"] },
    { id: "types", ko: ["두 가지 사용자 유형", "특정 상점을 찾는 사용자와 메뉴를 둘러보는 사용자로 나누어 필요한 경험을 정의했습니다."], en: ["Two browsing intentions", "Users were divided into those seeking a specific shop and those exploring possible menus." ] },
    { id: "search", ko: ["상점 검색", "실시간 검색으로 특정 상점을 가장 직접적으로 찾도록 별도 검색 흐름을 추가했습니다."], en: ["Shop search", "A dedicated real-time search flow helps users reach a known shop directly."], media: ["/image/koin/img_5.jpg"] },
    { id: "recommend", ko: ["상점 추천", "메뉴를 일부 접고 같은 카테고리의 상점을 추천해 둘러보기 흐름을 단축했습니다."], en: ["Shop recommendations", "Collapsing long menus and recommending similar shops shortened exploratory browsing."], media: ["/image/koin/img_6.jpg"] },
    { id: "flyers", ko: ["전단지 이미지", "직접 수집한 전단지를 확대·축소 가능한 이미지로 제공해 메뉴를 빠르게 훑도록 했습니다."], en: ["Flyer images", "Collected flyers are presented as zoomable images for quick menu scanning."], media: ["/image/koin/img_7.jpg"] },
    { id: "open-status", ko: ["개점 상태", "영업 전 상점을 준비중으로 표시하고 목록 아래로 정렬해 불필요한 상세 진입을 줄였습니다."], en: ["Opening status", "Closed shops are marked as preparing and moved down the list to prevent wasted navigation."], media: ["/image/koin/img_8.jpg"] },
    { id: "call", ko: ["전화하기 버튼", "주문 버튼을 화면 하단에 고정해 메뉴를 본 뒤 위로 되돌아갈 필요 없이 바로 전화하도록 했습니다."], en: ["Persistent call action", "A fixed call button lets users order immediately after reviewing a menu without scrolling back to the top."], media: ["/image/koin/img_9.jpg"] },
    { id: "final", ko: ["개선 후 최종 디자인", "검색, 추천, 전단지, 개점 상태와 전화 버튼의 다섯 개선안을 실제 앱에 배포했습니다."], en: ["Final design", "Five improvements—search, recommendations, flyers, opening status, and the call action—were released in the app."], media: ["/image/koin/img_10.jpg"] },
    { id: "result", ko: ["가설 검증", "개선 전후 태스크 시간을 비교한 결과 음식 주문 시간이 약 44% 감소해 가설을 검증했습니다."], en: ["Validating the hypothesis", "Task-time comparison showed that ordering became about 44% faster after the redesign."], media: ["/image/koin/img_11.jpg"] },
  ],
});

export const adaProject = makeProject({
  slug: "ada", name: "Apple", koHeadline: "개발자로서 iOS와 개발 환경 공부하기", enHeadline: "Learning iOS and product development as an engineer",
  koMetadata: "Apple Developer Academy @ POSTECH · 2023.03–2023.12", enMetadata: "Apple Developer Academy @ POSTECH · Mar–Dec 2023",
  koIntroduction: "Apple Developer Academy에서 Swift와 SwiftUI로 여러 앱을 직접 개발하며 디자인이 구현되는 과정과 개발 협업을 깊이 이해했습니다.",
  enIntroduction: "At the Apple Developer Academy, I built several apps with Swift and SwiftUI and gained a deeper understanding of implementation and design–engineering collaboration.", cover: "/image/ada/img_1.jpg",
  sections: [
    { id: "mellow", ko: ["달 위상 관측 앱 MellowYellows", "오늘의 달 위상과 밤하늘 밝기를 표현하는 앱을 디자인하고 SwiftUI로 직접 개발했습니다."], en: ["MellowYellows moon-phase app", "I designed and built a SwiftUI app that visualizes the current moon phase and changing brightness of the night sky."], media: ["/image/ada/intro.mp4", "/image/ada/stars.mp4", "/image/ada/cloudy.mp4"] },
    { id: "ssc", ko: ["Swift Student Challenge 우승", "MellowYellows가 우승작으로 선정되어 Apple 본사의 WWDC23에 초대받았습니다."], en: ["Swift Student Challenge winner", "MellowYellows was selected as a winning submission, leading to an invitation to WWDC23 at Apple."], media: ["/image/ada/img_2.jpg"] },
    { id: "wwdc", ko: ["Apple Park에서 WWDC23 참여", "Vision Pro와 새 운영체제, Swift와 SwiftUI 프레임워크 발표를 현장에서 경험했습니다."], en: ["Attending WWDC23 at Apple Park", "I experienced the Vision Pro and new platform and developer-framework announcements in person."], media: ["/image/ada/img_3.jpg"] },
    { id: "kwdc", ko: ["KWDC23 연사자로 참가하여 발표", "한국 Apple 커뮤니티 컨퍼런스에서 WWDC 경험과 미국의 서비스 경험을 공유했습니다."], en: ["Speaking at KWDC23", "I shared lessons from WWDC and service experiences in the United States with Korea's Apple developer community."], media: ["/image/ada/img_4.jpg"] },
    { id: "wote", ko: ["Wote — 청소년 소비 고민 투표 커뮤니티", "또래와 소비 고민을 나누는 앱의 프론트엔드를 개발하며 백엔드 협업과 데이터 통신을 경험했습니다."], en: ["Wote — a spending-vote community", "I developed the frontend for a teen community app and gained experience collaborating with backend engineers and handling data communication."], media: ["/image/ada/img_5.jpg"] },
    { id: "ssook", ko: ["쏘옥 — 벌칙 미션 게임", "버블티를 흔들어 수행자를 뽑는 게임의 자연스러운 화면 애니메이션을 구현했습니다."], en: ["Ssook — a social mission game", "I implemented fluid interface animation for a game that randomly selects players and playful missions."], media: ["/image/ada/img_6.jpg"] },
    { id: "allerview", ko: ["AllerView — 외국인을 위한 알레르기 확인", "식품 원재료 사진에서 주의 성분을 찾는 앱을 개발하며 ChatGPT API 요청과 응답을 처리했습니다."], en: ["AllerView — allergy guidance for visitors", "I built an app that identifies risky ingredients from food labels and integrated requests and responses with the ChatGPT API."], media: ["/image/ada/img_7.jpg"] },
    { id: "wallarun", ko: ["WallaRun — 청소년 마약 방지 교육 게임", "SpriteKit으로 그래픽과 물리 엔진을 다루며 마약의 위험성을 전달하는 교육 게임을 개발했습니다."], en: ["WallaRun — a drug-prevention learning game", "I used SpriteKit graphics and physics to build an educational game communicating the risks of drug use."], media: ["/image/ada/img_8.jpg"] },
    { id: "perspective", ko: ["개발자로서의 새로운 시각", "직접 구현하며 개발 과정과 제약, 디자이너와 개발자의 시각 차이를 이해하고 두 관점에서 문제를 해결하는 역량을 키웠습니다."], en: ["A new perspective as a developer", "Hands-on implementation taught me the development process and its constraints, helping me solve problems from both design and engineering perspectives."], media: ["/image/ada/img_9.jpg"] },
  ],
});
