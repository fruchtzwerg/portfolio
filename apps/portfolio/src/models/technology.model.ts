import type { Icon } from './icon.model';

export interface Technology {
  title: string;
  icon: Icon;
  description: string;
  tags: string[];
  skill: number;
  href: string;
}
