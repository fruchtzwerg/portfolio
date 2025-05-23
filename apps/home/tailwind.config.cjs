const grid = require('@savvywombat/tailwindcss-grid-areas');
const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme.js');
const plugin = require('tailwindcss/plugin.js');

const { ARCANE } = require('../../tools/tailwind/themes.cjs');
const themes = require('../../tools/tailwind/themes.plugin.cjs');

const staggerClasses = new Array(25).fill(0).map((_, i) => `index-[${i}]`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,mdx,mdoc,svelte,ts,tsx,vue}'),
  ],
  darkMode: ['class', '[data-theme=arcane]'],
  safelist: [
    ...staggerClasses,
    'max-xxs:flex',
    'xxs:max-sm:flex',
    'sm:max-md:flex',
    'md:max-lg:flex',
    'lg:flex',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '490px',
      // sm: '720px',
      ...defaultTheme.screens,
      '3xl': '1800px',
    },
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        default: defaultTheme.fontFamily.sans,
        sans: ['Hind', ...defaultTheme.fontFamily.sans],
        serif: ['Arvo', ...defaultTheme.fontFamily.serif],
        mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
        heading: ['Exo', ...defaultTheme.fontFamily.sans],
        exo: ['Exo', ...defaultTheme.fontFamily.sans],
        hind: ['Hind', ...defaultTheme.fontFamily.sans],
        arvo: ['Arvo', ...defaultTheme.fontFamily.serif],
        inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.mono],
        'victor-mono': ['Victor Mono', ...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              '@apply font-heading text-5xl font-extralight leading-normal inline-flex gap-2 items-center':
                {},
            },
            h2: {
              '@apply font-heading text-4xl font-extrabold inline-flex gap-2 items-center': {},
            },
            h3: { '@apply font-heading text-3xl font-bold inline-flex gap-2 items-center': {} },
            h4: { '@apply font-heading text-2xl font-bold inline-flex gap-2 items-center': {} },
            h5: { '@apply font-heading text-xl font-bold inline-flex gap-2 items-center': {} },
            h6: { '@apply font-heading text-lg font-bold inline-flex gap-2 items-center': {} },
            p: { '@apply font-sans': {} },
            li: { '@apply font-sans': {} },
            '.reset-list': {
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
            a: { '@apply font-inconsolata': {} },
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
        'fade-grow': {
          '0%': { opacity: 0, transform: 'scale(.66)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'fade-pulse': {
          '0%': { opacity: 0, transform: 'scale(.66)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
          '70%': { opacity: 1, transform: 'scale(.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-x': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'scale-y': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'pulse-full': defaultTheme.animation.pulse.replace('pulse', 'pulse-full'),
        'fade-grow': 'fade-grow 1s both',
        'fade-pulse': 'fade-pulse 1s both',
        'scale-x': 'scale-x 1s both',
        'scale-y': 'scale-y 1s both',
      },
    },
  },
  plugins: [
    typography,
    grid,
    daisyui,
    require('tailwindcss-animated'),
    themes({ themes: ['arcane', 'winter'] }),
    plugin(({ addVariant, matchUtilities }) => {
      matchUtilities({
        marker: value => ({
          '@apply pl-4': {},
          '& > li': {
            [`@apply text-lg list-['${value}'] pl-[1ch]`]: {},
          },
        }),
        'animate-ease-fn': value => ({ animationTimingFunction: value }),
        index: value => ({ '--index': value }),
        'transition-stagger': value => ({
          '& > *': {
            transitionDelay: `calc(${value} * var(--index))`,
          },
        }),
        'animate-stagger': value => ({
          '& > *': {
            animationDelay: `calc(${value} * var(--index))`,
          },
        }),
      });
      addVariant('selected', '&.selected');
      // .tooltip-parent has no hovered (open) tooltip child
      addVariant('no-tooltip', '.tooltip-list:not(:has(.tooltip:hover)) > &');
    }),
  ],
  daisyui: {
    themes: ['winter', ARCANE],
    darkTheme: 'arcane',
  },
};
