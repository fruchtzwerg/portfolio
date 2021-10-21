import { BioSection } from '../../modules/bio/bio.section';
import { ContactSection } from '../../modules/contact/contact.section';
import { PortfolioSection } from '../../modules/portfolio/portfolio.section';
import { Section } from '../models/section.model';

export const SECTIONS: Section[] = [
  { name: 'bio', component: BioSection },
  { name: 'portfolio', component: PortfolioSection },
  { name: 'contact', component: ContactSection },
];
