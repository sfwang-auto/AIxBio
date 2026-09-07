import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { authorsShort, topicName } from '@/lib/content';
import { t } from '@/lib/i18n';
import type { ArticleRecord, Locale, PaperRecord } from '@/lib/types';

export function ArticleCard({ article, locale, index }: { article: ArticleRecord; locale: Locale; index?: number }) {
  const copy = t(locale); const text = article.translations[locale];
  return (
    <article className="article-card">
      <div className="card-number">{String((index ?? 0) + 1).padStart(2, '0')}</div>
      <div>
        <div className="card-meta"><span>{text.readingMinutes} {copy.minutes}</span></div>
        <h2><Link href={`/${locale}/articles/${article.slug}`}>{text.title}</Link></h2>
        <div className="card-topics">{article.topics.map((topic) => <Link key={topic} href={`/${locale}/topics/${topic}`}>{topicName(topic, locale)}</Link>)}</div>
      </div>
      <Link className="round-link" href={`/${locale}/articles/${article.slug}`} aria-label={`${copy.read}: ${text.title}`}><ArrowUpRight /></Link>
    </article>
  );
}

export function PaperCard({ paper, locale, index: _index }: { paper: PaperRecord; locale: Locale; index?: number }) {
  const copy = t(locale);
  return (
    <article className="paper-card">
      <div className="paper-card-top"><span>{paper.venue} · {paper.year}</span></div>
      <h2><Link href={`/${locale}/papers/${paper.slug}`}>{paper.originalTitle}</Link></h2>
      <p className="authors">{authorsShort(paper.authors)}</p>
      <p>{paper.summaries[locale]}</p>
      <div className="paper-card-bottom"><div>{paper.topics.map((topic) => <Link key={topic} href={`/${locale}/topics/${topic}`}>{topicName(topic, locale)}</Link>)}</div><Link href={`/${locale}/papers/${paper.slug}`} aria-label={copy.openPaper}><ArrowUpRight /></Link></div>
    </article>
  );
}
