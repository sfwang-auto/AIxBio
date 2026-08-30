import { notFound } from 'next/navigation';
import { PaperExplorer } from '@/components/paper-explorer';
import { papers } from '@/lib/content';
import { t } from '@/lib/i18n';
import { isLocale } from '@/lib/site';

export default async function PapersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const copy = t(locale);
  return <main className="listing-page"><header className="page-intro"><span>02 — {copy.nav.papers}</span><h1>{copy.papersTitle}</h1><p>{copy.papersIntro}</p></header><PaperExplorer locale={locale} papers={papers} /></main>;
}
