// @ts-check
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { importDirectory, runSVGO } from '@iconify/tools';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import { join, dirname } from 'path';
// import { visualizer } from 'rollup-plugin-visualizer';
import Icons from 'unplugin-icons/vite';
import { fileURLToPath } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import polyfills from './unplugin/polyfills.plugin.mjs';

const __filname = fileURLToPath(import.meta.url);
const __dirname = dirname(__filname);

const iconsDir = join(__dirname, 'src/assets/icons');
const tailwindConfigPath = fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://montazer.dev',

  // redirects: {
  //   '/slides/[...slug]/**': '/slides/[...slug]/',
  // },

  integrations: [
    svelte(),
    markdoc({ allowHTML: true }),
    mdx(),
    tailwind({
      applyBaseStyles: false,
      configFile: tailwindConfigPath,
    }),
    polyfills('@ungap/custom-elements'),
    sitemap({
      canonicalURL: 'https://montazer.dev',
      serialize(item) {
        item.lastmod = new Date();
        return item;
      },
    }),
    robotsTxt({ host: true }),
    // compress(),
  ],

  prefetch: true,

  vite: {
    ssr: { external: ['window'] },

    plugins: [
      viteStaticCopy({
        targets:
          process.env.NODE_ENV !== 'development'
            ? [{ src: '../slides/dist', dest: '.', rename: 'slides' }]
            : [{ src: '../slides/dist', dest: '.' }],
      }),

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
