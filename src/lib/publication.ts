import fs from 'node:fs';
import path from 'node:path';
import Citation from '@citation-js/core';
import '@citation-js/plugin-bibtex';

const Cite = Citation.Cite;

export function loadPublications(folder: string) {
  const bibPath = path.join(folder);
  const files = fs.readdirSync(bibPath);

  const publications = files
    .filter((file) => file.endsWith('.bib'))
    .flatMap((file) => {
      const content = fs.readFileSync(path.join(bibPath, file), 'utf-8');

      const cite = new Cite(content).format('data', { format: 'object' });

      const formattedCite = cite.map((entry: any) => ({
        id: entry['citation-key'] || '',
        title: entry.title || '',
        author:
          entry.author?.map((a: any) => `${a.given} ${a.family}`).join(', ') ||
          '',
        year: entry.issued?.['date-parts']?.[0]?.[0] || 0,
        local: entry['container-title'] || '',
        url: entry.URL || '',
      }));

      return formattedCite;
    });

  publications.sort((a, b) => b.year - a.year);

  return publications;
}
