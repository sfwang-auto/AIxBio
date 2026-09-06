import { compile } from '@mdx-js/mdx';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { z } from 'zod';

const root = process.cwd();
const articlesRoot = path.join(root, 'content/articles');
const papersRoot = path.join(root, 'content/papers');
const generatedRoot = path.join(root, 'lib/generated');
const generatedArticles = path.join(generatedRoot, 'articles');
const siteBasePath = '/AIxBio';

const localeCopy = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  readingMinutes: z.number().int().positive(),
}).strict();

const articleSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)), 'Invalid calendar date'),
  topics: z.array(z.string()).min(1),
  papers: z.array(z.string()),
  draft: z.boolean(),
  featured: z.boolean(),
  demo: z.boolean(),
  translations: z.object({ zh: localeCopy, en: localeCopy }).strict(),
}).strict();

const paperSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  originalTitle: z.string().min(1),
  authors: z.array(z.string().min(1)).min(1),
  year: z.number().int().min(1900).max(2100),
  venue: z.string().min(1),
  doi: z.string().min(1).nullable(),
  url: z.url().refine((value) => value.startsWith('https://'), 'Paper URL must use HTTPS'),
  arxiv: z.string().min(1).nullable(),
  topics: z.array(z.string()).min(1),
  articles: z.array(z.string()),
  demo: z.boolean(),
  summaries: z.object({ zh: z.string().min(1), en: z.string().min(1) }).strict(),
}).strict();

const topicSchema = z.array(z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  zh: z.string().min(1),
  en: z.string().min(1),
  descriptionZh: z.string().min(1),
  descriptionEn: z.string().min(1),
}).strict());

function assertUnique(records, label) {
  const slugs = new Set(records.map((record) => record.slug));
  if (slugs.size !== records.length) throw new Error(`Duplicate ${label} slug detected`);
}

function normalizeArticleAssetPaths(source) {
  return source.replace(/(!\[[^\]]*\]\()\.\.\/\.\.\/\.\.\/public\/([^)]+)(\))/g, (_match, prefix, assetPath, suffix) => `${prefix}${siteBasePath}/${assetPath}${suffix}`);
}

function runSelfTest() {
  const validArticle = { slug: 'test-article', date: '2026-08-30', topics: ['test'], papers: [], draft: false, featured: false, demo: true, translations: { zh: { title: '测试', summary: '摘要', readingMinutes: 1 }, en: { title: 'Test', summary: 'Summary', readingMinutes: 1 } } };
  const validPaper = { slug: 'test-paper', originalTitle: 'Test paper', authors: ['A. Author'], year: 2026, venue: 'Test', doi: null, url: 'https://example.com/paper', arxiv: null, topics: ['test'], articles: [], demo: true, summaries: { zh: '摘要', en: 'Summary' } };
  const cases = [
    { label: 'missing English translation', schema: articleSchema, value: { ...validArticle, translations: { zh: validArticle.translations.zh } } },
    { label: 'invalid article date', schema: articleSchema, value: { ...validArticle, date: '2026-13-50' } },
    { label: 'non-HTTPS paper URL', schema: paperSchema, value: { ...validPaper, url: 'http://example.com/paper' } },
  ];
  for (const testCase of cases) if (testCase.schema.safeParse(testCase.value).success) throw new Error(`Self-test failed: ${testCase.label} was accepted`);
  let duplicateRejected = false;
  try { assertUnique([validArticle, validArticle], 'article'); } catch { duplicateRejected = true; }
  if (!duplicateRejected) throw new Error('Self-test failed: duplicate slug was accepted');
  const normalizedImage = normalizeArticleAssetPaths('![Alt](../../../public/images/example.png)');
  if (normalizedImage !== '![Alt](/AIxBio/images/example.png)') throw new Error('Self-test failed: local article image path was not normalized');
  console.log('Content contract self-test passed: bilingual pairing, dates, HTTPS URLs, and duplicate slugs are enforced.');
}

async function json(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

async function main() {
  const topicData = topicSchema.parse(await json(path.join(root, 'content/topics.json')));
  const topicSlugs = new Set(topicData.map((topic) => topic.slug));
  const articleFolders = (await readdir(articlesRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  const articleData = [];

  await rm(generatedArticles, { recursive: true, force: true });
  await mkdir(generatedArticles, { recursive: true });

  for (const folder of articleFolders) {
    const folderPath = path.join(articlesRoot, folder);
    const article = articleSchema.parse(await json(path.join(folderPath, 'meta.json')));
    article.toc = { zh: [], en: [] };
    if (article.slug !== folder) throw new Error(`Article slug "${article.slug}" must match folder "${folder}"`);
    for (const topic of article.topics) if (!topicSlugs.has(topic)) throw new Error(`Unknown topic "${topic}" in article "${article.slug}"`);
    for (const locale of ['zh', 'en']) {
      const sourcePath = path.join(folderPath, `${locale}.mdx`);
      let source;
      try { source = matter(await readFile(sourcePath, 'utf8')).content; }
      catch { throw new Error(`Article "${article.slug}" is missing required ${locale}.mdx`); }
      const slugger = new GithubSlugger();
      article.toc[locale] = [...source.matchAll(/^(#{2,3})\s+(.+)$/gm)].map((match) => ({ id: slugger.slug(match[2].replace(/[*_`]/g, '')), title: match[2].replace(/[*_`]/g, ''), level: match[1].length }));
      const compiled = await compile(normalizeArticleAssetPaths(source), {
        outputFormat: 'program',
        jsx: false,
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeSlug, rehypeKatex, rehypeHighlight],
      });
      await writeFile(path.join(generatedArticles, `${article.slug}.${locale}.tsx`), `// @ts-nocheck\n${String(compiled)}`);
    }
    if (!article.draft) articleData.push(article);
  }

  const paperFiles = (await readdir(papersRoot)).filter((file) => file.endsWith('.json')).sort();
  const paperData = [];
  for (const file of paperFiles) {
    const paper = paperSchema.parse(await json(path.join(papersRoot, file)));
    if (`${paper.slug}.json` !== file) throw new Error(`Paper slug "${paper.slug}" must match filename "${file}"`);
    for (const topic of paper.topics) if (!topicSlugs.has(topic)) throw new Error(`Unknown topic "${topic}" in paper "${paper.slug}"`);
    paperData.push(paper);
  }

  assertUnique(articleData, 'article');
  assertUnique(paperData, 'paper');

  for (const article of articleData) {
    for (const paperSlug of article.papers) {
      const paper = paperData.find((item) => item.slug === paperSlug);
      if (!paper) throw new Error(`Article "${article.slug}" links to missing paper "${paperSlug}"`);
      if (!paper.articles.includes(article.slug)) throw new Error(`Paper "${paperSlug}" must link back to article "${article.slug}"`);
    }
  }
  for (const paper of paperData) {
    for (const articleSlug of paper.articles) {
      const article = articleData.find((item) => item.slug === articleSlug);
      if (!article) throw new Error(`Paper "${paper.slug}" links to missing article "${articleSlug}"`);
      if (!article.papers.includes(paper.slug)) throw new Error(`Article "${articleSlug}" must link back to paper "${paper.slug}"`);
    }
  }

  articleData.sort((a, b) => b.date.localeCompare(a.date));
  paperData.sort((a, b) => b.year - a.year || a.originalTitle.localeCompare(b.originalTitle));

  const imports = articleData.flatMap((article, index) => [
    `import Article${index}Zh from './generated/articles/${article.slug}.zh';`,
    `import Article${index}En from './generated/articles/${article.slug}.en';`,
  ]).join('\n');
  const bodyEntries = articleData.map((article, index) => `  ${JSON.stringify(article.slug)}: { zh: Article${index}Zh, en: Article${index}En },`).join('\n');
  const dataOutput = `/* This file is generated by scripts/generate-content.mjs. */\nimport type { ArticleRecord, PaperRecord, TopicRecord } from './types';\nexport const articles = ${JSON.stringify(articleData, null, 2)} satisfies ArticleRecord[];\nexport const papers = ${JSON.stringify(paperData, null, 2)} satisfies PaperRecord[];\nexport const topics = ${JSON.stringify(topicData, null, 2)} satisfies TopicRecord[];\n`;
  const contentOutput = `/* This file is generated by scripts/generate-content.mjs. */\nimport type { ComponentType } from 'react';\n${imports}\n\nexport const articleBodies: Record<string, Record<'zh' | 'en', ComponentType<Record<string, unknown>>>> = {\n${bodyEntries}\n};\n`;
  await writeFile(path.join(root, 'lib/generated-data.ts'), dataOutput);
  await writeFile(path.join(root, 'lib/generated-content.ts'), contentOutput);
  console.log(`Validated ${articleData.length} bilingual articles, ${paperData.length} papers, and ${topicData.length} topics.`);
}

if (process.argv.includes('--self-test')) runSelfTest();
else main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
