import { BioSection } from '../../modules/bio/bio.section';
import { IntroSection } from '../../modules/intro/intro.section';
import { PortfolioSection } from '../../modules/portfolio/portfolio.section';
import { SkillsSection } from '../../modules/skills/skills.section';
import { Section } from '../models/section.model';

export const SECTIONS: Section[] = [
  { name: 'intro', component: IntroSection },
  { name: 'skills', component: SkillsSection },
  { name: 'bio', component: BioSection },
  { name: 'portfolio', component: PortfolioSection },
];
