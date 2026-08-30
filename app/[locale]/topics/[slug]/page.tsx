import { notFound } from 'next/navigation';
import { ArticleCard, PaperCard } from '@/components/content-cards';
import { articles, papers, topicBySlug, topicDescription, topics } from '@/lib/content';
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
  return { title: topic[locale], description: topicDescription(slug, locale), alternates: { canonical: `/${locale}/topics/${slug}`, languages: { 'zh-CN': `/zh/topics/${slug}`, en: `/en/topics/${slug}` } } };
}

export default async function TopicPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params; if (!isLocale(locale)) notFound(); const topic = topicBySlug(slug); if (!topic) notFound(); const copy = t(locale); const topicArticles = articles.filter((article) => article.topics.includes(slug)); const topicPapers = papers.filter((paper) => paper.topics.includes(slug));
  return <main className="listing-page"><header className="page-intro"><span>03 — {copy.topic}</span><h1>{topic[locale]}</h1><p>{topicDescription(slug, locale)}</p></header>{topicArticles.length > 0 && <section className="topic-results"><h2>{copy.nav.articles}</h2><div className="article-list">{topicArticles.map((article, index) => <ArticleCard key={article.slug} article={article} locale={locale} index={index} />)}</div></section>}{topicPapers.length > 0 && <section className="topic-results"><h2>{copy.nav.papers}</h2><div className="paper-grid">{topicPapers.map((paper, index) => <PaperCard key={paper.slug} paper={paper} locale={locale} index={index} />)}</div></section>}</main>;
}
import type { Metadata } from 'next';
