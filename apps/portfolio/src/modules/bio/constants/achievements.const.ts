import { Achievement } from '../models/achievement.model';

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Bachelor of Computer Science',
    date: new Date(2017, 2),
    content:
      'Bachelor of Science at the University of Applied Sciences Stralsund.',
    icon: 'host',
    color: '#e1232b',
  },
  {
    title: 'Software Engineer at STZ ’Netze’',
    date: new Date(2017, 2),
    content:
      'As a graduate student I worked full-time as a Software Engineer at the Steinbeis-Transferzentrum Projektierung und Evaluierung von Netzwerken.',
    link: 'https://www.stz-netze.de/',
    icon: 'stz',
    color: '#003f62',
  },
  {
    title: 'Master of Computer Science',
    date: new Date(2018, 9),
    content:
      'Master of Science at the University of Applied Sciences Stralsund',
    icon: 'host',
    color: '#e1232b',
  },
  {
    title: 'Senior Software Engineer at MaibornWolff',
    date: new Date(2019, 0),
    content:
      'I fully grew into myself as a developer at MaibornWolff GmbH where I was able to mentor some junior colleques.',
    link: 'https://www.maibornwolff.de/',
    icon: 'maibornwolff',
    color: '#128687',
  },
  {
    title: 'Freelancer',
    date: new Date(2022, 1),
    content:
      'Excited to strike out on my own as a freelance software engineer.',
    icon: 'freelance',
    color: '#673ab7',
  },
];
