export type Locale = "ko" | "en";

export interface LocalizedText {
  title: string;
  description: string;
}

export interface LocalizedMedia {
  image: string;
  alt: string;
}

export interface Project {
  slug: string;
  content: Record<Locale, LocalizedText>;
  media: Record<Locale, LocalizedMedia>;
}
