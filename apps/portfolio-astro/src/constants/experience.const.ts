import type { Timeslot } from '../models/timeslot.model';

export const sections: Timeslot[] = [
  {
    date: new Date('2022-03-01'),
    caption: 'Kuehne+Nagel',
    title: 'myKN',
    description:
      'Distribution and sales platform for one of the largest logistic companies in the world. Responsible for multiple frontends. Architecting and engineering of the navigation components, shared across multiple teams/services as microfrontend-webcomponent.',
    link: { label: 'myKN', href: 'https://mykn.kuehne-nagel.com/' },
    tags: ['Vue', 'Stencil', 'SCSS', 'WebComponents', 'Jest', 'Playwright', 'MPA'],
  },
  {
    date: new Date('2020-06-01'),
    caption: 'SMA',
    title: 'EnnexOS',
    description:
      'Monitoring and maintenance platform for photovoltaic systems. Expert software mixed with consumer requirements. Multiple cross-functional teams working on a shared codebase. I was part of the LDL team, responsible for the frontend of large scale solar power plants.',
    link: { label: 'EnnexOS', href: 'https://ennexos.sunnyportal.com/' },
    tags: ['NX', 'Angular', 'Material', 'Jest', 'SPA'],
  },
  {
    date: new Date('2019-09-01'),
    caption: 'BMW',
    title: 'BMW Charging',
    description:
      'Integration of BMW Charging in BMW electric vehicles. Account management via MQTT and integration of points of interests in the internal navigation systems with proprietary technologies based on NodeJS.',
    link: { label: 'BMW Charging', href: 'https://bmw-public-charging.com/web/de/bmw-de' },
    tags: ['MobX', 'NodeJS', 'Jest', 'MQTT'],
  },
  {
    date: new Date('2019-07-01'),
    caption: 'BMW',
    title: 'In-car Youtube Client Prototype',
    description:
      'One-and-done project focused on high velocity and rapid prototyping to explore in-car capabilities of a youtube client.',
    tags: ['Vue', 'Electron'],
  },
  {
    date: new Date('2019-01-01'),
    caption: 'KBA',
    title: 'Project for German Federal Motor Transport Authority',
    description:
      'Ticket machine built for potentially millions of users. Web technology meets embedded hardware like printers, credit card reader, NFC scanners, etc.',
    tags: ['Vue', 'SVG'],
  },
  {
    date: new Date('2018-03-01'),
    caption: 'Vestas',
    title: 'Windfarm Maintenance Software',
    description:
      'Windfarms provide a plethora of data for analysis and require constant maintenance by trained professionals. In this small team we built the necessary tools for that. I was responsible for app development with focus on the frontend.',
    tags: ['C#', 'WPF', 'Wireshark'],
  },
];
