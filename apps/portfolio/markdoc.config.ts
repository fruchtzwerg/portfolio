import { component, defineMarkdocConfig } from '@astrojs/markdoc/config';
import prism from '@astrojs/markdoc/prism';

export default defineMarkdocConfig({
  extends: [prism()],
  tags: {
    summary: {
      render: component('./src/components/markdoc/Summary.astro'),
      attributes: { text: { type: String } },
    },
    leadin: {
      render: component('./src/components/markdoc/LeadIn.astro'),
    },
  },
});
