const { createGlobPatternsForDependencies } = require('@nx/js/src/utils/generate-globs.js');
const grid = require('@savvywombat/tailwindcss-grid-areas');
const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme.js');
const plugin = require('tailwindcss/plugin.js');

const { ARCANE } = require('../../libs/tailwind/src/lib/themes.cjs');

const themes = require('./tools/tailwind/themes.plugin.cjs');

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
      quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
      'victor-mono': ['Victor Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { fontFamily: 'Exo', fontWeight: 200, fontSize: '2.75rem' },
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
      boxShadow: {
        even: '0 0 8px rgb(0 0 0 / 0.1), 0 0 6px rgb(0 0 0 / 0.1)',
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
    themes({ themes: ['arcane', 'winter'] }),
    plugin(({ addVariant }) => {
      addVariant('selected', '&.selected');
    }),
  ],
  daisyui: {
    themes: ['winter', ARCANE],
    darkTheme: 'arcane',
  },
};
