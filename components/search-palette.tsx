'use client';

import { FileText, Tags } from 'lucide-react';
import { articles, topics } from '@/lib/generated-data';
import { t } from '@/lib/i18n';
import { siteBasePath } from '@/lib/site';
import type { Locale } from '@/lib/types';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

export function SearchPalette({ locale, open, onOpenChange }: { locale: Locale; open: boolean; onOpenChange: (open: boolean) => void }) {
  const copy = t(locale);
  const go = (url: string) => { onOpenChange(false); window.location.assign(`${siteBasePath}${url}/`); };
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} title={copy.search} description={copy.searchPlaceholder} className="search-dialog">
      <CommandInput placeholder={copy.searchPlaceholder} aria-label={copy.searchPlaceholder} />
      <CommandList>
        <CommandEmpty>{copy.noResults}</CommandEmpty>
        <CommandGroup heading={copy.nav.articles}>
          {articles.map((article) => (
            <CommandItem key={article.slug} value={article.translations[locale].title} onSelect={() => go(`/${locale}/articles/${article.slug}`)}>
              <FileText /><span>{article.translations[locale].title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading={copy.nav.topics}>
          {topics.map((topic) => (
            <CommandItem key={topic.slug} value={`${topic.zh} ${topic.en}`} onSelect={() => go(`/${locale}/topics/${topic.slug}`)}>
              <Tags /><span>{topic[locale]}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
