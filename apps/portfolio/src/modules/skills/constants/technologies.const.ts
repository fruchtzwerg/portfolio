import { Technology } from '../models/technology.model';

export const TECHNOLOGIES: Technology[] = [
  {
    title: 'Angular',
    description: ['Material', 'NX', 'RxJS', 'Jest', 'NgRx', 'NGXS'],
    icon: 'angular',
    experience: 10,
    color: '#dd0031',
  },
  {
    title: 'React',
    description: ['Next', 'Redux', 'MobX'],
    icon: 'react',
    experience: 5,
    color: '#61dafb',
  },
  {
    title: 'Vue',
    description: ['JS/TS', 'Nuxt', 'Vuex'],
    icon: 'vue',
    experience: 8,
    color: '#41b883',
  },
  {
    title: 'Nest',
    description: ['Auth', 'TypeORM', 'Electron'],
    icon: 'nest',
    experience: 8,
    color: '#e0234e',
  },
  {
    title: 'NX',
    description: [
      'Monorepo',
      'Apps',
      'Libs',
      'Generators',
      'Linting',
      'i18n',
      'Migration',
    ],
    icon: 'nrwl',
    experience: 8,
    color: '#143157',
  },
  {
    title: 'Docker',
    description: ['Multi-Stage', 'Docker', 'Compose', 'Volumes', 'Networks'],
    icon: 'docker',
    experience: 7,
    color: '#007bff',
  },
];
