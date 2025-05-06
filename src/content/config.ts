import { defineCollection, z } from 'astro:content';

// Define the blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('HosDev Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Define the features collection schema
const featuresCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    status: z.enum(['available', 'coming-soon']),
    icon: z.string().optional(),
    order: z.number().default(999),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
  'features': featuresCollection,
};