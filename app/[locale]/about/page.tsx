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
  return <main className="about-page"><header><h1>{copy.aboutTitle}</h1><p>{copy.aboutLead}</p></header><div className="about-grid"><div className="about-monogram">AI<br /><i>×</i>B</div><div><p>{copy.aboutBody}</p><dl><div><dt>Format</dt><dd>Markdown / MDX</dd></div><div><dt>Languages</dt><dd>中文 / English</dd></div><div><dt>Focus</dt><dd>AI · Biology · Research</dd></div></dl></div></div></main>;
}
import type { Metadata } from 'next';
