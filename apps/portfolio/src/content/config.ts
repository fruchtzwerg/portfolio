import { z, defineCollection } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    prio: z.number(),
  }),
});

const experience = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    firstParagraph: z.string(),
    technologies: z.string().array(),
    order: z.number().int(),
    href: z.string().url(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    createdAt: z.date(),
    title: z.string(),
    tags: z.string().array(),
    summary: z.string(),
    image: z.string().url(),
  }),
});

export const collections = {
  about,
  apps,
  experience,
  blog,
};
