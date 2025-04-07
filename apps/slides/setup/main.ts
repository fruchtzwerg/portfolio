import { defineAppSetup } from '@slidev/types';
import InlineSvg from 'vue-inline-svg';

export default defineAppSetup(({ app }) => {
  app.component('inline-svg', InlineSvg);
});
