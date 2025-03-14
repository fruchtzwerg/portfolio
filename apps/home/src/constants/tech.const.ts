import type { Technology } from '../models/technology.model';

import LogoAngular from '~icons/devicon/angular';
import LogoAstro from '~icons/devicon/astro';
import LogoExpress from '~icons/devicon/express';
import LogoGit from '~icons/devicon/git';
import LogoGitlab from '~icons/devicon/gitlab';
import LogoJenkins from '~icons/devicon/jenkins';
import LogoPlaywright from '~icons/devicon/playwright';
import LogoReact from '~icons/devicon/react';
import LogoRollup from '~icons/devicon/rollup';
import LogoSocketIO from '~icons/devicon/socketio';
import LogoStencil from '~icons/devicon/stenciljs';
import LogoTailwind from '~icons/devicon/tailwindcss';
import LogoTrpc from '~icons/devicon/trpc';
import LogoVite from '~icons/devicon/vitejs';
import LogoVue from '~icons/devicon/vuejs';
import LogoWebpack from '~icons/devicon/webpack';
import LogoAtlassian from '~icons/logos/atlassian';
import LogoJest from '~icons/logos/jest';
import LogoNest from '~icons/logos/nestjs';
import LogoNx from '~icons/logos/nx';

export const frontend: Technology[] = [
  {
    id: 'e85e',
    title: 'Angular',
    icon: LogoAngular,
    description: 'Fully featured web-framework to build complex, scalable, modular web-apps.',
    keywords: ['RxJS', 'Material', 'Jest'],
    tags: ['angular'],
    skill: 5,
    href: 'https://angular.io/',
  },
  {
    id: '1e21',
    title: 'Vue',
    icon: LogoVue,
    description: 'Lightweight and flexible frontend framework. Excels at data visualization.',
    keywords: ['v2', 'v3', 'Pinia', 'Vuex', 'Vite', 'Vitest'],
    tags: ['vue'],
    skill: 5,
    href: 'https://vuejs.org/',
  },
  {
    id: '0b66',
    title: 'React',
    icon: LogoReact,
    description: 'Vercatile and widely supported frontend framework with large community.',
    keywords: ['v18', 'TanStack', 'React Router'],
    tags: ['react'],
    skill: 4,
    href: '',
  },
  {
    id: '68ba',
    title: 'Astro',
    icon: LogoAstro,
    description:
      'Meta-framework to build statically generated or server-side rendered web apps with existing technologies such as Vue, React, SolidJS and more.',
    keywords: ['Vue', 'React', 'Solid'],
    tags: ['astro'],
    skill: 4,
    href: 'https://astro.build/',
  },
  {
    id: 'e2bb',
    title: 'Stencil',
    icon: LogoStencil,
    description:
      'A compiler that generates highly optimized, framework-agnostic web components for Design Systems.',
    keywords: ['WebComponents', 'Angular', 'Vue', 'React', 'Design Systems'],
    tags: ['stencil', 'designsystem'],
    skill: 5,
    href: 'https://stenciljs.com/',
  },
  {
    id: 'f385',
    title: 'Tailwind',
    icon: LogoTailwind,
    description:
      'Class-based CSS framework. Equally useful for quick prototyping as well as building production apps. Makes theming and responsiveness a breaze.',
    keywords: ['Shadcn', 'Daisy UI', 'Themes', 'Plugins'],
    tags: ['tailwind'],
    skill: 5,
    href: 'https://tailwindcss.com/',
  },
];

export const backend: Technology[] = [
  {
    id: '8a04',
    title: 'Express',
    icon: LogoExpress,
    description: 'Minimal and flexible Node.js web application framework.',
    keywords: ['Clean Architecture', 'Auth', 'Middlewares'],
    tags: ['express'],
    skill: 5,
    href: 'https://expressjs.com/',
  },
  {
    id: '5b36',
    title: 'NestJS',
    icon: LogoNest,
    description:
      'A progressive, TypeScript-based Node.js framework. Built-in support for dependency injection and microservices.',
    keywords: [
      'Microservices',
      'Magestic Monolyth',
      'Plugins',
      'E2E Typesafety',
      'Prisma',
      'Drizzle',
      'vendorless',
    ],
    tags: ['express', 'nest'],
    skill: 5,
    href: 'https://nestjs.com/',
  },
  {
    id: '9dc9',
    title: 'tRPC',
    icon: LogoTrpc,
    description:
      'Type-safe library for building APIs in TypeScript for seamless communication between frontend and backend with end-to-end type safety.',
    keywords: ['E2E Type-Safety', 'Client', 'Server'],
    tags: ['trpc'],
    skill: 4,
    href: 'https://trpc.io/',
  },
  {
    id: '4ead',
    title: 'Socket.IO',
    icon: LogoSocketIO,
    description:
      'Real-time, bidirectional communication client and server, using WebSockets with fallback options for older browsers.',
    keywords: ['WebSockets', 'CQRS', 'Express', 'NestJS'],
    tags: ['socketio', 'express', 'nest'],
    skill: 4,
    href: 'https://socket.io/',
  },
];

export const testRunners: Technology[] = [
  {
    id: '9530',
    title: 'Jest',
    icon: LogoJest,
    description: 'Performant test runner for unit and integration testing.',
    keywords: ['Angular', 'Vue', 'StencilJS'],
    tags: ['jest'],
    skill: 5,
    href: 'https://jestjs.io/',
  },
  {
    id: 'f120',
    title: 'Playwright',
    icon: LogoPlaywright,
    description: 'Modern E2E and browser automation framework by Microsoft.',
    keywords: ['E2E', 'Visual testing', 'Cross-domain'],
    tags: ['playwright'],
    skill: 4,
    href: 'https://playwright.dev/',
  },
];

export const bundlers: Technology[] = [
  {
    id: 'd665',
    title: 'NX',
    icon: LogoNx,
    description: 'Technology agnostic tooling to manage monorepos.',
    keywords: ['Monorepos', 'Generators', 'Linting'],
    tags: ['nx'],
    skill: 5,
    href: 'https://nx.dev/',
  },
  {
    id: 'f27e',
    title: 'Webpack',
    icon: LogoWebpack,
    description: 'Modular and fully configurable JavaScript bundler.',
    keywords: ['Angular', 'Vue', 'Vanilla'],
    tags: ['webpack'],
    skill: 4,
    href: 'https://webpack.js.org/',
  },
  {
    id: 'a52c',
    title: 'Vite',
    icon: LogoVite,
    description: 'Modern JavaScript bundler optimized for performance.',
    keywords: ['Vue', 'Astro', 'Iconify'],
    tags: ['vite'],
    skill: 5,
    href: 'https://vitejs.dev/',
  },
  {
    id: 'e81b',
    title: 'Rollup',
    icon: LogoRollup,
    description: 'Zero-configuration JavaScript bundler.',
    keywords: ['StencilJS', 'WebComponents'],
    tags: [],
    skill: 4,
    href: 'https://rollupjs.org/guide/en/',
  },
];

export const tools: Technology[] = [
  {
    id: '0bef',
    title: 'Git',
    icon: LogoGit,
    description: 'Distributed version control system.',
    keywords: ['Reviews', 'Monorepos', 'Trunkbased', 'Gitflow'],
    tags: [],
    skill: 5,
    href: 'https://git-scm.com/',
  },
  {
    id: 'a080',
    title: 'Atlassian Suite',
    icon: LogoAtlassian,
    description: 'Suite of project management, engineering and documentation tools.',
    keywords: ['Bitbucket', 'Jira', 'Confluence'],
    tags: ['atlassian'],
    skill: 4,
    href: 'https://www.atlassian.com/',
  },
  {
    id: '30bf',
    title: 'Gitlab',
    icon: LogoGitlab,
    description: 'Open source alternative to Github and Bitbucket.',
    keywords: ['Gitlab-CI'],
    tags: ['gitlab'],
    skill: 4,
    href: 'https://about.gitlab.com/',
  },
  {
    id: '3f17',
    title: 'Jenkins',
    icon: LogoJenkins,
    description: 'Pluggable software automation service.',
    keywords: ['Declarative', 'Scripted'],
    tags: ['jenkins'],
    skill: 3,
    href: 'https://www.jenkins.io/',
  },
];
