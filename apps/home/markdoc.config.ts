import { component, defineMarkdocConfig } from '@astrojs/markdoc/config';
import prism from '@astrojs/markdoc/prism';
import Markdoc from '@markdoc/markdoc';
import { z } from 'astro/zod';

export default defineMarkdocConfig({
  extends: [prism()],
  nodes: {
    list: {
      transform: (node, config) => {
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        const { marker, ...attributes } = node.transformAttributes(config);
        const children = node.transformChildren(config);

        return new Markdoc.Tag(
          attributes.ordered ? 'ol' : 'ul',
          attributes,
          children.map((child, i) =>
            typeof child === 'object' && !Array.isArray(child) && child != null
              ? {
                  ...child,
                  attributes: {
                    ...(child.attributes as any),
                    class: `${
                      z.object({ class: z.string().optional() }).parse(child.attributes).class ?? ''
                    } index-[${i}]`.trim(),
                  },
                }
              : child,
          ),
        );
      },
      attributes: {
        ordered: { type: Boolean },
        marker: { type: String },
      },
    },

    link: {
      render: component('./src/components/markdoc/Anchor.astro'),
      attributes: {
        href: { type: String, required: true },
        target: { type: String },
      },
    },
  },

  tags: {
    withClass: {
      render: component('./src/components/markdoc/WithClass.astro'),
      attributes: {
        class: { type: String, required: true },
      },
    },
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
      attributes: {
        class: { type: String },
      },
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
