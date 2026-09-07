import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, ScanSearch, Sparkles } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/content-cards';
import { articles, topics } from '@/lib/content';
import { t } from '@/lib/i18n';
import { isLocale, siteBasePath } from '@/lib/site';
import type { Locale } from '@/lib/types';

const topicDescription: Record<string, { zh: string; en: string }> = {
  'nucleic-acids': {
    zh: '核酸序列、二级结构与远缘同源搜索。',
    en: 'Nucleic-acid sequence, secondary structure, and remote homology search.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === 'zh' ? '阅读智能，理解生命系统' : 'Reading intelligence, understanding living systems',
    alternates: { canonical: `/${locale}`, languages: { 'zh-CN': '/zh', en: '/en' } },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const copy = t(locale);
  const featured = articles[0];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light">{copy.heroEyebrow}</span>
          <h1>{copy.heroTitleA}<br /><em>{copy.heroTitleB}</em></h1>
          <p>{copy.heroLead}</p>
          <div className="hero-actions">
            {featured && <Link className="button button-primary" href={`/${locale}/articles/${featured.slug}`}>
              {copy.heroCta}<ArrowUpRight aria-hidden="true" />
            </Link>}
            <Link className="button button-quiet" href={`/${locale}/about`}>
              {copy.heroSecondary}<ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {featured && <Link className="hero-feature" href={`/${locale}/articles/${featured.slug}`}>
          <div className="feature-topline"><span>{copy.featuredLabel}</span><span>01 / 01</span></div>
          <div className="feature-visual">
            <Image
              src={`${siteBasePath}/images/riboseek/fig3.png`}
              alt={locale === 'zh' ? 'Riboseek 分阶段搜索流程图' : 'Riboseek staged search workflow'}
              width={560}
              height={312}
              priority
            />
            <span className="visual-mark">RIBO<br />SEEK</span>
          </div>
          <div className="feature-meta">
            <span>{featured.topics.map((topic) => topic === 'nucleic-acids' ? (locale === 'zh' ? '核酸' : 'Nucleic acids') : topic).join(' · ')}</span>
            <ArrowUpRight aria-hidden="true" />
          </div>
          <h2>{featured.translations[locale].title}</h2>
          <p>{copy.featuredSummary}</p>
        </Link>}
      </section>

      <section className="signal-section">
        <div className="signal-mark"><Sparkles aria-hidden="true" /><span>01</span></div>
        <div className="signal-copy">
          <span className="section-label">{copy.signalEyebrow}</span>
          <h2>{copy.signalTitle}</h2>
          <p>{copy.signalBody}</p>
        </div>
        <div className="signal-stats">
          <div><BookOpen aria-hidden="true" /><strong>{String(articles.length).padStart(2, '0')}</strong><span>{locale === 'zh' ? '篇研究札记' : 'research notes'}</span></div>
          <div><ScanSearch aria-hidden="true" /><strong>{String(topics.length).padStart(2, '0')}</strong><span>{locale === 'zh' ? '个主题' : 'topic'}</span></div>
        </div>
      </section>

      <section className="home-section latest-section">
        <div className="section-heading section-heading--intro">
          <div><span className="section-label">{copy.latestEyebrow}</span><h2>{copy.latestEssays}</h2></div>
          <Link href={`/${locale}/articles`} className="text-link">{copy.allEssays}<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="article-list">{articles.slice(0, 3).map((article, index) => <ArticleCard key={article.slug} article={article} locale={locale} index={index} />)}</div>
      </section>

      <section className="topic-section">
        <div className="section-heading section-heading--intro">
          <div><span className="section-label">{copy.topicsEyebrow}</span><h2>{copy.nav.topics}</h2></div>
          <p>{copy.topicsLead}</p>
        </div>
        <div className="topic-grid">
          {topics.map((topic, index) => <Link className="topic-card" key={topic.slug} href={`/${locale}/topics/${topic.slug}`}>
            <span className="topic-index">0{index + 1}</span>
            <div><h3>{topic[locale]}</h3><p>{topicDescription[topic.slug]?.[locale] ?? copy.topicDescription}</p></div>
            <ArrowUpRight aria-hidden="true" />
          </Link>)}
          <div className="topic-note"><span>AI × BIO</span><p>{locale === 'zh' ? '更多主题正在生长中。' : 'More fields are taking shape.'}</p></div>
        </div>
      </section>

      <section className="about-cta">
        <div><span className="section-label">THE JOURNAL</span><h2>{copy.aboutCtaTitle}</h2></div>
        <div><p>{copy.aboutCtaBody}</p><Link className="text-link text-link--light" href={`/${locale}/about`}>{copy.aboutCtaLink}<ArrowRight aria-hidden="true" /></Link></div>
      </section>
    </main>
  );
}
