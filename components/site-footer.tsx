import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = t(locale);
  return (
    <footer className="site-footer">
      <div className="footer-brand"><span className="footer-symbol">AI × B</span><p>{copy.footer}</p></div>
      <div className="footer-links"><Link href={`/${locale}/articles`}>{copy.nav.articles}<ArrowUpRight aria-hidden="true" /></Link><Link href={`/${locale}/about`}>{copy.aboutCtaLink}<ArrowUpRight aria-hidden="true" /></Link></div>
      <p className="copyright">© 2026 AI × Bio <span>·</span> {locale === 'zh' ? '双语研究刊物' : 'Bilingual research journal'}</p>
    </footer>
  );
}
