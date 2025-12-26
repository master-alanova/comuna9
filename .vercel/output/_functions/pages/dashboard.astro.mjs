import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_08wKOCrp.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_94-uJav-.mjs';
import { g as getCollection } from '../chunks/_astro_content_DszhwgEZ.mjs';
import { f as formatPrice } from '../chunks/utils_ZC7l_emy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allMenuItems = await getCollection("menuItems");
  const sortedItems = allMenuItems.sort((a, b) => {
    if (a.data.category === b.data.category) {
      return a.data.order - b.data.order;
    }
    return a.data.category.localeCompare(b.data.category);
  });
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    if (formData.get("action") === "logout") {
      Astro2.cookies.delete("session", { path: "/" });
      return Astro2.redirect("/login", 302);
    }
  }
  const user = Astro2.locals.user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard - Comuna 9", "data-astro-cid-y55gmoyq": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard" data-astro-cid-y55gmoyq> <div class="dashboard-header" data-astro-cid-y55gmoyq> <div class="container" data-astro-cid-y55gmoyq> <div class="dashboard-nav" data-astro-cid-y55gmoyq> <a href="/" class="dashboard-logo" data-astro-cid-y55gmoyq>← COMUNA 9</a> <div class="dashboard-user" data-astro-cid-y55gmoyq> <span data-astro-cid-y55gmoyq>Hola, ${user.username}</span> <form method="POST" style="display: inline;" data-astro-cid-y55gmoyq> <input type="hidden" name="action" value="logout" data-astro-cid-y55gmoyq> <button type="submit" class="btn-logout" data-astro-cid-y55gmoyq>Salir</button> </form> </div> </div> </div> </div> <div class="dashboard-content" data-astro-cid-y55gmoyq> <div class="container" data-astro-cid-y55gmoyq> <div class="dashboard-title-bar" data-astro-cid-y55gmoyq> <h1 data-astro-cid-y55gmoyq>Gestión de Carta</h1> <a href="/dashboard/new" class="btn btn-primary" data-astro-cid-y55gmoyq>+ Agregar Nuevo Item</a> </div> <div class="menu-items-list" data-astro-cid-y55gmoyq> ${sortedItems.map((item) => renderTemplate`<div class="menu-item-row" data-astro-cid-y55gmoyq> <div class="item-info" data-astro-cid-y55gmoyq> <h3 data-astro-cid-y55gmoyq>${item.data.title}</h3> <p class="item-category" data-astro-cid-y55gmoyq> ${item.data.category} </p> ${item.data.description && renderTemplate`<p class="item-description" data-astro-cid-y55gmoyq> ${item.data.description} </p>`} </div> <div class="item-meta" data-astro-cid-y55gmoyq> ${item.data.price && renderTemplate`<span class="item-price" data-astro-cid-y55gmoyq> ${formatPrice(item.data.price)} </span>`} <span${addAttribute(["item-status", [
    item.data.published ? "published" : "draft"
  ]], "class:list")} data-astro-cid-y55gmoyq> ${item.data.published ? "Publicado" : "Borrador"} </span> </div> <div class="item-actions" data-astro-cid-y55gmoyq> <a${addAttribute(`/dashboard/edit/${item.slug}`, "href")} class="btn btn-small" data-astro-cid-y55gmoyq>
Editar
</a> <form method="POST"${addAttribute(`/api/menu/delete`, "action")} style="display: inline-block;" data-astro-cid-y55gmoyq> <input type="hidden" name="slug"${addAttribute(item.slug, "value")} data-astro-cid-y55gmoyq> <button type="submit" class="btn btn-small btn-danger" onclick="return confirm('¿Estás seguro de eliminar este item?')" data-astro-cid-y55gmoyq>
Eliminar
</button> </form> </div> </div>`)} </div> </div> </div> </main> ` })} `;
}, "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/dashboard/index.astro", void 0);

const $$file = "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
