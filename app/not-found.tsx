import Link from 'next/link';
export default function NotFound() { return <main className="not-found"><span>404</span><h1>Research note not found.</h1><p>这页笔记可能尚未发布，或链接已经改变。</p><Link href="/zh">返回 AI × Bio</Link></main>; }
