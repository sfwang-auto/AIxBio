import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { siteUrl } from '@/lib/site';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get('host') ?? '';
  const trustedHost = host === 'localhost:3000' || host === '127.0.0.1:3000' || /(^|\.)chatgpt\.site$/.test(host);
  const origin = trustedHost ? `${host.includes('localhost') || host.startsWith('127.0.0.1') ? 'http' : 'https'}://${host}` : siteUrl;
  const socialImage = `${origin}/og.png`;
  return {
    metadataBase: new URL(origin),
    title: { default: 'AI × Bio — Essays on intelligent biology', template: '%s — AI × Bio' },
    description: 'A bilingual field journal for papers, ideas, and deep readings across artificial intelligence and biology.',
    applicationName: 'AI × Bio',
    keywords: ['AI for biology', 'computational biology', 'paper reading', 'bioinformatics', '人工智能', '生命科学'],
    icons: { icon: '/favicon.svg' },
    openGraph: { type: 'website', siteName: 'AI × Bio', title: 'AI × Bio — Essays on intelligent biology', description: 'Papers, models, and living systems — read closely in Chinese and English.', images: [{ url: socialImage, width: 1792, height: 1024, alt: 'AI × Bio — Papers, Models, Living Systems' }] },
    twitter: { card: 'summary_large_image', title: 'AI × Bio — Essays on intelligent biology', description: 'Papers, models, and living systems — read closely in Chinese and English.', images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="stylesheet" href="/katex.min.css" /></head><body>{children}</body></html>;
}
