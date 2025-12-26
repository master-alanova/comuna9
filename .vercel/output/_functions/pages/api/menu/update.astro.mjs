import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const slug = formData.get("slug")?.toString();
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const price = formData.get("price")?.toString();
    const category = formData.get("category")?.toString();
    const order = formData.get("order")?.toString();
    const image = formData.get("image")?.toString();
    const content = formData.get("content")?.toString();
    const published = formData.get("published") === "true";
    if (!slug || !title || !category) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const frontmatter = {
      title,
      ...description && { description },
      ...price && { price: Number(price) },
      ...image && { image },
      category,
      order: order ? parseInt(order) : 0,
      published
    };
    const mdContent = `---
${Object.entries(frontmatter).map(([key, value]) => {
      if (typeof value === "string") {
        return `${key}: "${value}"`;
      }
      return `${key}: ${value}`;
    }).join("\n")}
---

${content || ""}
`;
    const filePath = join(process.cwd(), "src", "content", "menuItems", `${slug}.md`);
    await writeFile(filePath, mdContent, "utf-8");
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error updating menu item:", error);
    return new Response(JSON.stringify({ error: "Failed to update item" }), {
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
