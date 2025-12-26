import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const title = formData.get('title')?.toString();

        // Generamos un "slug" (identificador) limpio
        const slug = title?.toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '') || 'item-' + Date.now();

        const newItem = {
            slug,
            title: title,
            description: formData.get('description')?.toString(),
            price: Number(formData.get('price')),
            category: formData.get('category')?.toString(),
            order: Number(formData.get('order')),
            image: formData.get('image')?.toString(),
            published: formData.get('published') === 'true',
        };

        const { error } = await supabase.from('menu_items').insert(newItem);

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true, slug }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error creating item' }), { status: 500 });
    }
};