'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dna, Menu, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { t } from '@/lib/i18n';
import { alternatePath } from '@/lib/site';
import type { Locale } from '@/lib/types';
import { SearchPalette } from './search-palette';

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLocale: Locale = locale === 'zh' ? 'en' : 'zh';
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const links = [
    [`/${locale}/articles`, copy.nav.articles],
    [`/${locale}/topics/foundation-models`, copy.nav.topics],
    [`/${locale}/about`, copy.nav.about],
  ];
  return (
    <>
      <header className="site-header full-header">
        <Link href={`/${locale}`} className="brand" aria-label="AI x Bio home"><span className="brand-mark"><Dna size={18} strokeWidth={1.8} /></span><span>AI <i>×</i> Bio</span></Link>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>)}
          <button className="search-button" aria-label={copy.search} onClick={() => setSearchOpen(true)}><Search size={17} /><kbd>⌘K</kbd></button>
          <Link className="locale-chip" href={alternatePath(pathname, otherLocale)} hrefLang={otherLocale}>{locale === 'zh' ? 'EN' : '中文'}</Link>
        </nav>
        <div className="mobile-actions">
          <button className="search-button" aria-label={copy.search} onClick={() => setSearchOpen(true)}><Search size={19} /></button>
          <button className="menu-button" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link href={alternatePath(pathname, otherLocale)}>{locale === 'zh' ? 'English' : '中文'}</Link></nav>}
      <SearchPalette locale={locale} open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
