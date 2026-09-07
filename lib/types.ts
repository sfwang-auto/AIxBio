export type Locale = 'zh' | 'en';

export interface ArticleTranslation {
  title: string;
  readingMinutes: number;
}

export interface ArticleRecord {
  slug: string;
  topics: string[];
  papers: string[];
  draft: boolean;
  translations: Record<Locale, ArticleTranslation>;
  toc: Record<Locale, { id: string; title: string; level: number }[]>;
}

export interface PaperRecord {
  slug: string;
  originalTitle: string;
  authors: string[];
  year: number;
  venue: string;
  doi: string | null;
  url: string;
  arxiv: string | null;
  topics: string[];
  articles: string[];
  summaries: Record<Locale, string>;
}

export interface TopicRecord {
  slug: string;
  zh: string;
  en: string;
  descriptionZh: string;
  descriptionEn: string;
}
