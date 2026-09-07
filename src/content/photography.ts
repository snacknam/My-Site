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
    .sort((a, b) => b.capturedAt.localeCompare(a.capturedAt));
}

// 사진 파일과 메타데이터를 이 배열에 추가하면 피드와 상세 페이지에 자동으로 표시됩니다.
export const photographs: Photograph[] = [];

export function getPhotograph(slug: string) {
  return photographs.find((photo) => photo.slug === slug);
}
