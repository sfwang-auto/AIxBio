import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { t } from '@/lib/i18n';
import { isLocale } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = t(locale);
  return { title: copy.aboutTitle, description: copy.aboutLead, alternates: { canonical: `/${locale}/about`, languages: { 'zh-CN': '/zh/about', en: '/en/about' } } };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const copy = t(locale);
  return <main className="about-page"><header><span>04 — ABOUT</span><h1>{copy.aboutTitle}</h1><p>{copy.aboutLead}</p></header><div className="about-grid"><div className="about-monogram"><span>AI</span><i>×</i><span>BIO</span></div><div><p>{copy.aboutBody}</p><blockquote>{locale === 'zh' ? '不是追逐每一条新闻，而是建立一套可以复查、关联、继续生长的知识结构。' : 'Not every headline — a knowledge structure that can be reviewed, connected, and grown.'}</blockquote><dl><div><dt>{copy.formatLabel}</dt><dd>{copy.formatValue}</dd></div><div><dt>{copy.languageLabel}</dt><dd>{copy.languageValue}</dd></div><div><dt>{copy.focusLabel}</dt><dd>{copy.focusValue}</dd></div></dl></div></div></main>;
}
