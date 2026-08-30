import type { Locale } from './types';

export const siteName = 'AI × Bio';
export const siteBasePath = '/AIxBio';
export const siteUrl = 'https://sfwang-auto.github.io/AIxBio';
export const locales: Locale[] = ['zh', 'en'];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function alternatePath(pathname: string, locale: Locale) {
  const routePath = pathname.startsWith(`${siteBasePath}/`)
    ? pathname.slice(siteBasePath.length)
    : pathname;
  const segments = routePath.split('/');
  if (segments[1] === 'zh' || segments[1] === 'en') segments[1] = locale;
  else segments.splice(1, 0, locale);
  return segments.join('/') || `/${locale}`;
}
