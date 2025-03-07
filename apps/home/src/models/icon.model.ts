import type { ComponentConstructorOptions } from 'svelte';

// Derive type from icon import
import type LogoAstro from '~icons/devicons/astro';
type SVG = typeof LogoAstro;

export type Icon =
  | SVG
  | (svelteHTML.HTMLAttributes & ComponentConstructorOptions<svelteHTML.IntrinsicElements>);
