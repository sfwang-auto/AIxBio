import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { isLocale, locales } from '@/lib/site';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <div lang={locale === 'zh' ? 'zh-CN' : 'en'}><SiteHeader locale={locale} />{children}<SiteFooter locale={locale} /></div>;
}
