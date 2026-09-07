import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/content-cards';
import { articles } from '@/lib/content';
import { t } from '@/lib/i18n';
import { isLocale } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = t(locale);
  return { title: copy.nav.articles, alternates: { canonical: `/${locale}/articles`, languages: { 'zh-CN': '/zh/articles', en: '/en/articles' } } };
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound();
  const copy = t(locale);
  return <main className="listing-page">
    <header className="page-intro page-intro--split"><div><span>02 — {copy.nav.articles}</span><h1>{copy.articlesTitle}</h1></div><p>{copy.articlesLead}</p></header>
    <div className="listing-meta"><span>{String(articles.length).padStart(2, '0')} {locale === 'zh' ? '篇札记' : 'notes'}</span><span>{locale === 'zh' ? '按时间排序' : 'Sorted by latest'}</span></div>
    <div className="article-list">{articles.map((article, index) => <ArticleCard key={article.slug} article={article} locale={locale} index={index} />)}</div>
  </main>;
}
