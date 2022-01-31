import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    name: 'Prepare for upload',
    icon: 'prefup',
    href: 'https://ffmpeg.montazer.dev',
    description:
      'Shrink your screenrecordings to a digestable size before attaching to an email or a ticket - completely client-side without compromising your data.',
    keywords: ['serverless', 'zero persistance', 'react'],
    technologies: [
      { name: 'nextjs', icon: 'nextjs', purpose: 'Frontend' },
      { name: 'WebAssembly', icon: 'wasm', purpose: 'Client–Side Processing' },
      { name: 'ffmpeg', icon: 'ffmpeg', purpose: 'Video Transcoding' },
    ],
  },
  {
    name: 'Scrum Poker',
    icon: 'poker',
    href: 'https://poker.montazer.dev',
    description:
      'Serverless implementation of scrum poker. Uses firebase and github actions as a backend.',
    keywords: ['JAMStack', 'serverless', 'github actions'],
    technologies: [
      { name: 'Scully', icon: 'scully', purpose: 'Server–Side Rendering' },
      { name: 'Firebase', icon: 'firebase', purpose: 'Realtime Database' },
      { name: 'Github', icon: 'github', purpose: 'Cronjob' },
    ],
  },
];
