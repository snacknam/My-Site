import type { Locale } from "../types/content";
import developmentPosts from "./development.json";

interface ArchiveCopy {
  title: string;
  summary: string;
  tags: string[];
  introduction: string[];
  sections: { title: string; paragraphs: string[] }[];
  markdown?: string;
}

export interface ArchiveEntry {
  slug: string;
  date: string;
  category: "design" | "development";
  topic?: string;
  source?: string;
  content: Record<Locale, ArchiveCopy>;
}

export const archiveLabels = {
  ko: { title: "아카이브", description: "디자인에 대한 생각과 개발하며 배운 것들을 기록합니다.", back: "아카이브로 돌아가기", all: "전체", design: "디자인", development: "개발", topic: "개발 주제", allTopics: "모든 주제", source: "Velog 원문 보기", original: "한국어 원문", empty: "해당하는 글이 없습니다." },
  en: { title: "Archive", description: "Reflections on design and notes from learning to code.", back: "Back to archive", all: "All", design: "Design", development: "Development", topic: "Development topic", allTopics: "All topics", source: "Read original on Velog", original: "Original article in Korean", empty: "No articles in this category." },
};

const designArchives: ArchiveEntry[] = [{
  slug: "coherence-beyond-shape",
  date: "2026-09-07",
  category: "design",
  content: {
    ko: {
      title: "같은 모양이 아니어도, 하나로 느껴지는 이유",
      summary: "도시의 색과 재질에서 디자인 시스템의 일관성을 생각하다.",
      tags: ["디자인 시스템", "일관성"],
      introduction: [
        "유현준 교수님의 도시 이야기를 듣다가 디자인 시스템이 떠올랐다. 내가 기억하는 이야기의 요지는 이렇다. 강남의 건물은 네모난 형태가 서로 비슷해도 도시 전체가 하나로 느껴지지는 않는다. 반면 그리스의 도시에서는 건물 모양이 달라도 파란색과 비슷한 재질이 반복되면서 통일감을 만든다는 것이다.",
        "정확한 발언을 옮기기보다, 그 이야기를 듣고 내게 남은 생각을 기록해보려 한다. 서로 닮은 모양을 만드는 것과 하나의 인상을 만드는 것은 얼마나 다른 일일까?",
      ],
      sections: [
        { title: "모양보다 먼저 보이는 공통점", paragraphs: [
          "디자인 시스템을 만들 때는 버튼, 카드, 입력창처럼 이름 붙일 수 있는 형태부터 생각하기 쉽다. 같은 컴포넌트를 쓰면 화면도 자연스럽게 일관되어 보일 것이라고 기대하게 된다.",
          "그런데 같은 카드라도 배경색, 테두리, 그림자, 글자의 밀도가 다르면 전혀 다른 제품처럼 보일 수 있다. 반대로 구성이 다른 화면도 색의 쓰임과 글자의 위계, 여백의 리듬이 이어지면 같은 제품의 일부로 느껴진다. 도시의 색과 재질 이야기가 내게는 이 차이를 설명해주는 비유로 다가왔다.",
        ] },
        { title: "화면에도 색과 재질이 있다", paragraphs: [
          "화면에서 재질에 해당하는 것은 무엇일까. 나는 배경과 표면의 관계, 경계선의 선명함, 그림자가 만드는 깊이 같은 것들을 떠올렸다. 여기에 타이포그래피와 여백이 더해지면 화면 고유의 감각이 만들어진다.",
          "중요한 것은 같은 색상값을 반복하는 데서 끝나지 않는다는 점이다. 어떤 색이 행동을 유도하고, 어떤 표면이 정보를 묶고, 어떤 대비가 우선순위를 드러내는지까지 공유되어야 한다. 토큰은 그 판단을 여러 화면에서 다시 사용할 수 있도록 붙여둔 이름이라고 생각한다.",
        ] },
        { title: "공유할 기준과 달라도 되는 부분", paragraphs: [
          "이 관점으로 보면 시스템을 설계할 때 던질 질문도 달라진다. 모든 화면을 같은 모양으로 만들기 전에, 이 제품이 같은 제품으로 느껴지게 하는 기준이 무엇인지 먼저 물어야 한다.",
          "예를 들어 정보를 조밀하게 보여주는 대시보드와 하나의 행동에 집중시키는 시작 화면은 서로 다른 구성이 필요하다. 두 화면의 틀을 맞추는 대신 텍스트의 위계, 행동 색상의 의미, 표면과 경계의 규칙을 공유할 수 있다. 구성의 차이는 각 화면의 목적을 돕고, 공통 기준은 그 차이를 하나의 경험 안에 묶는다.",
        ] },
        { title: "다음 작업에서 확인하고 싶은 것", paragraphs: [
          "다음에 화면들을 나란히 놓고 검토할 때는 컴포넌트의 모양만 비교하지 않으려 한다. 주요 행동이 같은 방식으로 눈에 들어오는지, 정보의 위계를 읽는 방식이 이어지는지, 표면의 구분이 같은 의미로 쓰이는지도 함께 보고 싶다.",
          "나에게 좋은 디자인 시스템은 서로 다른 화면이 각자의 역할을 하면서도 자연스럽게 이어지도록 만드는 기준에 가깝다. 도시의 색과 재질에 관한 이야기가, 그 기준을 어디에서 찾아야 할지 다시 생각하게 했다.",
        ] },
      ],
    },
    en: {
      title: "Why different shapes can still feel like one whole",
      summary: "Thinking about coherence in design systems through the colors and materials of a city.",
      tags: ["Design systems", "Coherence"],
      introduction: [
        "A talk by Professor Yoo Hyun-joon about cities made me think about design systems. As I remember it, the buildings in Gangnam can have similar rectangular forms without making the city feel unified. In Greek cities, different building shapes can feel connected through recurring blue colors and similar materials.",
        "This is a reflection on what stayed with me, rather than a verbatim account of his words. How different is making similar shapes from creating a shared impression?",
      ],
      sections: [
        { title: "What we share beyond shape", paragraphs: [
          "When building a design system, it is easy to begin with things we can name: buttons, cards, and inputs. We might expect that using the same components will naturally make our screens feel consistent.",
          "Yet the same card can feel like it belongs to a different product when its background, border, shadow, and text density change. Screens with different layouts can still feel related when their use of color, type hierarchy, and spacing carries through. The story about cities gave me a useful analogy for that difference.",
        ] },
        { title: "Screens have materials, too", paragraphs: [
          "What would material mean on a screen? I think of the relationship between backgrounds and surfaces, the sharpness of borders, and the depth created by shadows. Typography and spacing help give those surfaces a particular character.",
          "Repeating a color value is only part of it. We also need a shared understanding of which colors invite action, which surfaces group information, and which contrasts establish priority. To me, tokens give those decisions names so they can be used again across screens.",
        ] },
        { title: "Shared rules, room for difference", paragraphs: [
          "This perspective changes the questions I want to ask. Before trying to make screens look alike, I want to understand what makes this product feel like itself.",
          "A dense dashboard and an onboarding screen focused on one action need different compositions. They can still share a text hierarchy, the meaning of action colors, and rules for surfaces and borders. Their differences serve their individual purposes; their shared rules connect them into one experience.",
        ] },
        { title: "What I want to look for next", paragraphs: [
          "The next time I review screens side by side, I want to look beyond component shapes. Do primary actions stand out in the same way? Can I read the information hierarchy with the same expectations? Do surface distinctions carry the same meaning?",
          "I think of a good design system as a set of decisions that allows different screens to do their own jobs while feeling connected. A story about the colors and materials of cities made me reconsider where to look for those decisions.",
        ] },
      ],
    },
  },
}];

export const archives: ArchiveEntry[] = [...designArchives, ...developmentPosts.map((post): ArchiveEntry => {
  const copy: ArchiveCopy = {
    title: post.title,
    summary: post.summary,
    tags: [...new Set([post.topic, ...post.tags])],
    introduction: [],
    sections: [],
    markdown: post.markdown,
  };
  return { slug: post.slug, date: post.date, category: "development", topic: post.topic, source: post.source, content: { ko: copy, en: copy } };
})];
