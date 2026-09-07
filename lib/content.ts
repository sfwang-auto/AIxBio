import { articles, papers, topics } from './generated-data';
import type { Locale } from './types';

export { articles, papers, topics };

export const articleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
export const paperBySlug = (slug: string) => papers.find((paper) => paper.slug === slug);
export const topicBySlug = (slug: string) => topics.find((topic) => topic.slug === slug);
export const topicName = (slug: string, locale: Locale) => topicBySlug(slug)?.[locale] ?? slug;
export const topicDescription = (slug: string, locale: Locale) => {
  const topic = topicBySlug(slug);
  if (!topic) return '';
  return locale === 'zh' ? topic.descriptionZh : topic.descriptionEn;
};
export const authorsShort = (authors: readonly string[]) => authors.length > 4 ? `${authors[0]} et al.` : authors.join(', ');
