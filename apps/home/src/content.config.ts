import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/[^_]*.{md,mdx,mdoc}' }),
  schema: z.object({
    prio: z.number(),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/[^_]*.{md,mdx,mdoc}' }),
  schema: z.object({
    date: z.date(),
    caption: z.string(),
    tags: z.string().array(),
    nda: z.boolean().optional(),
    href: z.string().url().optional(),
    target: z.string().optional(),
  }),
});

const apps = defineCollection({
  loader: glob({ base: './src/content/apps', pattern: '**/[^_]*.{md,mdx,mdoc}' }),
  schema: z.object({
    title: z.string(),
    firstParagraph: z.string(),
    technologies: z.string().array(),
    order: z.number().int(),
    href: z.string().url(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx,mdoc}' }),
  schema: ({ image }) =>
    z.object({
      createdAt: z.date(),
      title: z.string(),
      tags: z.string().array(),
      summary: z.string(),
      img: image().optional(),
      alt: z.string().optional(),
    }),
});

export const collections = {
  about,
  apps,
  experience,
  blog,
};
