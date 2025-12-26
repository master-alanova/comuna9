import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ZMbJ8bXS.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_G2FyrSsu.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_JUOGqaDs.mjs';
import { $ as $$MenuCard } from '../chunks/MenuCard_Cgw6nfez.mjs';
import { s as supabase } from '../chunks/supabase_DC4BOCeF.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Carta = createComponent(async ($$result, $$props, $$slots) => {
  const { data: menuItems } = await supabase.from("menu_items").select("*").eq("published", true).order("order", { ascending: true });
  const allMenuItems = menuItems || [];
  const itemsByCategory = allMenuItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});
  const categoryOrder = [
    "Desayunos & Brunch",
    "Cafeter\xEDa de Especialidad",
    "Platos Principales",
    "Postres",
    "Bebidas"
  ];
  const sortedCategories = Object.keys(itemsByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuestra Carta - Comuna 9", "description": "Descubr\xED nuestra carta de comida noble con ingredientes de estaci\xF3n", "data-astro-cid-f2vctvlz": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-f2vctvlz": true })} ${maybeRenderHead()}<main class="carta-page" data-astro-cid-f2vctvlz> <!-- Hero Section --> <section class="carta-hero" data-astro-cid-f2vctvlz> <div class="container" data-astro-cid-f2vctvlz> <h1 class="carta-title" data-astro-cid-f2vctvlz>Descubrí Nuestra Carta</h1> <p class="carta-subtitle" data-astro-cid-f2vctvlz>
Cada plato cuenta una historia. Ingredientes nobles, de
                    estación, preparados con respeto y pasión.
</p> </div> </section> <!-- Menu Sections --> <section class="carta-menu" data-astro-cid-f2vctvlz> <div class="container" data-astro-cid-f2vctvlz> ${sortedCategories.map((category) => renderTemplate`<div class="menu-category"${addAttribute(category.toLowerCase().replace(/\s+/g, "-"), "id")} data-astro-cid-f2vctvlz> <h2 class="category-title" data-astro-cid-f2vctvlz>${category}</h2> <div class="menu-grid" data-astro-cid-f2vctvlz> ${itemsByCategory[category].map((item) => renderTemplate`${renderComponent($$result2, "MenuCard", $$MenuCard, { "title": item.title, "description": item.description, "price": item.price, "image": item.image, "data-astro-cid-f2vctvlz": true })}`)} </div> </div>`)} </div> </section> <!-- CTA Section --> <section class="carta-cta" data-astro-cid-f2vctvlz> <div class="container" data-astro-cid-f2vctvlz> <h2 data-astro-cid-f2vctvlz>¿Listo para vivir la experiencia?</h2> <p data-astro-cid-f2vctvlz>
Reservá tu mesa y descubrí el verdadero significado de
                    comida noble
</p> <a href="/#reserva" class="btn btn-primary" data-astro-cid-f2vctvlz>Reservar Mesa</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-f2vctvlz": true })} ` })} `;
}, "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/carta.astro", void 0);

const $$file = "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/carta.astro";
const $$url = "/carta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Carta,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
