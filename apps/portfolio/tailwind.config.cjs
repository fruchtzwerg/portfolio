const {
  createGlobPatternsForDependencies,
} = require('@nrwl/workspace/src/utilities/generate-globs.js');
const grid = require('@savvywombat/tailwindcss-grid-areas');
const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme.js');
const plugin = require('tailwindcss/plugin.js');

module.exports = import('../../libs/tailwind/src/lib/themes.mjs').then(({ ARCANE }) => {
  /** @type {import('tailwindcss').Config} */
  return {
    content: [
      join(__dirname, 'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'),
      ...createGlobPatternsForDependencies(__dirname),
    ],
    darkMode: ['class', '[data-theme=arcane]'],
    theme: {
      screens: {
        xxs: '320px',
        xs: '490px',
        sm: '720px',
        ...defaultTheme.screens,
        '3xl': '1800px',
      },
      extend: {
        supports: {
          chrome: '-webkit-tap-highlight-color:black',
          firefox: 'not_(-webkit-text-security:circle)',
          safari: '(not(-webkit-tap-highlight-color:black))_and_(-webkit-text-security:circle)',
          'safari-not':
            '(-webkit-tap-highlight-color:black)_or_(not_(-webkit-text-security:circle))',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        colors: () => ({
          highlight: {
            50: '#E9E5FF',
            100: '#C1B0FF',
            200: '#AD96FF',
            300: '#987BFF',
            400: '#8968EB',
            500: '#765BC6',
            600: '#6C55B3',
            700: '#624EA0',
            800: '#59488E',
            900: '#4F417B',
          },
        }),
      },
    },
    plugins: [
      typography,
      grid,
      daisyui,
      plugin(function ({ addVariant }) {
        addVariant('arcane', '[data-theme=arcane] &');
        addVariant('winter', '[data-theme=winter] &');
      }),
      plugin(function ({ addComponents }) {
        addComponents({
          '.prose :where(ul.reset-list)': {
            paddingLeft: 0,
            marginBottom: 0,
            listStyleType: 'none',
          },
          '.prose :where(ul.reset-list) > li': {
            paddingLeft: 0,
            marginTop: 0,
            marginBottom: 0,
          },
        });
      }),
    ],
    daisyui: {
      themes: ['winter', ARCANE],
      darkTheme: 'arcane',
    },
  };
});
