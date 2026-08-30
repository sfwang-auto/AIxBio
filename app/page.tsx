import Link from 'next/link';
import { siteBasePath } from '@/lib/site';

export default function RootPage() {
  return (
    <main className="not-found">
      <meta httpEquiv="refresh" content={`0; url=${siteBasePath}/zh/`} />
      <span>AI × Bio</span>
      <h1>正在进入双语研究刊物…</h1>
      <p>Redirecting to the Chinese edition.</p>
      <Link href="/zh">继续访问</Link>
    </main>
  );
}
