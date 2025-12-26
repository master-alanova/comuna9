import { c as createComponent, g as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_ZMbJ8bXS.mjs';
import 'piccolore';
import 'clsx';
import { f as formatPrice } from './utils_ZC7l_emy.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$MenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuCard;
  const { title, description, price, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="menu-card" data-astro-cid-h5dgdvfa> ${image && renderTemplate`<div class="menu-card-image" data-astro-cid-h5dgdvfa> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-h5dgdvfa> </div>`} <div class="menu-card-content" data-astro-cid-h5dgdvfa> <div class="menu-card-header" data-astro-cid-h5dgdvfa> <h3 class="menu-card-title" data-astro-cid-h5dgdvfa>${title}</h3> ${price && renderTemplate`<span class="menu-card-price" data-astro-cid-h5dgdvfa>${formatPrice(price)}</span>`} </div> ${description && renderTemplate`<p class="menu-card-description" data-astro-cid-h5dgdvfa>${description}</p>`} </div> </div> `;
}, "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/components/MenuCard.astro", void 0);

export { $$MenuCard as $ };
