import type { Locale } from './types';

export const dictionary = {
  zh: {
    nav: { articles: '文章', papers: '论文库', topics: '主题', about: '关于' },
    search: '搜索', searchPlaceholder: '搜索文章、论文或主题…', noResults: '没有找到相关内容',
    latest: '阅读最新文章', minutes: '分钟',
    paperDesk: '案头论文', openPaper: '查看论文笔记', researchIndex: '研究索引',
    latestEssays: '最新文章', allEssays: '全部文章', browsePapers: '浏览论文库', recentPapers: '近期论文',
    articlesTitle: '文章与深度阅读', articlesIntro: '不是翻译摘要，而是追踪假设、表示、证据与边界。',
    papersTitle: '论文库', papersIntro: '按主题与年份浏览论文，并进入相关的双语解读。',
    filterAll: '全部', filterTopic: '主题', filterYear: '年份', clear: '清除筛选', result: '篇论文',
    relatedEssays: '相关解读', relatedPapers: '关联论文', originalPaper: '访问论文原文',
    published: '发布于', tableContents: '本文内容', backArticles: '返回文章', backPapers: '返回论文库',
    topic: '主题', aboutTitle: '关于 AI × Bio', aboutLead: '一份连接机器学习与生命科学的双语个人研究刊物。',
    aboutBody: '这里记录论文阅读、技术推导与仍未解决的问题。目标不是追逐每一条新闻，而是建立一套可复查、可关联、可长期生长的知识结构。',
    footer: '论文、模型与生命系统。', external: '外部链接', read: '阅读全文',
  },
  en: {
    nav: { articles: 'Essays', papers: 'Papers', topics: 'Topics', about: 'About' },
    search: 'Search', searchPlaceholder: 'Search essays, papers, or topics…', noResults: 'No matching research notes',
    latest: 'Read the latest essay', minutes: 'min',
    paperDesk: 'Paper on the desk', openPaper: 'Open paper note', researchIndex: 'Research index',
    latestEssays: 'Latest essays', allEssays: 'All essays', browsePapers: 'Browse paper library', recentPapers: 'Recent papers',
    articlesTitle: 'Essays & close readings', articlesIntro: 'Not translated abstracts, but close readings of assumptions, representations, evidence, and limits.',
    papersTitle: 'Paper library', papersIntro: 'Browse by topic and year, then follow each paper into its bilingual interpretation.',
    filterAll: 'All', filterTopic: 'Topic', filterYear: 'Year', clear: 'Clear filters', result: 'papers',
    relatedEssays: 'Related essays', relatedPapers: 'Papers in this essay', originalPaper: 'Visit original paper',
    published: 'Published', tableContents: 'In this essay', backArticles: 'Back to essays', backPapers: 'Back to library',
    topic: 'Topic', aboutTitle: 'About AI × Bio', aboutLead: 'A bilingual personal research journal connecting machine learning and the life sciences.',
    aboutBody: 'This site records paper readings, technical derivations, and questions that remain unresolved. The goal is not to chase every headline, but to build knowledge that is reviewable, connected, and able to grow over time.',
    footer: 'Papers, models, and living systems.', external: 'External link', read: 'Read essay',
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export function t(locale: Locale) { return dictionary[locale]; }
