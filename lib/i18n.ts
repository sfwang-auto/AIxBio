import type { Locale } from './types';

export const dictionary = {
  zh: {
    nav: { articles: '文章', topics: '主题', about: '关于' },
    search: '搜索', searchPlaceholder: '搜索文章或主题…', noResults: '没有找到相关内容',
    researchIndex: '研究索引',
    latestEssays: '最新文章', allEssays: '全部文章',
    articlesTitle: '文章与深度阅读', articlesIntro: '不是翻译摘要，而是追踪假设、表示、证据与边界。',
    tableContents: '本文内容', backArticles: '返回文章',
    topic: '主题', aboutTitle: '关于 AI × Bio', aboutLead: '一份连接机器学习与生命科学的双语个人研究刊物。',
    aboutBody: '这里记录论文阅读、技术推导与仍未解决的问题。目标不是追逐每一条新闻，而是建立一套可复查、可关联、可长期生长的知识结构。',
    footer: '论文、模型与生命系统。', read: '阅读全文',
  },
  en: {
    nav: { articles: 'Essays', topics: 'Topics', about: 'About' },
    search: 'Search', searchPlaceholder: 'Search essays or topics…', noResults: 'No matching research notes',
    researchIndex: 'Research index',
    latestEssays: 'Latest essays', allEssays: 'All essays',
    articlesTitle: 'Essays & close readings', articlesIntro: 'Not translated abstracts, but close readings of assumptions, representations, evidence, and limits.',
    tableContents: 'In this essay', backArticles: 'Back to essays',
    topic: 'Topic', aboutTitle: 'About AI × Bio', aboutLead: 'A bilingual personal research journal connecting machine learning and the life sciences.',
    aboutBody: 'This site records paper readings, technical derivations, and questions that remain unresolved. The goal is not to chase every headline, but to build knowledge that is reviewable, connected, and able to grow over time.',
    footer: 'Papers, models, and living systems.', read: 'Read essay',
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export function t(locale: Locale) { return dictionary[locale]; }
