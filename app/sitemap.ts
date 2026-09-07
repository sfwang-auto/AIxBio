import type { MetadataRoute } from 'next';
import { articles, papers, topics } from '@/lib/content';
import { locales, siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/articles', '/papers', '/about'];
  return locales.flatMap((locale) => [
    ...staticRoutes.map((path) => ({ url: `${siteUrl}/${locale}${path}/`, lastModified: new Date() })),
    ...articles.map((article) => ({ url: `${siteUrl}/${locale}/articles/${article.slug}/` })),
    ...papers.map((paper) => ({ url: `${siteUrl}/${locale}/papers/${paper.slug}/`, lastModified: new Date(`${paper.year}-01-01T00:00:00Z`) })),
    ...topics.map((topic) => ({ url: `${siteUrl}/${locale}/topics/${topic.slug}/`, lastModified: new Date() })),
  ]);
}
