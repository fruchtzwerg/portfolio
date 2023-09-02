import type { Icon } from './icon.model';
import type { Taggable } from './tag.enum';

export interface Technology extends Taggable {
  title: string;
  icon: Icon;
  description: string;
  keywords: string[];
  skill: number;
  href: string;
  selected?: boolean;
}
