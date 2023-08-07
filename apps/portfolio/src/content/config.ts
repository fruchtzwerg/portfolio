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
  }),
});

export const collections = {
  about,
  experience,
};
