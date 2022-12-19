const {
  createGlobPatternsForDependencies,
} = require('@nrwl/workspace/src/utilities/generate-globs.js');
const grid = require('@savvywombat/tailwindcss-grid-areas');
const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme.js');
const plugin = require('tailwindcss/plugin.js');

const { ARCANE } = require('../../libs/tailwind/src/lib/themes.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
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
    fontFamily: {
      default: defaultTheme.fontFamily.sans,
      sans: ['Hind', ...defaultTheme.fontFamily.sans],
      serif: ['Arvo', ...defaultTheme.fontFamily.serif],
      mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { fontFamily: 'Exo', fontWeight: 600, fontSize: '2.75rem' },
            h2: { fontFamily: 'Arvo' },
            h3: { fontFamily: 'Quicksand' },
            h4: {
              fontFamily: 'Quicksand',
              lineHeight: '2rem',
              fontWeight: 600,
              fontSize: '1.25rem',
            },
            p: { fontFamily: 'Hind' },
            'ul.reset-list': {
              paddingLeft: 0,
              marginTop: 0,
              marginBottom: 0,
              listStyleType: 'none',
              '& > li:not(.badge)': {
                paddingLeft: 0,
              },
              '& > li': {
                marginTop: 0,
                marginBottom: 0,
              },
            },
            li: { fontFamily: 'Hind' },
            small: { fontFamily: 'Lato' },
            a: { fontFamily: 'Inconsolata' },
          },
        },
      },
      supports: {
        chrome: '-webkit-tap-highlight-color:black',
        firefox: 'not_(-webkit-text-security:circle)',
        safari: '(not(-webkit-tap-highlight-color:black))_and_(-webkit-text-security:circle)',
        'safari-not': '(-webkit-tap-highlight-color:black)_or_(not_(-webkit-text-security:circle))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
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
      },
      keyframes: {
        'pulse-full': { '50%': { opacity: 0 } },
      },
      animation: {
        'pulse-full': defaultTheme.animation.pulse.replace('pulse', 'pulse-full'),
      },
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
    plugin(function ({ addComponents, addUtilities }) {
      addUtilities({
        '.cursor': {
          '@apply flex items-center': {},
          '&:after': {
            '@apply animate-pulse-full': {},
            content: '""',
            width: '1.25rem',
            height: '0.8125em',
            marginLeft: '0.125rem',
            backgroundColor: 'currentColor',
            display: 'inline-block',
          },
        },
        '.gradient': {
          '@apply bg-gradient-to-br from-primary to-accent dark:from-primary dark:to-indigo-500':
            {},
        },
        '.bg-gradient': {
          '@apply bg-gradient-to-b from-base-100/50 to-base-200/30': {},
        },
      });
      addComponents({
        '.menu-item': {
          '@apply btn btn-circle btn-ghost border-none capitalize font-normal font-[Arvo] text-xs xs:text-sm w-fit px-2 xxs:w-20 xs:w-28 min-h-0 h-10 xs:h-12 flex justify-center items-center transition-all':
            {},
          '&.active': {
            '@apply gradient text-primary-content font-semibold': {},
          },
        },
        '.badge': {
          fontFamily: 'Quicksand',
        },
      });
    }),
  ],
  daisyui: {
    themes: ['winter', ARCANE],
    darkTheme: 'arcane',
  },
};
