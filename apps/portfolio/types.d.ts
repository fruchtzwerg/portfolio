import type { MDXInstance } from 'astro';
import type { AstroComponentFactory } from 'astro/dist/runtime/server';

type Tagname = keyof astroHTML.JSX.DefinedIntrinsicElements;
type MDX<T extends Record<string, any> = Record<string, any>> = MDXInstance<T> & {
  components: Record<string, AstroComponentFactory>;
};
