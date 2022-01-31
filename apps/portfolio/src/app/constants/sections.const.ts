import { BioSection } from '../../modules/bio/bio.section';
import { IntroSection } from '../../modules/intro/intro.section';
import { PortfolioSection } from '../../modules/portfolio/portfolio.section';
import { ProjectsSection } from '../../modules/projects/projects.section';
import { SkillsSection } from '../../modules/skills/skills.section';
import { Section } from '../models/section.model';

export const SECTIONS: Section[] = [
  {
    name: 'about',
    component: IntroSection,
    animation: 'fadeIn',
    duration: 1_000,
  },
  {
    name: 'skills',
    component: SkillsSection,
  },
  {
    name: 'projects',
    component: ProjectsSection,
  },
  {
    name: 'bio',
    component: BioSection,
  },
  {
    name: 'portfolio',
    component: PortfolioSection,
    animation: 'fadeIn',
  },
];
