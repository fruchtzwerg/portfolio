import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { importDirectory, runSVGO } from '@iconify/tools';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { join, dirname } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import Icons from 'unplugin-icons/vite';
import { fileURLToPath } from 'url';

import { AstroCompiler } from './unplugin/compilers/astro.mjs';
import polyfills from './unplugin/polyfills.plugin.mjs';

const __filname = fileURLToPath(import.meta.url);
const __dirname = dirname(__filname);
const iconsDir = join(__dirname, 'icons');

// https://astro.build/config
export default defineConfig({
  site: 'https://montazer.dev',
  outDir: '../../dist/apps/portfolio',
  integrations: [
    svelte(),
    mdx(),
    tailwind({ config: { applyBaseStyles: false } }),
    polyfills('@ungap/custom-elements'),
    image({ serviceEntryPoint: '@astrojs/image/sharp', cacheDir: '.sharp' }),
    sitemap({ canonicalURL: 'https://montazer.dev' }),
    robotsTxt({ host: true }),
    compress({ css: false }),
  ],
  vite: {
    ssr: { external: 'window' },
    plugins: [
      visualizer(),
      Icons({
        compiler: AstroCompiler,
        customCollections: {
          portfolio: async () => {
            const iconSet = await importDirectory(iconsDir, { prefix: 'my-icons' });

            iconSet.forEach(name => {
              const svg = iconSet.toSVG(name);

              if (!svg) return;

              runSVGO(svg, {
                plugins: [
                  { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
                ],
              });
              iconSet.fromSVG(name, svg);
            });

            return iconSet.export();
          },
        },
      }),
    ],
  },
});
