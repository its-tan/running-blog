import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['vi', 'en']),
    // Nối bài tiếng Việt với bản dịch tiếng Anh tương ứng (dùng chung 1 id cho 2 bài)
    translationId: z.string(),
    tags: z.array(z.string()).default([]),
    coverImage: image().optional(),
    coverAlt: z.string().optional(),
    watch: z.string().optional(),
    activityType: z.enum(['easy-run', 'tempo', 'long-run', 'race', 'gear-review']).optional(),
    distanceKm: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
