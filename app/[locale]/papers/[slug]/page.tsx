import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/content-cards';
import { articleBySlug, authorsShort, paperBySlug, papers, topicName } from '@/lib/content';
import { t } from '@/lib/i18n';
import { isLocale, locales } from '@/lib/site';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => papers.map((paper) => ({ locale, slug: paper.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params; if (!isLocale(locale)) return {}; const paper = paperBySlug(slug); if (!paper) return {};
  return { title: paper.originalTitle, description: paper.summaries[locale], alternates: { canonical: `/${locale}/papers/${slug}`, languages: { 'zh-CN': `/zh/papers/${slug}`, en: `/en/papers/${slug}` } }, openGraph: { type: 'article', title: paper.originalTitle, description: paper.summaries[locale], url: `/${locale}/papers/${slug}`, images: [] }, twitter: { card: 'summary', title: paper.originalTitle, description: paper.summaries[locale], images: [] } };
}

export default async function PaperPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params; if (!isLocale(rawLocale)) notFound(); const locale: Locale = rawLocale; const paper = paperBySlug(slug); if (!paper) notFound(); const copy = t(locale); const related = paper.articles.map(articleBySlug).filter(Boolean);
  return <main className="paper-detail"><header><Link className="back-link" href={`/${locale}/papers`}><ArrowLeft /> {copy.backPapers}</Link><div className="paper-detail-meta"><span>{paper.venue}</span><span>{paper.year}</span>{paper.demo && <span className="demo-label">{copy.demo}</span>}</div><h1>{paper.originalTitle}</h1><p className="paper-authors">{paper.authors.join(', ')}</p></header><div className="paper-detail-grid"><section><span className="small-heading">Abstract note · {locale.toUpperCase()}</span><p className="paper-summary">{paper.summaries[locale]}</p><div className="card-topics">{paper.topics.map((topic) => <Link key={topic} href={`/${locale}/topics/${topic}`}>{topicName(topic, locale)}</Link>)}</div></section><aside><dl><div><dt>Authors</dt><dd>{authorsShort(paper.authors)}</dd></div><div><dt>Venue</dt><dd>{paper.venue}, {paper.year}</dd></div>{paper.doi && <div><dt>DOI</dt><dd>{paper.doi}</dd></div>}{paper.arxiv && <div><dt>arXiv</dt><dd>{paper.arxiv}</dd></div>}</dl><a className="primary-external" href={paper.url} target="_blank" rel="noreferrer">{copy.originalPaper} <ExternalLink /></a></aside></div>
    {related.length > 0 && <section className="related-section"><div className="section-heading"><div><span>↳</span><h2>{copy.relatedEssays}</h2></div></div><div className="article-list">{related.map((article, index) => article && <ArticleCard key={article.slug} article={article} locale={locale} index={index} />)}</div></section>}
  </main>;
}
