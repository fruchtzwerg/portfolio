import { ScullyConfig } from '@scullyio/scully';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';

const FlashPrevention = getFlashPreventionPlugin();
/** this loads the default render plugin, remove when switching to something else. */
// import '@scullyio/scully-plugin-playwright';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './apps/portfolio/src',
  projectName: 'portfolio',
  // add spsModulePath when using de Scully Platform Server,
  // spsModulePath: 'apps/portfolio/src/app/app.sps.module.ts'
  outDir: './dist/static',
  routes: {
    '/': {
      type: FlashPrevention,
      postRenderers: [FlashPrevention],
    },
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};
