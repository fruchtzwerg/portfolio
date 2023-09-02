import { component, defineMarkdocConfig } from '@astrojs/markdoc/config';
import prism from '@astrojs/markdoc/prism';

export default defineMarkdocConfig({
  extends: [prism()],
  nodes: {
    link: {
      render: component('./src/components/markdoc/Anchor.astro'),
      attributes: {
        href: { type: String, required: true },
        target: { type: String },
      },
    },
  },
  tags: {
    summary: {
      render: component('./src/components/markdoc/Summary.astro'),
      attributes: {
        text: { type: String },
      },
    },
    leadin: {
      render: component('./src/components/markdoc/LeadIn.astro'),
      attributes: {
        slug: { type: String },
        image: { type: String },
        alt: { type: String },
      },
    },
    badges: {
      render: component('./src/components/markdoc/Badges.astro'),
      children: ['list'],
    },
    link: {
      render: component('./src/components/markdoc/Link.astro'),
      attributes: {
        href: { type: String, required: true },
        text: { type: String, required: true },
        target: { type: String },
        groupHover: { type: Boolean },
      },
    },
    hover: {
      render: component('./src/components/markdoc/Hover.astro'),
      attributes: {
        href: { type: String },
        target: { type: String },
        class: { type: String },
      },
    },
    collapse: {
      render: component('./src/components/markdoc/Collapse.astro'),
      attributes: {
        title: { type: String, required: true },
        open: { type: Boolean, default: true },
      },
    },
    info: {
      render: component('./src/components/markdoc/Info.astro'),
      attributes: {
        type: { type: String, matches: ['info', 'warning', 'danger', 'success'] },
      },
    },
  },
});
