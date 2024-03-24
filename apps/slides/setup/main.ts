import { defineAppSetup } from '@slidev/types';
import InlineSvg from 'vue-inline-svg';

export default defineAppSetup(({ app, router }) => {
  app.component('inline-svg', InlineSvg);
});
