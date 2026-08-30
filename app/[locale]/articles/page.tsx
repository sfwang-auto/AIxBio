import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/content-cards';
import { articles } from '@/lib/content';
import { t } from '@/lib/i18n';
import { isLocale } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = t(locale);
  return { title: copy.articlesTitle, description: copy.articlesIntro, alternates: { canonical: `/${locale}/articles`, languages: { 'zh-CN': '/zh/articles', en: '/en/articles' } } };
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const copy = t(locale);
  return <main className="listing-page"><header className="page-intro"><span>01 — {copy.nav.articles}</span><h1>{copy.articlesTitle}</h1><p>{copy.articlesIntro}</p></header><div className="article-list">{articles.map((article, index) => <ArticleCard key={article.slug} article={article} locale={locale} index={index} />)}</div></main>;
}
import type { Metadata } from 'next';
