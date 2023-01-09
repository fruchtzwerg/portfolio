import type { Taggable } from './tag.enum';

export interface Timeslot extends Taggable {
  caption: string;
  title: string;
  description: string[];
  date: Date;
  nda?: true;
  keywords: string[];
  link?: {
    label: string;
    href: string;
  };
}

export type Frontmatter = Pick<Timeslot, 'id' | 'date' | 'caption' | 'tags' | 'nda'>;
