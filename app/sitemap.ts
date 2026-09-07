import type { MetadataRoute } from 'next';
import { articles, topics } from '@/lib/content';
import { locales, siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/articles', '/about'];
  return locales.flatMap((locale) => [
    ...staticRoutes.map((path) => ({ url: `${siteUrl}/${locale}${path}/`, lastModified: new Date() })),
    ...articles.map((article) => ({ url: `${siteUrl}/${locale}/articles/${article.slug}/` })),
    ...topics.map((topic) => ({ url: `${siteUrl}/${locale}/topics/${topic.slug}/`, lastModified: new Date() })),
  ]);
}
