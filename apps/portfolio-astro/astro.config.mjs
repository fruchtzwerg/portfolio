import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import Icons from 'unplugin-icons/vite';
import { importDirectory, runSVGO } from '@iconify/tools';

import { visualizer } from 'rollup-plugin-visualizer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filname = fileURLToPath(import.meta.url);
const iconsDir = join(dirname(__filname), 'icons');

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/portfolio-astro',
  integrations: [solid(), tailwind(), mdx(), image({ serviceEntryPoint: '@astrojs/image/sharp' })],
  vite: {
    plugins: [
      visualizer(),
      Icons({
        compiler: 'solid',
        customCollections: {
          portfolio: async () => {
            const iconSet = await importDirectory(iconsDir, { prefix: 'my-icons' });

            iconSet.forEach(name => {
              const svg = iconSet.toSVG(name);
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
