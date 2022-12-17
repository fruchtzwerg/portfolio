import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import Icons from 'unplugin-icons/vite';
import { importDirectory, runSVGO } from '@iconify/tools';
import { visualizer } from 'rollup-plugin-visualizer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

import { AstroCompiler } from './unplugin/compilers/astro.mjs';

const __filname = fileURLToPath(import.meta.url);
const iconsDir = join(dirname(__filname), 'icons');

// https://astro.build/config
export default defineConfig({
  site: 'https://montazer.dev',
  outDir: '../../dist/apps/portfolio-astro',
  integrations: [
    mdx(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    tailwind(),
    sitemap({ canonicalURL: 'https://montazer.dev' }),
    robotsTxt({ host: true }),
    compress({ css: false }),
  ],
  vite: {
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

              runSVGO(svg);
              iconSet.fromSVG(name, svg);
            });

            return iconSet.export();
          },
        },
      }),
    ],
  },
});
