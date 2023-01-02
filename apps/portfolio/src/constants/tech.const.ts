import type { Technology } from '../models/technology.model';

import LogoAngular from '~icons/logos/angular-icon';
import LogoAtlassian from '~icons/logos/atlassian';
import LogoGit from '~icons/logos/git-icon';
import LogoGitlab from '~icons/logos/gitlab';
import LogoJest from '~icons/logos/jest';
import LogoNx from '~icons/logos/nx';
import LogoPlaywright from '~icons/logos/playwright';
import LogoRollup from '~icons/logos/rollupjs';
import LogoTailwind from '~icons/logos/tailwindcss-icon';
import LogoVite from '~icons/logos/vitejs';
import LogoVue from '~icons/logos/vue';
import LogoWebpack from '~icons/logos/webpack';
import LogoAstro from '~icons/portfolio/astro';
import LogoJenkins from '~icons/vscode-icons/file-type-jenkins';

export const frameworks: Technology[] = [
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
    keywords: ['v2', 'v3', 'Pinia', 'Vuex', 'Vite'],
    tags: ['vue'],
    skill: 5,
    href: 'https://vuejs.org/',
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
    id: 'f385',
    title: 'Tailwind',
    icon: LogoTailwind,
    description:
      'Class-based CSS framework. Equally useful for quick prototyping as well as building production apps. Makes theming and responsiveness a breaze.',
    keywords: ['Daisy UI', 'Themes', 'Plugins'],
    tags: ['tailwind'],
    skill: 4,
    href: 'https://tailwindcss.com/',
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
    href: 'https://jestjs.io/',
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
    skill: 4,
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
