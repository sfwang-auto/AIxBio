import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = t(locale);
  return (
    <footer className="site-footer">
      <div><strong>AI <i>×</i> Bio</strong><p>{copy.footer}</p></div>
      <nav><Link href={`/${locale}/articles`}>{copy.nav.articles}</Link><Link href={`/${locale}/papers`}>{copy.nav.papers}</Link><Link href={`/${locale}/about`}>{copy.nav.about}</Link><Link href="/rss.xml">RSS <ArrowUpRight size={13} /></Link></nav>
      <p className="copyright">© 2026 AI × Bio</p>
    </footer>
  );
}
