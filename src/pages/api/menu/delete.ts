import type { APIRoute } from 'astro';
import { unlink } from 'node:fs/promises';
import { join } from 'node:path';

export const POST: APIRoute = async ({ request, redirect }) => {
    try {
        const formData = await request.formData();
        const slug = formData.get('slug')?.toString();

        if (!slug) {
            return new Response(JSON.stringify({ error: 'Missing slug' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Delete file
        const filePath = join(process.cwd(), 'src', 'content', 'menuItems', `${slug}.md`);
        await unlink(filePath);

        // Redirect back to dashboard
        return redirect('/dashboard');
    } catch (error) {
        console.error('Error deleting menu item:', error);
        return new Response(JSON.stringify({ error: 'Failed to delete item' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
