export type Locale = 'zh' | 'en';

export interface ArticleTranslation {
  title: string;
}

export interface ArticleRecord {
  slug: string;
  topics: string[];
  draft: boolean;
  cover?: string;
  translations: Record<Locale, ArticleTranslation>;
  toc: Record<Locale, { id: string; title: string; level: number }[]>;
}

export interface TopicRecord {
  slug: string;
  zh: string;
  en: string;
}
