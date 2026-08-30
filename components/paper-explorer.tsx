'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PaperCard } from './content-cards';
import { topics } from '@/lib/generated-data';
import { t } from '@/lib/i18n';
import type { Locale, PaperRecord } from '@/lib/types';

export function PaperExplorer({ locale, papers }: { locale: Locale; papers: PaperRecord[] }) {
  const copy = t(locale); const [query, setQuery] = useState(''); const [topic, setTopic] = useState('all'); const [year, setYear] = useState('all');
  const years = [...new Set(papers.map((paper) => paper.year))].sort((a, b) => b - a);
  const results = useMemo(() => papers.filter((paper) => {
    const haystack = `${paper.originalTitle} ${paper.authors.join(' ')} ${paper.summaries[locale]}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (topic === 'all' || paper.topics.includes(topic)) && (year === 'all' || String(paper.year) === year);
  }), [locale, papers, query, topic, year]);
  return (
    <>
      <div className="paper-controls">
        <label className="filter-search" htmlFor="paper-search"><Search size={17} /><Input id="paper-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.searchPlaceholder} /></label>
        <label htmlFor="paper-topic"><span>{copy.filterTopic}</span><select id="paper-topic" value={topic} onChange={(event) => setTopic(event.target.value)}><option value="all">{copy.filterAll}</option>{topics.map((item) => <option key={item.slug} value={item.slug}>{item[locale]}</option>)}</select></label>
        <label htmlFor="paper-year"><span>{copy.filterYear}</span><select id="paper-year" value={year} onChange={(event) => setYear(event.target.value)}><option value="all">{copy.filterAll}</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        <Button variant="outline" onClick={() => { setQuery(''); setTopic('all'); setYear('all'); }}>{copy.clear}</Button>
      </div>
      <div className="result-count"><b>{results.length}</b> {copy.result}</div>
      <div className="paper-grid">{results.map((paper, index) => <PaperCard key={paper.slug} paper={paper} locale={locale} index={index} />)}</div>
      {results.length === 0 && <div className="empty-state">{copy.noResults}</div>}
    </>
  );
}
