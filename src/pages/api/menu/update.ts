import type { APIRoute } from 'astro';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();

        const slug = formData.get('slug')?.toString();
        const title = formData.get('title')?.toString();
        const description = formData.get('description')?.toString();
        const price = formData.get('price')?.toString();
        const category = formData.get('category')?.toString();
        const order = formData.get('order')?.toString();
        const image = formData.get('image')?.toString();
        const content = formData.get('content')?.toString();
        const published = formData.get('published') === 'true';

        if (!slug || !title || !category) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Create frontmatter
        const frontmatter = {
            title,
            ...(description && { description }),
            ...(price && { price: Number(price) }),
            ...(image && { image }),
            category,
            order: order ? parseInt(order) : 0,
            published,
        };

        // Create markdown content
        const mdContent = `---
${Object.entries(frontmatter)
                .map(([key, value]) => {
                    if (typeof value === 'string') {
                        return `${key}: "${value}"`;
                    }
                    return `${key}: ${value}`;
                })
                .join('\n')}
---

${content || ''}
`;

        // Write file (overwrite existing)
        const filePath = join(process.cwd(), 'src', 'content', 'menuItems', `${slug}.md`);
        await writeFile(filePath, mdContent, 'utf-8');

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error updating menu item:', error);
        return new Response(JSON.stringify({ error: 'Failed to update item' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
