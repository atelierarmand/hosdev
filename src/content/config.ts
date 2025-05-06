// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Define project types
const projectSchema = z.enum([
  'hotel-management',
  'digital-concierge',
  'menucraft',
  'bookwise'
]);

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    // Add project field to associate blog posts with projects
    project: projectSchema.optional(),
  })
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  })
});

// Define projects collection
const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: projectSchema,
    description: z.string(),
    status: z.enum(['online', 'offline']).default('online'),
  })
});

export const collections = {
  'blog': blogCollection,
  'pages': pagesCollection,
  'projects': projectsCollection,
};