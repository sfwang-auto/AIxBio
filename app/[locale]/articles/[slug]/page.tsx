import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { articleBySlug, articles, topicName } from '@/lib/content';
import { articleBodies } from '@/lib/generated-content';
import { t } from '@/lib/i18n';
import { isLocale, locales, siteUrl } from '@/lib/site';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => articles.map((article) => ({ locale, slug: article.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params; if (!isLocale(locale)) return {}; const article = articleBySlug(slug); if (!article) return {}; const text = article.translations[locale];
  return { title: text.title, alternates: { canonical: `/${locale}/articles/${slug}`, languages: { 'zh-CN': `/zh/articles/${slug}`, en: `/en/articles/${slug}` } }, openGraph: { type: 'article', title: text.title, url: `/${locale}/articles/${slug}`, images: [] }, twitter: { card: 'summary', title: text.title, images: [] } };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params; if (!isLocale(rawLocale)) notFound(); const locale: Locale = rawLocale; const article = articleBySlug(slug); if (!article) notFound(); const copy = t(locale); const text = article.translations[locale]; const Body = articleBodies[slug]?.[locale]; if (!Body) notFound();
  const jsonLd = { '@context': 'https://schema.org', '@type': 'ScholarlyArticle', headline: text.title, inLanguage: locale === 'zh' ? 'zh-CN' : 'en', mainEntityOfPage: `${siteUrl}/${locale}/articles/${slug}`, publisher: { '@type': 'Organization', name: 'AI × Bio' } };
  return <main className="article-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <header className="article-hero"><Link className="back-link" href={`/${locale}/articles`}><ArrowLeft /> {copy.backArticles}</Link><div className="article-kicker">{article.topics.map((topic) => <Link key={topic} href={`/${locale}/topics/${topic}`}>{topicName(topic, locale)}</Link>)}</div><h1>{text.title}</h1></header>
    <div className="article-layout"><aside className="toc"><span>{copy.tableContents}</span><nav>{article.toc[locale].map((item) => <a key={item.id} href={`#${item.id}`} className={item.level === 3 ? 'toc-sub' : ''}>{item.title}</a>)}</nav></aside><article className="prose"><Body /></article></div>
  </main>;
}
