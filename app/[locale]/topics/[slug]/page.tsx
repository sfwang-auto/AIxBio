import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/content-cards';
import { articles, topicBySlug, topics } from '@/lib/content';
import { t } from '@/lib/i18n';
import { isLocale, locales } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => topics.map((topic) => ({ locale, slug: topic.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const topic = topicBySlug(slug);
  if (!topic) return {};
  return { title: topic[locale], alternates: { canonical: `/${locale}/topics/${slug}`, languages: { 'zh-CN': `/zh/topics/${slug}`, en: `/en/topics/${slug}` } } };
}

export default async function TopicPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params; if (!isLocale(locale)) notFound(); const topic = topicBySlug(slug); if (!topic) notFound(); const copy = t(locale); const topicArticles = articles.filter((article) => article.topics.includes(slug));
  return <main className="listing-page"><header className="page-intro"><span>03 — {copy.topic}</span><h1>{topic[locale]}</h1><p>{copy.topicDescription}</p></header>{topicArticles.length > 0 && <section className="topic-results"><div className="section-heading"><h2>{copy.nav.articles}</h2><span>{String(topicArticles.length).padStart(2, '0')}</span></div><div className="article-list">{topicArticles.map((article, index) => <ArticleCard key={article.slug} article={article} locale={locale} index={index} />)}</div></section>}</main>;
}
