import type { Locale } from "../types/content";

export interface Photograph {
  slug: string;
  image: string;
  width: number;
  height: number;
  capturedAt?: string;
  thumbnail?: string;
  location: Record<Locale, string>;
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
  albumSlugs?: string[];
}

export interface PhotoAlbum {
  slug: string;
  title: Record<Locale, string>;
  coverSlug?: string;
}

// 앨범을 추가하고 사진의 albumSlugs에 해당 slug를 지정합니다.
export const photoAlbums: PhotoAlbum[] = [];

export const photographyLabels = {
  ko: { recent: "최근 사진", back: "사진 목록으로", next: "다음 앨범", empty: "아직 공개한 사진이 없습니다.", count: "장의 사진" },
  en: { recent: "Recents", back: "Back to photography", next: "Next album", empty: "No photographs published yet.", count: " photographs" },
};

export function getAlbumPhotos(albumSlug?: string) {
  return photographs.filter((photo) => !albumSlug || photo.albumSlugs?.includes(albumSlug))
    .sort((a, b) => (b.capturedAt ?? "").localeCompare(a.capturedAt ?? ""));
}

// 사진 파일과 메타데이터를 이 배열에 추가하면 피드와 상세 페이지에 자동으로 표시됩니다.
export const photographs: Photograph[] = [
  {
    "slug": "img-3268",
    "image": "/image/photography/img-3268.jpg",
    "thumbnail": "/image/photography/img-3268-thumb.jpg",
    "width": 1800,
    "height": 2400,
    "location": {
      "ko": "여름 해변",
      "en": "Summer beach"
    },
    "alt": {
      "ko": "모래사장에 줄지어 놓인 접힌 파라솔과 푸른 바다",
      "en": "Rows of closed parasols on a sandy beach by the blue sea"
    },
    "capturedAt": "2026-07-29"
  },
  {
    "slug": "img-1178",
    "image": "/image/photography/img-1178.jpg",
    "thumbnail": "/image/photography/img-1178-thumb.jpg",
    "width": 1800,
    "height": 2400,
    "location": {
      "ko": "도시 위의 구름",
      "en": "Clouds over the city"
    },
    "alt": {
      "ko": "도시의 다리와 건물 위로 펼쳐진 흰 구름",
      "en": "White clouds above urban bridges and buildings"
    },
    "capturedAt": "2026-06-15"
  },
  {
    "slug": "img-0675",
    "image": "/image/photography/img-0675.jpg",
    "thumbnail": "/image/photography/img-0675-thumb.jpg",
    "width": 1800,
    "height": 2400,
    "location": {
      "ko": "물 위의 노을",
      "en": "Sunset over the water"
    },
    "alt": {
      "ko": "주황빛 노을 아래 물가의 관람차와 건물",
      "en": "A waterfront Ferris wheel and buildings beneath an orange sunset"
    },
    "capturedAt": "2026-06-13"
  },
  {
    "slug": "img-9153",
    "image": "/image/photography/img-9153.jpg",
    "thumbnail": "/image/photography/img-9153-thumb.jpg",
    "width": 1920,
    "height": 2400,
    "location": {
      "ko": "초승달",
      "en": "Crescent moon"
    },
    "alt": {
      "ko": "어두운 건물 위 밤하늘에 떠 있는 초승달",
      "en": "A crescent moon in the night sky above a dark building"
    },
    "capturedAt": "2022-02-06"
  },
  {
    "slug": "img-7927",
    "image": "/image/photography/img-7927.jpg",
    "thumbnail": "/image/photography/img-7927-thumb.jpg",
    "width": 1080,
    "height": 1350,
    "location": {
      "ko": "다리 사이로 지는 해",
      "en": "Sunset between bridges"
    },
    "alt": {
      "ko": "다리 기둥 사이로 지는 해와 강변 사람들의 실루엣",
      "en": "The setting sun between bridge pillars and silhouettes along the river"
    }
  },
  {
    "slug": "img-5369",
    "image": "/image/photography/img-5369.jpg",
    "thumbnail": "/image/photography/img-5369-thumb.jpg",
    "width": 1920,
    "height": 2400,
    "location": {
      "ko": "빛의 반영",
      "en": "Reflections of light"
    },
    "alt": {
      "ko": "어두운 전시장에 떠 있는 주황색 등과 그 반영",
      "en": "Orange lanterns and their reflections in a dark exhibition space"
    },
    "capturedAt": "2021-05-29"
  },
  {
    "slug": "dscf8060",
    "image": "/image/photography/dscf8060.jpg",
    "thumbnail": "/image/photography/dscf8060-thumb.jpg",
    "width": 1918,
    "height": 2400,
    "location": {
      "ko": "저녁의 남산",
      "en": "Namsan at dusk"
    },
    "alt": {
      "ko": "보랏빛 저녁 하늘 아래 남산타워와 도시 풍경",
      "en": "Namsan Tower and city buildings beneath a purple evening sky"
    },
    "capturedAt": "2021-04-24"
  },
  {
    "slug": "img-8007",
    "image": "/image/photography/img-8007.jpg",
    "thumbnail": "/image/photography/img-8007-thumb.jpg",
    "width": 1080,
    "height": 1350,
    "location": {
      "ko": "초록을 향해",
      "en": "Into the green"
    },
    "alt": {
      "ko": "버드나무 아래 초록 잔디 위를 달리는 아이",
      "en": "A child running across green grass beneath a willow tree"
    },
    "capturedAt": "2021-09-22"
  },
  {
    "slug": "img-5681-jpg",
    "image": "/image/photography/img-5681-jpg.jpg",
    "thumbnail": "/image/photography/img-5681-jpg-thumb.jpg",
    "width": 1920,
    "height": 2400,
    "location": {
      "ko": "곡선과 빛",
      "en": "Curves and light"
    },
    "alt": {
      "ko": "흑백 콘크리트 곡선 아래 햇빛 속을 걷는 사람",
      "en": "A person walking through sunlight beneath curved concrete in black and white"
    },
    "capturedAt": "2021-06-27"
  },
  {
    "slug": "img-8400-edit",
    "image": "/image/photography/img-8400-edit.jpg",
    "thumbnail": "/image/photography/img-8400-edit-thumb.jpg",
    "width": 1350,
    "height": 2400,
    "location": {
      "ko": "달빛과 벚꽃",
      "en": "Moonlight and blossoms"
    },
    "alt": {
      "ko": "밤하늘의 달 아래 환하게 핀 벚꽃",
      "en": "Illuminated cherry blossoms beneath the moon in a dark sky"
    },
    "capturedAt": "2026-04-01"
  },
  {
    "slug": "dsc00507",
    "image": "/image/photography/dsc00507.jpg",
    "thumbnail": "/image/photography/dsc00507-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "횡단보도",
      "en": "Crosswalk"
    },
    "alt": {
      "ko": "위에서 내려다본 횡단보도를 걷는 사람",
      "en": "A person crossing a zebra crossing viewed from above"
    },
    "capturedAt": "2025-10-08"
  },
  {
    "slug": "img-9789",
    "image": "/image/photography/img-9789.jpg",
    "thumbnail": "/image/photography/img-9789-thumb.jpg",
    "width": 1920,
    "height": 2400,
    "location": {
      "ko": "나무 그늘",
      "en": "Under the trees"
    },
    "alt": {
      "ko": "큰 나무 아래 잔디밭에서 쉬는 사람들",
      "en": "People relaxing on the grass beneath tall trees"
    },
    "capturedAt": "2022-05-22"
  },
  {
    "slug": "dscf7647",
    "image": "/image/photography/dscf7647.jpg",
    "thumbnail": "/image/photography/dscf7647-thumb.jpg",
    "width": 1920,
    "height": 2400,
    "location": {
      "ko": "별과 나무",
      "en": "Stars and a tree"
    },
    "alt": {
      "ko": "별이 가득한 밤하늘 아래 홀로 선 나무의 실루엣",
      "en": "The silhouette of a lone tree beneath a star-filled sky"
    },
    "capturedAt": "2021-12-04"
  },
  {
    "slug": "img-9488",
    "image": "/image/photography/img-9488.jpg",
    "thumbnail": "/image/photography/img-9488-thumb.jpg",
    "width": 1920,
    "height": 2400,
    "location": {
      "ko": "금빛 오후",
      "en": "Golden afternoon"
    },
    "alt": {
      "ko": "타일 기둥 사이 금빛 햇살을 받으며 걷는 사람",
      "en": "A person walking through golden sunlight between tiled pillars"
    },
    "capturedAt": "2022-01-01"
  },
  {
    "slug": "dsc00127",
    "image": "/image/photography/dsc00127.jpg",
    "thumbnail": "/image/photography/dsc00127-thumb.jpg",
    "width": 2400,
    "height": 1600,
    "location": {
      "ko": "흐르는 초록",
      "en": "Flowing green"
    },
    "alt": {
      "ko": "어둠 속 가로로 번진 초록빛 궤적",
      "en": "Green light streaks flowing horizontally through the dark"
    },
    "capturedAt": "2025-09-29"
  },
  {
    "slug": "dsc00543",
    "image": "/image/photography/dsc00543.jpg",
    "thumbnail": "/image/photography/dsc00543-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "성당의 빛",
      "en": "Light in a cathedral"
    },
    "alt": {
      "ko": "높은 아치와 스테인드글라스가 있는 성당 내부",
      "en": "A cathedral interior with high arches and stained glass"
    },
    "capturedAt": "2025-10-08"
  },
  {
    "slug": "dsc00497",
    "image": "/image/photography/dsc00497.jpg",
    "thumbnail": "/image/photography/dsc00497-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "네온의 잔상",
      "en": "Neon afterimages"
    },
    "alt": {
      "ko": "붉은 네온 간판과 길게 번진 여러 색의 빛",
      "en": "A red neon sign and colorful streaks of light"
    },
    "capturedAt": "2025-10-08"
  },
  {
    "slug": "dsc00082",
    "image": "/image/photography/dsc00082.jpg",
    "thumbnail": "/image/photography/dsc00082-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "다리 아래의 밤",
      "en": "Night beneath the bridge"
    },
    "alt": {
      "ko": "노란 조명의 다리 아래 도로를 달리는 자동차들",
      "en": "Cars on a road beneath a bridge illuminated in yellow"
    },
    "capturedAt": "2025-09-29"
  },
  {
    "slug": "dsc00444",
    "image": "/image/photography/dsc00444.jpg",
    "thumbnail": "/image/photography/dsc00444-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "파란 하늘과 크레인",
      "en": "Blue sky and a crane"
    },
    "alt": {
      "ko": "파란 하늘 아래 공사 중인 건물과 노란 크레인",
      "en": "A yellow crane and a building under construction against blue sky"
    },
    "capturedAt": "2025-10-08"
  },
  {
    "slug": "dsc00122",
    "image": "/image/photography/dsc00122.jpg",
    "thumbnail": "/image/photography/dsc00122-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "밤의 피아노",
      "en": "Piano at night"
    },
    "alt": {
      "ko": "노랗게 빛나는 건물 아래 피아노를 연주하는 사람",
      "en": "A person playing a piano beneath a glowing yellow building"
    },
    "capturedAt": "2025-09-29"
  },
  {
    "slug": "dsc00051",
    "image": "/image/photography/dsc00051.jpg",
    "thumbnail": "/image/photography/dsc00051-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "도시의 흐름",
      "en": "Flow of the city"
    },
    "alt": {
      "ko": "밤의 도로 위로 길게 이어진 차량 불빛",
      "en": "Long trails of vehicle lights on a city road at night"
    },
    "capturedAt": "2025-09-29"
  },
  {
    "slug": "dsc00424",
    "image": "/image/photography/dsc00424.jpg",
    "thumbnail": "/image/photography/dsc00424-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "가게에 드는 햇빛",
      "en": "Sunlight in the shop"
    },
    "alt": {
      "ko": "햇빛을 받는 가게 앞에 쌓인 금속 환풍기와 물건들",
      "en": "Metal ventilators and goods stacked outside a sunlit shop"
    },
    "capturedAt": "2025-10-08"
  },
  {
    "slug": "dsc00070",
    "image": "/image/photography/dsc00070.jpg",
    "thumbnail": "/image/photography/dsc00070-thumb.jpg",
    "width": 1600,
    "height": 2400,
    "location": {
      "ko": "지나가는 순간",
      "en": "A passing moment"
    },
    "alt": {
      "ko": "노란 조명의 다리 앞을 지나가는 자전거의 흐릿한 모습",
      "en": "A blurred cyclist passing in front of a bridge lit in yellow"
    },
    "capturedAt": "2025-09-29"
  }
];

export function getPhotograph(slug: string) {
  return photographs.find((photo) => photo.slug === slug);
}
