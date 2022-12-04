const { createGlobPatternsForDependencies } = require('@nxtensions/astro/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

const { ARCANE } = require('../../libs/tailwind/src/lib/themes');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: ['class', '[data-theme=arcane]'],
  theme: {
    extend: {
      colors: ({ theme }) => ({
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
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('daisyui'),
    plugin(function ({ addVariant }) {
      addVariant('arcane', '[data-theme=arcane] &');
      addVariant('winter', '[data-theme=winter] &');
    }),
  ],
  daisyui: {
    themes: ['winter', ARCANE],
    darkTheme: 'arcane',
  },
};
