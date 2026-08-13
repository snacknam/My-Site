import type { Locale } from "../types/content";

export interface Photograph {
  slug: string;
  image: string;
  width: number;
  height: number;
  capturedAt: string;
  location: Record<Locale, string>;
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
}

// 사진 파일과 메타데이터를 이 배열에 추가하면 피드와 상세 페이지에 자동으로 표시됩니다.
export const photographs: Photograph[] = [];

export function getPhotograph(slug: string) {
  return photographs.find((photo) => photo.slug === slug);
}
