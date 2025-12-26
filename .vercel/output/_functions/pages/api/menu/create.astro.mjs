import { s as supabase } from '../../../chunks/supabase_DC4BOCeF.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const title = formData.get("title")?.toString();
    const slug = title?.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "") || "item-" + Date.now();
    const newItem = {
      slug,
      title,
      description: formData.get("description")?.toString(),
      price: Number(formData.get("price")),
      category: formData.get("category")?.toString(),
      order: Number(formData.get("order")),
      image: formData.get("image")?.toString(),
      published: formData.get("published") === "true"
    };
    const { error } = await supabase.from("menu_items").insert(newItem);
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true, slug }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating item" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
