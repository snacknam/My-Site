export type Locale = "ko" | "en";

export interface LocalizedText {
  title: string;
  description: string;
}

export interface LocalizedMedia {
  image: string;
  alt: string;
}

export type ProjectMediaItem =
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      label: string;
      caption?: string;
      framed?: boolean;
    };

export interface Project {
  slug: string;
  hasReactDetail?: boolean;
  content: Record<Locale, LocalizedText>;
  media: Record<Locale, LocalizedMedia>;
}

export interface ProjectContentSection {
  id: string;
  title: string;
  paragraphs: string[];
  image?: LocalizedMedia;
  media?: ProjectMediaItem[];
}

export interface LocalizedProjectDetail {
  name: string;
  headline: string;
  metadata: string;
  introduction: string[];
  cover: LocalizedMedia;
  sections: ProjectContentSection[];
}

export interface ProjectDetail {
  slug: string;
  content: Record<Locale, LocalizedProjectDetail>;
}
