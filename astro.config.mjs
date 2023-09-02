// import image from '@astrojs/image';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { importDirectory, runSVGO } from '@iconify/tools';
import { defineConfig } from 'astro/config';
// import compress from 'astro-compress';
// import robotsTxt from 'astro-robots-txt';
import { join, dirname } from 'path';
// import { visualizer } from 'rollup-plugin-visualizer';
import Icons from 'unplugin-icons/vite';
import { fileURLToPath } from 'url';

import polyfills from './unplugin/polyfills.plugin.mjs';

const __filname = fileURLToPath(import.meta.url);
const __dirname = dirname(__filname);

const iconsDir = join(__dirname, 'src/assets/icons');
const tailwindConfigPath = fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://montazer.dev',
  outDir: '../../dist/apps/portfolio',
  integrations: [
    svelte(),
    markdoc({ allowHTML: true }),
    mdx(),
    tailwind({
      applyBaseStyles: false,
      configFile: tailwindConfigPath,
    }),
    polyfills('@ungap/custom-elements'),
    // image({ serviceEntryPoint: '@astrojs/image/sharp', cacheDir: '.sharp' }),
    sitemap({ canonicalURL: 'https://montazer.dev' }),
    // robotsTxt({ host: true }),
    // compress({ CSS: false }),
    prefetch(),
  ],
  vite: {
    ssr: { external: 'window' },
    plugins: [
      // visualizer(),
      Icons({
        compiler: 'svelte',
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
