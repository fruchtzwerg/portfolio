import { writable } from 'svelte/store';

const mediaDark = matchMedia('(prefers-color-scheme: dark)');

export const isDark = writable(
  localStorage.theme === 'arcane' || (!('theme' in localStorage) && mediaDark.matches)
);

isDark.subscribe(
  value =>
    (localStorage.theme = document.documentElement.dataset.theme = value ? 'arcane' : 'winter')
);

mediaDark.onchange = e => isDark.set(e.matches);
