import { Skill } from '../models/skill.model';

export const SKILLS: Skill[] = [
  {
    title: 'Frontend',
    description: [
      'Angular',
      'React',
      'Vue',
      'TypeScript',
      'Micro Frontends',
      'Webpack',
      'PWA',
    ],
    icon: 'frontend',
    favorite: true,
  },
  {
    title: 'Architecture',
    description: ['iSAQB Certified'],
    hrefs: ['https://www.isaqb.org/certifications/cpsa-certifications/'],
    icon: 'architecture',
  },
  {
    title: 'Backend',
    description: ['Nest', 'Express', 'REST', 'WebSockets', 'JWT'],
    icon: 'backend',
  },
  {
    title: 'DevOps',
    description: ['Docker', 'GitLab CI'],
    icon: 'package',
  },
];
