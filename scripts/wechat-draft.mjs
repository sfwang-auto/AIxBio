import matter from 'gray-matter';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const root = process.cwd();
const articlesRoot = path.join(root, 'content/articles');
const siteUrl = 'https://sfwang-auto.github.io/AIxBio';
const defaultThumbPath = path.join(root, 'public/og.png');

function parseArgs(argv) {
  const args = { dryRun: false, slug: '' };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === '--dry-run') args.dryRun = true;
    else if (value === '--slug') args.slug = argv[index + 1] ?? '';
    else if (value === '--help' || value === '-h') {
      console.log('Usage: npm run wechat:draft -- --slug <article-slug> [--dry-run]');
      process.exit(0);
    }
  }
  if (!args.slug) throw new Error('Missing --slug. Example: --slug riboseek-fast-nucleotide-alignment');
  return args;
}

function plainText(markdown) {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\[\^[^\]]+\]/g, '')
    .replace(/[*_~`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(text, maxLength) {
  return text.length <= maxLength ? text : `${text.slice(0, maxLength - 1)}…`;
}

function extractDigest(source, title) {
  const summaryLines = source.split(/\r?\n/).filter((line) => line.trimStart().startsWith('>'));
  const summary = plainText(summaryLines.map((line) => line.replace(/^\s*>\s?/, '')).join(' '));
  if (summary) return truncate(summary, 120);

  const firstParagraph = source.split(/\n\s*\n/).find((block) => block.trim() && !block.trimStart().startsWith('#')) ?? title;
  return truncate(plainText(firstParagraph), 120);
}

function flattenFootnotes(source) {
  const lines = source.split(/\r?\n/);
  const body = [];
  const notes = [];
  let currentNote = null;

  const finishNote = () => {
    if (currentNote) notes.push(currentNote);
    currentNote = null;
  };

  for (const line of lines) {
    const definition = line.match(/^\[\^([^\]]+)\]:\s*(.*)$/);
    if (definition) {
      finishNote();
      currentNote = definition[2];
      continue;
    }
    if (currentNote && (!line.trim() || /^\s{2,}/.test(line))) {
      if (line.trim()) currentNote += ` ${line.trim()}`;
      continue;
    }
    finishNote();
    body.push(line);
  }
  finishNote();

  const cleanedBody = body.join('\n').replace(/\[\^[^\]]+\]/g, '').trimEnd();
  const references = notes.map((note) => `**参考文献**：${note}`).join('\n\n');
  return references ? `${cleanedBody}\n\n${references}` : cleanedBody;
}

function prepareMarkdown(source) {
  return flattenFootnotes(source)
    .replace(/<div\s+className=["']article-figure["']>\s*/g, '')
    .replace(/\s*<\/div>/g, '')
    .replace(/^\s*(?:import|export) .*$/gm, '')
    .replace(/\$\$([\s\S]+?)\$\$/g, '\n$1\n')
    .replace(/\$([^$\n]+)\$/g, '$1');
}

function addStyle(html, tag, style) {
  const pattern = new RegExp(`<${tag}([^>]*)>`, 'g');
  return html.replace(pattern, (_match, attributes) => `<${tag}${attributes} style="${style}">`);
}

function styleForWechat(html) {
  let styled = html;
  styled = addStyle(styled, 'h2', 'margin: 32px 0 16px; color: #102a43; font-size: 21px; line-height: 1.45; font-weight: 700;');
  styled = addStyle(styled, 'h3', 'margin: 24px 0 12px; color: #1f4e79; font-size: 17px; line-height: 1.5; font-weight: 700;');
  styled = addStyle(styled, 'p', 'margin: 0 0 16px; color: #243b53; font-size: 16px; line-height: 1.9;');
  styled = addStyle(styled, 'blockquote', 'margin: 20px 0; padding: 14px 16px; border-left: 4px solid #2f80ed; background: #f0f6ff; color: #334e68; font-size: 16px; line-height: 1.8;');
  styled = addStyle(styled, 'ul', 'margin: 0 0 18px; padding-left: 24px; color: #243b53; font-size: 16px; line-height: 1.85;');
  styled = addStyle(styled, 'ol', 'margin: 0 0 18px; padding-left: 24px; color: #243b53; font-size: 16px; line-height: 1.85;');
  styled = addStyle(styled, 'li', 'margin: 6px 0;');
  styled = styled.replace(/<img([^>]*)>/g, '<img$1 style="display: block; max-width: 100%; height: auto; margin: 20px auto 8px;">');
  styled = addStyle(styled, 'a', 'color: #1769aa; text-decoration: none;');
  styled = addStyle(styled, 'pre', 'overflow-x: auto; padding: 12px; background: #f5f7fa; color: #243b53; font-size: 13px; line-height: 1.6;');
  styled = addStyle(styled, 'code', 'font-size: 0.92em;');
  return `<div style="max-width: 677px; margin: 0 auto; padding: 8px 4px; background: #ffffff;">${styled}</div>`;
}

async function markdownToHtml(source) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(prepareMarkdown(source));
  return styleForWechat(String(file));
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

async function resolveThumbPath(meta, slug, articleRoot) {
  if (process.env.WECHAT_THUMB_PATH) return path.resolve(root, process.env.WECHAT_THUMB_PATH);
  const candidatePaths = [
    meta.cover ? path.resolve(root, meta.cover) : '',
    path.join(root, 'public/images', slug, 'cover.png'),
    path.join(articleRoot, 'cover.png'),
  ];
  for (const candidatePath of candidatePaths) {
    if (!candidatePath) continue;
    try {
      await access(candidatePath);
      return candidatePath;
    } catch {
      // Try the next article-specific cover location.
    }
  }
  return defaultThumbPath;
}

async function wechatJson(url, options = {}) {
  const response = await fetch(url, options);
  const payload = await response.json();
  if (!response.ok) throw new Error(`WeChat API HTTP ${response.status}: ${JSON.stringify(payload)}`);
  if (payload.errcode && payload.errcode !== 0) throw new Error(`WeChat API ${payload.errcode}: ${payload.errmsg}`);
  return payload;
}

async function getAccessToken() {
  const params = new URLSearchParams({
    grant_type: 'client_credential',
    appid: process.env.WECHAT_APP_ID,
    secret: process.env.WECHAT_APP_SECRET,
  });
  const payload = await wechatJson(`https://api.weixin.qq.com/cgi-bin/token?${params}`);
  if (!payload.access_token) throw new Error('WeChat API did not return an access token.');
  return payload.access_token;
}

async function uploadFile(accessToken, endpoint, filePath, fieldName = 'media') {
  const buffer = await readFile(filePath);
  const form = new FormData();
  form.append(fieldName, new Blob([buffer]), path.basename(filePath));
  const separator = endpoint.includes('?') ? '&' : '?';
  return wechatJson(`https://api.weixin.qq.com${endpoint}${separator}access_token=${encodeURIComponent(accessToken)}`, {
    method: 'POST',
    body: form,
  });
}

async function uploadArticleImage(accessToken, filePath) {
  const payload = await uploadFile(accessToken, '/cgi-bin/media/uploadimg', filePath);
  if (!payload.url) throw new Error(`WeChat did not return an image URL for ${filePath}.`);
  return payload.url;
}

async function uploadThumb(accessToken, filePath) {
  const payload = await uploadFile(accessToken, '/cgi-bin/material/add_material?type=thumb', filePath);
  if (!payload.media_id) throw new Error(`WeChat did not return a cover media_id for ${filePath}.`);
  return payload.media_id;
}

async function createDraft(accessToken, article) {
  const payload = await wechatJson(`https://api.weixin.qq.com/cgi-bin/draft/add?access_token=${encodeURIComponent(accessToken)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ articles: [article] }),
  });
  if (!payload.media_id) throw new Error('WeChat did not return a draft media_id.');
  return payload.media_id;
}

async function main() {
  const { slug, dryRun } = parseArgs(process.argv.slice(2));
  const articleRoot = path.join(articlesRoot, slug);
  const meta = await readJson(path.join(articleRoot, 'meta.json'));
  if (meta.slug !== slug) throw new Error(`Article slug mismatch in ${slug}/meta.json.`);
  if (meta.draft) throw new Error(`Article "${slug}" is marked as draft.`);

  const source = matter(await readFile(path.join(articleRoot, 'zh.mdx'), 'utf8')).content;
  const title = meta.translations?.zh?.title;
  if (!title) throw new Error(`Article "${slug}" has no Chinese title.`);

  const imagePaths = [...new Set([...source.matchAll(/\((\.\.\/\.\.\/\.\.\/public\/[^)\s]+)\)/g)].map((match) => match[1]))];
  const imageUrls = new Map();
  let accessToken = '';

  if (!dryRun) {
    if (!process.env.WECHAT_APP_ID || !process.env.WECHAT_APP_SECRET) {
      throw new Error('Set WECHAT_APP_ID and WECHAT_APP_SECRET before creating a WeChat draft.');
    }
    accessToken = await getAccessToken();
  }

  for (const relativePath of imagePaths) {
    const filePath = path.resolve(articleRoot, relativePath);
    await readFile(filePath);
    const assetPath = relativePath.replace(/^\.\.\/\.\.\/\.\.\/public\//, '');
    const remoteUrl = dryRun
      ? `https://example.com/AIxBio/${assetPath}`
      : await uploadArticleImage(accessToken, filePath);
    imageUrls.set(relativePath, remoteUrl);
  }

  let htmlSource = source;
  for (const [relativePath, remoteUrl] of imageUrls) htmlSource = htmlSource.replaceAll(relativePath, remoteUrl);
  const content = await markdownToHtml(htmlSource);
  if (content.length > 20000) console.warn(`Warning: WeChat content is ${content.length} characters; check the account's article length limit.`);

  const thumbPath = await resolveThumbPath(meta, slug, articleRoot);
  const thumbMediaId = dryRun ? 'dry-run-thumb-media-id' : await uploadThumb(accessToken, thumbPath);
  const article = {
    article_type: 'news',
    title,
    author: process.env.WECHAT_AUTHOR || 'AI × Bio',
    digest: extractDigest(source, title),
    content,
    content_source_url: `${siteUrl}/zh/articles/${slug}/`,
    thumb_media_id: thumbMediaId,
    need_open_comment: 1,
    only_fans_can_comment: 0,
  };

  if (dryRun) {
    console.log(JSON.stringify({ slug, title, digest: article.digest, htmlLength: content.length, imageCount: imagePaths.length, thumbPath }, null, 2));
    return;
  }

  const mediaId = await createDraft(accessToken, article);
  console.log(JSON.stringify({ slug, title, mediaId, imageCount: imagePaths.length }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
