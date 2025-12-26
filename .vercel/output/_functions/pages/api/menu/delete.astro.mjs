import { s as supabase } from '../../../chunks/supabase_DC4BOCeF.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const slug = formData.get("slug")?.toString();
  if (!slug) return new Response("Missing slug", { status: 400 });
  const { error } = await supabase.from("menu_items").delete().eq("slug", slug);
  if (error) return new Response("Error deleting", { status: 500 });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
