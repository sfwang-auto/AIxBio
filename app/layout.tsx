import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';
import 'katex/dist/katex.min.css';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: { default: 'AI × Bio — Essays on intelligent biology', template: '%s — AI × Bio' },
    description: 'A bilingual field journal for papers, ideas, and deep readings across artificial intelligence and biology.',
    applicationName: 'AI × Bio',
    keywords: ['AI for biology', 'computational biology', 'paper reading', 'bioinformatics', '人工智能', '生命科学'],
    icons: { icon: `${siteUrl}/favicon.svg` },
    openGraph: { type: 'website', siteName: 'AI × Bio', title: 'AI × Bio — Essays on intelligent biology', description: 'Papers, models, and living systems — read closely in Chinese and English.', images: [{ url: `${siteUrl}/og.png`, width: 1792, height: 1024, alt: 'AI × Bio — Papers, Models, Living Systems' }] },
    twitter: { card: 'summary_large_image', title: 'AI × Bio — Essays on intelligent biology', description: 'Papers, models, and living systems — read closely in Chinese and English.', images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
