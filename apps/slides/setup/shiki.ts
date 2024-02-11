import { defineShikiSetup } from '@slidev/types';

import theme from '../../../libs/syntax/shiki.json';

export default defineShikiSetup(async () => {
  return {
    themes: {
      dark: theme,
      light: 'min-light',
    },
  };
});
