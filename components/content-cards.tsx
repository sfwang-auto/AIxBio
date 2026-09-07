import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { topicName } from '@/lib/content';
import { t } from '@/lib/i18n';
import type { ArticleRecord, Locale } from '@/lib/types';

export function ArticleCard({ article, locale, index }: { article: ArticleRecord; locale: Locale; index?: number }) {
  const copy = t(locale); const text = article.translations[locale];
  return (
    <article className="article-card">
      <div className="card-number"><span>NOTE</span>{String((index ?? 0) + 1).padStart(2, '0')}</div>
      <div>
        <div className="card-topics">{article.topics.map((topic) => <Link key={topic} href={`/${locale}/topics/${topic}`}>{topicName(topic, locale)}</Link>)}</div>
        <h2><Link href={`/${locale}/articles/${article.slug}`}>{text.title}</Link></h2>
        <span className="card-type">{locale === 'zh' ? '论文解读 · 约 8 分钟阅读' : 'Paper reading · 8 min read'}</span>
      </div>
      <Link className="round-link" href={`/${locale}/articles/${article.slug}`} aria-label={`${copy.read}: ${text.title}`}><ArrowUpRight aria-hidden="true" /></Link>
    </article>
  );
}
