import { defineCollection, z } from 'astro:content';

const reports = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        client: z.string().optional(),
        date: z.coerce.date(),
        author: z.string().default('Felipe'),
        tags: z.array(z.string()).default(['Reporte']),
    }),
});

export const collections = {
    'reports': reports,
};
