import { s as supabase } from '../../../chunks/supabase_DC4BOCeF.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const slug = formData.get("slug")?.toString();
    if (!slug) return new Response(JSON.stringify({ error: "Missing slug" }), { status: 400 });
    const updates = {
      title: formData.get("title")?.toString(),
      description: formData.get("description")?.toString(),
      price: Number(formData.get("price")),
      category: formData.get("category")?.toString(),
      order: Number(formData.get("order")),
      image: formData.get("image")?.toString(),
      published: formData.get("published") === "true"
    };
    const { error } = await supabase.from("menu_items").update(updates).eq("slug", slug);
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error updating item" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
