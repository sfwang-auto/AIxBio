import type { Locale } from './types';

export const siteName = 'AI × Bio';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const locales: Locale[] = ['zh', 'en'];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function alternatePath(pathname: string, locale: Locale) {
  const segments = pathname.split('/');
  if (segments[1] === 'zh' || segments[1] === 'en') segments[1] = locale;
  else segments.splice(1, 0, locale);
  return segments.join('/') || `/${locale}`;
}
