import { defineCollection, z } from 'astro:content';

const menuItems = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        price: z.number().optional(),
        image: z.string().optional(),
        category: z.string(),
        order: z.number().default(0),
        published: z.boolean().default(true),
    }),
});

export const collections = {
    menuItems,
};
