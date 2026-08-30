import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ArticleCard, PaperCard } from '@/components/content-cards';
import { articles, papers, topicName, topics } from '@/lib/content';
import { t } from '@/lib/i18n';
import { isLocale } from '@/lib/site';
import type { Locale } from '@/lib/types';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = t(locale);
  return {
    title: locale === 'zh' ? '阅读智能，理解生命系统' : 'Reading intelligence, understanding living systems',
    description: copy.intro,
    alternates: { canonical: `/${locale}`, languages: { 'zh-CN': '/zh', en: '/en' } },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params; if (!isLocale(rawLocale)) notFound(); const locale: Locale = rawLocale; const copy = t(locale);
  const featured = articles.find((article) => article.featured) ?? articles[0]; const featureText = featured.translations[locale]; const deskPaper = papers.find((paper) => featured.papers.includes(paper.slug)) ?? papers[0];
  return <main>
    <section className="editorial-hero">
      <div className="issue-label"><span>{copy.journal}</span><span>{copy.issue}</span></div>
      <div className="hero-grid"><div><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.heroLine1}<br /><em>{copy.heroLine2}</em></h1></div><div className="hero-aside"><p>{copy.intro}</p><Link href={`/${locale}/articles/${featured.slug}`}>{copy.latest} <ArrowUpRight size={16} /></Link></div></div>
    </section>
    <section className="lead-story">
      <div className="story-index">01</div><article><div className="story-meta"><span>{copy.featured}</span><span>{featureText.readingMinutes} {copy.minutes}</span></div><h2><Link href={`/${locale}/articles/${featured.slug}`}>{featureText.title}</Link></h2><p>{featureText.summary}</p><div className="tags">{featured.topics.map((topic) => <Link key={topic} href={`/${locale}/topics/${topic}`}>{topicName(topic, locale)}</Link>)}{featured.demo && <span>{copy.demo}</span>}</div></article>
      <aside className="paper-citation"><span className="citation-kicker">{copy.paperDesk}</span><strong>{deskPaper.originalTitle}</strong><p>{deskPaper.authors[0]} et al. · {deskPaper.venue} · {deskPaper.year}</p><Link href={`/${locale}/papers/${deskPaper.slug}`}>{copy.openPaper} <ArrowUpRight size={15} /></Link></aside>
    </section>
    <section className="topic-strip"><p>{copy.researchIndex}</p><div>{topics.map((topic, index) => <Link key={topic.slug} href={`/${locale}/topics/${topic.slug}`}><b>0{index + 1}</b>{topic[locale]}</Link>)}</div></section>
    <section className="home-section"><div className="section-heading"><div><span>02</span><h2>{copy.latestEssays}</h2></div><Link href={`/${locale}/articles`}>{copy.allEssays} <ArrowRight /></Link></div><div className="article-list">{articles.slice(0, 2).map((article, index) => <ArticleCard key={article.slug} article={article} locale={locale} index={index} />)}</div></section>
    <section className="home-section paper-section"><div className="section-heading"><div><span>03</span><h2>{copy.recentPapers}</h2></div><Link href={`/${locale}/papers`}>{copy.browsePapers} <ArrowRight /></Link></div><div className="paper-grid">{papers.slice(0, 2).map((paper, index) => <PaperCard key={paper.slug} paper={paper} locale={locale} index={index} />)}</div></section>
  </main>;
}
import type { Metadata } from 'next';
