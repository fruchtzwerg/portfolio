import type { Technology } from '../models/technology.model';

import LogoTailwind from '~icons/logos/tailwindcss-icon';
import LogoAngular from '~icons/logos/angular-icon';
import LogoVue from '~icons/logos/vue';
import LogoAstro from '~icons/portfolio/astro';

import LogoJest from '~icons/logos/jest';
import LogoPlaywright from '~icons/logos/playwright';

import LogoNx from '~icons/logos/nx';
import LogoWebpack from '~icons/logos/webpack';
import LogoVite from '~icons/logos/vitejs';
import LogoRollup from '~icons/logos/rollupjs';

import LogoGit from '~icons/logos/git-icon';
import LogoAtlassian from '~icons/logos/atlassian';
import LogoGitlab from '~icons/logos/gitlab';
import LogoJenkins from '~icons/vscode-icons/file-type-jenkins';

export const frameworks: Technology[] = [
  {
    title: 'Angular',
    icon: LogoAngular,
    description: 'Fully featured web-framework to build complex, scalable, modular web-apps.',
    tags: ['RxJS', 'Material', 'Jest'],
    skill: 10,
    href: 'https://angular.io/',
  },
  {
    title: 'Vue',
    icon: LogoVue,
    description: 'Lightweight and flexible frontend framework. Excels at data visualization.',
    tags: ['v2', 'v3', 'Pinia', 'Vuex', 'Vite'],
    skill: 10,
    href: 'https://vuejs.org/',
  },
  {
    title: 'Astro',
    icon: LogoAstro,
    description:
      'Meta-framework to build statically generated or server-side rendered web apps with existing technologies such as Vue, React, SolidJS and more.',
    tags: ['Vue', 'React', 'Solid'],
    skill: 8,
    href: 'https://astro.build/',
  },
  {
    title: 'Tailwind',
    icon: LogoTailwind,
    description:
      'Class-based CSS framework. Equally useful for quick prototyping as well as building production apps. Makes theming and responsiveness a breaze.',
    tags: ['Daisy UI', 'Themes', 'Plugins'],
    skill: 9,
    href: 'https://tailwindcss.com/',
  },
];

export const testRunners: Technology[] = [
  {
    title: 'Jest',
    icon: LogoJest,
    description: 'Performant test runner for unit and integration testing.',
    tags: ['Angular', 'Vue', 'StencilJS'],
    skill: 10,
    href: 'https://jestjs.io/',
  },
  {
    title: 'Playwright',
    icon: LogoPlaywright,
    description: 'Modern E2E and browser automation framework by Microsoft.',
    tags: ['E2E', 'Visual testing', 'Cross-domain'],
    skill: 8,
    href: 'https://jestjs.io/',
  },
];

export const bundlers: Technology[] = [
  {
    title: 'NX',
    icon: LogoNx,
    description: 'Technology agnostic tooling to manage monorepos.',
    tags: ['Monorepos', 'Generators', 'Linting'],
    skill: 9,
    href: 'https://nx.dev/',
  },
  {
    title: 'Webpack',
    icon: LogoWebpack,
    description: 'Modular and fully configurable JavaScript bundler.',
    tags: ['Angular', 'Vue', 'Vanilla'],
    skill: 8,
    href: 'https://webpack.js.org/',
  },
  {
    title: 'Vite',
    icon: LogoVite,
    description: 'Modern JavaScript bundler optimized for performance.',
    tags: ['Vue', 'Astro', 'Iconify'],
    skill: 8,
    href: 'https://vitejs.dev/',
  },
  {
    title: 'Rollup',
    icon: LogoRollup,
    description: 'Zero-configuration JavaScript bundler.',
    tags: ['StencilJS', 'WebComponents'],
    skill: 8,
    href: 'https://rollupjs.org/guide/en/',
  },
];

export const tools: Technology[] = [
  {
    title: 'Git',
    icon: LogoGit,
    description: 'Distributed version control system.',
    tags: ['Reviews', 'Monorepos', 'Trunkbased', 'Gitflow'],
    skill: 9,
    href: 'https://git-scm.com/',
  },
  {
    title: 'Atlassian Suite',
    icon: LogoAtlassian,
    description: 'Suite of project management, engineering and documentation tools.',
    tags: ['Bitbucket', 'Jira', 'Confluence'],
    skill: 8,
    href: 'https://www.atlassian.com/',
  },
  {
    title: 'Gitlab',
    icon: LogoGitlab,
    description: 'Open source alternative to Github and Bitbucket.',
    tags: ['Gitlab-CI'],
    skill: 8,
    href: 'https://about.gitlab.com/',
  },
  {
    title: 'Jenkins',
    icon: LogoJenkins,
    description: 'Pluggable software automation service.',
    tags: ['Declarative', 'Scripted'],
    skill: 6,
    href: 'https://www.jenkins.io/',
  },
];
