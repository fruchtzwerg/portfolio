import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import prism from '@astrojs/markdoc/prism';

export default defineMarkdocConfig({
  extends: [prism()],
  // tags: {
  //   link: {
  //     render: component('./src/components/buttons/Link.astro'),
  //     attributes: { href: { type: String } },
  //   },
  // },
});
