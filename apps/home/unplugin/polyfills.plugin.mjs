import { readFileSync } from 'node:fs';

function getViteConfiguration(modules) {
  return {
    optimizeDeps: {
      include: modules,
    },
    ssr: {
      external: modules,
    },
  };
}

/** @type {(...modules: string[]) => import('astro').AstroIntegration} */
export default function (...modules) {
  return {
    name: '@astrojs/polyfills',
    hooks: {
      'astro:config:setup': ({ updateConfig, injectScript }) => {
        // Inject the necessary polyfills on every page (inlined for speed).
        // injectScript('head-inline', modules.map(module => `import '${module}';`).join(''));
        injectScript(
          'head-inline',
          modules
            .map(module =>
              readFileSync(new URL(`../node_modules/${module}/es.js`, import.meta.url), {
                encoding: 'utf-8',
              })
            )
            .join('')
        );
        // Update the vite configuration.
        updateConfig({
          vite: getViteConfiguration(modules),
        });
      },
      'astro:build:setup': ({ vite, target }) => {
        if (target === 'server') {
          if (!vite.ssr) {
            vite.ssr = {};
          }
          if (!vite.ssr.noExternal) {
            vite.ssr.noExternal = [];
          }
          if (Array.isArray(vite.ssr.noExternal)) {
            vite.ssr.noExternal.push(...modules);
          }
        }
      },
    },
  };
}
