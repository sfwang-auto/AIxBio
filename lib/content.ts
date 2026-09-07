import { articles, topics } from './generated-data';
import type { Locale } from './types';

export { articles, topics };

export const articleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
export const topicBySlug = (slug: string) => topics.find((topic) => topic.slug === slug);
export const topicName = (slug: string, locale: Locale) => topicBySlug(slug)?.[locale] ?? slug;
