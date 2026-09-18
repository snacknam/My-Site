import type { Locale } from "../types/content";
import developmentPosts from "./development.json";
import developmentEnglish from "./development.en.json";

interface ArchiveCopy {
  title: string;
  summary: string;
  tags: string[];
  introduction: string[];
  heroImage?: { src: string; alt: string; caption?: string };
  sections: { title: string; paragraphs: string[] }[];
  markdown?: string;
}

const englishDevelopment: Record<string, Pick<ArchiveCopy, "title" | "summary" | "markdown">> = developmentEnglish;

export interface ArchiveEntry {
  slug: string;
  date: string;
  category: "design" | "development";
  topic?: string;
  source?: string;
  content: Record<Locale, ArchiveCopy>;
}

export const developmentTopics = ["Operating System", "Data Structure & Algorithm", "Development"] as const;
type DevelopmentTopic = (typeof developmentTopics)[number];

const developmentCollections = [
  {
    topic: "Operating System",
    image: "/image/archives/development-operating-system.jpg",
    alt: "Operating System 아카이브 표지",
  },
  {
    topic: "Data Structure & Algorithm",
    image: "/image/archives/development-data-structure-algorithm.jpg",
    alt: "Data Structure & Algorithm 아카이브 표지",
  },
  {
    topic: "Development",
    image: "/image/archives/development.jpg",
    alt: "Development 아카이브 표지",
  },
] as const;

export const archiveLabels = {
  ko: { title: "아카이브", description: "디자인에 대한 생각과 개발하며 배운 것들을 기록합니다.", back: "아카이브로 돌아가기", all: "전체", design: "디자인", development: "개발", topic: "개발 주제", allTopics: "모든 주제", source: "Velog 원문 보기", original: "한국어 원문", empty: "해당하는 글이 없습니다." },
  en: { title: "Archive", description: "Thoughts on design and things I’ve learned through code.", back: "Back to archive", all: "All", design: "Design", development: "Dev", topic: "Development topic", allTopics: "All topics", source: "Read the Korean original on Velog", original: "English translation", empty: "No articles in this category." },
};

const designArchives: ArchiveEntry[] = [{
  slug: "coherence-beyond-shape",
  date: "2026-09-07",
  category: "design",
  content: {
    ko: {
      title: "도시의 통일성과 디자인 시스템",
      summary: "산토리니의 재료와 색이 만드는 질서에서 서비스의 Foundation을 생각하다.",
      tags: ["디자인 시스템", "Foundation"],
      introduction: [
        "유현준 교수님이 건축과 도시를 설명하며 산토리니를 예로 든 이야기가 기억에 남았다. 산토리니의 건축물은 형태가 제각각이지만 비슷한 재료와 질감, 흰색과 파란색이라는 공통된 색을 사용한다. 그 결과 도시 전체는 하나의 풍경으로 느껴지고, 서로 다른 형태는 그 안에서 각 건물의 개성이 된다.",
        "반면 현대의 일반적인 도시에서는 많은 건물이 비슷한 빌딩 형태를 띠지만 외장 재료와 질감, 간판과 색은 저마다 다르다. 모두가 비슷한 모양을 선택하면서 개별 건물의 특징은 흐려지고, 도시 전체를 묶는 공통된 인상도 약해진다. 같은 형태를 반복하는 것과 일관된 경험을 만드는 일은 같지 않다.",
        "이 차이를 생각하며 서비스의 일관성도 비슷한 방식으로 만들어질 수 있겠다고 생각했다. 버튼이나 카드의 형태를 똑같이 맞추는 것보다 타이포그래피, 컬러, 아이콘, Radius 같은 Foundation을 공통의 재료로 정의하는 것이 먼저일 수 있다. 이 기준이 화면마다 이어지면 대시보드와 온보딩처럼 목적과 구조가 다른 화면도 하나의 서비스로 느껴지고, 각 화면은 그 안에서 목적에 맞는 개성을 가질 수 있다.",
      ],
      heroImage: {
        src: "/image/archives/santorini.jpg",
        alt: "흰색 건물과 파란 지붕이 어우러진 산토리니의 도시 풍경",
        caption: "비슷한 재료와 색 안에서 서로 다른 형태가 하나의 풍경을 만든다.",
      },
      sections: [],
    },
    en: {
      title: "Santorini and design systems",
      summary: "Santorini’s shared colors and materials offer a way to think about consistency in product design.",
      tags: ["Design systems", "Foundations"],
      introduction: [
        "I remember Professor Yoo Hyun-joon using Santorini to explain the relationship between architecture and a city. Its buildings vary in shape, but share similar materials, textures, and a palette of white and blue. Those common elements make the city feel like a coherent whole, while the different forms give each building its own character.",
        "In many modern cities, the opposite happens. Buildings share a similar shape, yet their exterior materials, textures, signs, and colors differ. Individual buildings lose some of their character, without creating a strong identity for the city as a whole. Repeating the same shape does not necessarily create a consistent experience.",
        "That contrast made me think about how consistency takes shape in a digital product. Before making every button or card look the same, it may be more useful to define shared foundations: typography, color, icons, and corner radii. When those foundations carry across screens, a dashboard and an onboarding flow can feel like parts of the same product, even with different purposes and layouts. Each screen can still have the character its purpose calls for.",
      ],
      heroImage: {
        src: "/image/archives/santorini.jpg",
        alt: "A Santorini cityscape of white buildings and blue domes",
        caption: "Shared materials and colors let different forms belong to one landscape.",
      },
      sections: [],
    },
  },
}];

function classifyDevelopmentTopic(topic: string): DevelopmentTopic {
  if (topic === "OS") return "Operating System";
  if (topic === "Algorithm") return "Data Structure & Algorithm";
  return "Development";
}

function getDevelopmentTags(post: (typeof developmentPosts)[number], topic: DevelopmentTopic): string[] {
  if (topic !== "Development") return [topic];
  return [topic, post.topic];
}

export const archives: ArchiveEntry[] = [...designArchives, ...developmentPosts.map((post): ArchiveEntry => {
  const topic = classifyDevelopmentTopic(post.topic);
  const collection = developmentCollections.find((item) => item.topic === topic);
  const copy: ArchiveCopy = {
    title: post.title,
    summary: post.summary,
    tags: getDevelopmentTags(post, topic),
    introduction: [],
    heroImage: collection ? { src: collection.image, alt: collection.alt } : undefined,
    sections: [],
    markdown: post.markdown,
  };
  const translation = englishDevelopment[post.slug];
  if (!translation?.title || !translation.summary || !translation.markdown) {
    throw new Error(`Missing English archive translation: ${post.slug}`);
  }
  const englishCopy: ArchiveCopy = {
    ...copy,
    ...translation,
    heroImage: collection ? { src: collection.image, alt: `${topic} archive cover` } : undefined,
  };
  return { slug: post.slug, date: post.date, category: "development", topic, source: post.source, content: { ko: copy, en: englishCopy } };
})];
