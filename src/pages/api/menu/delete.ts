import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const slug = formData.get('slug')?.toString();

    if (!slug) return new Response("Missing slug", { status: 400 });

    const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('slug', slug);

    if (error) return new Response("Error deleting", { status: 500 });

    return redirect('/dashboard');
};