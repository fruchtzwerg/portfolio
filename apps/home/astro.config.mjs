// @ts-check
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
// import { visualizer } from 'rollup-plugin-visualizer';
import Icons from 'unplugin-icons/vite';
import { fileURLToPath } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import polyfills from './unplugin/polyfills.plugin.mjs';

const tailwindConfigPath = fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url));

console.info(`🔧 Building for ${process.env.NODE_ENV} environment`);

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
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    robotsTxt({ host: true }),
    // TODO: fix image compression
    ...[
      process.env.VERCEL_ENV === 'production'
        ? [compress({ Image: false, JavaScript: false })]
        : [],
    ],
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

      Icons({ compiler: 'svelte' }),
    ],
  },
});
