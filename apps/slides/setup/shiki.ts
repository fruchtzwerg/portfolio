import { defineShikiSetup, type ShikiSetupReturn } from '@slidev/types';

import theme from '../../../libs/syntax/shiki.json';

export default defineShikiSetup(async () => {
  return {
    themes: {
      dark: theme,
      light: 'min-light',
    },
  } satisfies ShikiSetupReturn;
});
