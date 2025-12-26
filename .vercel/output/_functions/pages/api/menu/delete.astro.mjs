import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const slug = formData.get("slug")?.toString();
    if (!slug) {
      return new Response(JSON.stringify({ error: "Missing slug" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const filePath = join(process.cwd(), "src", "content", "menuItems", `${slug}.md`);
    await unlink(filePath);
    return redirect("/dashboard");
  } catch (error) {
    console.error("Error deleting menu item:", error);
    return new Response(JSON.stringify({ error: "Failed to delete item" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
