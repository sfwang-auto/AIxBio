import { articles } from '@/lib/content';
import { siteUrl } from '@/lib/site';

const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
export const dynamic = 'force-static';
export function GET() {
  const items = articles.flatMap((article) => (['zh', 'en'] as const).map((locale) => { const text = article.translations[locale]; const url = `${siteUrl}/${locale}/articles/${article.slug}/`; return `<item><title>${escape(text.title)}</title><link>${url}</link><guid>${url}</guid><description>${escape(text.summary)}</description><pubDate>${new Date(`${article.date}T00:00:00Z`).toUTCString()}</pubDate><language>${locale}</language></item>`; })).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>AI × Bio</title><link>${siteUrl}</link><description>Bilingual essays on artificial intelligence and biology.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
