import { c as createComponent, a as createAstro, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_08wKOCrp.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_94-uJav-.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  const categories = [
    "Desayunos & Brunch",
    "Cafeter\xEDa de Especialidad",
    "Platos Principales",
    "Postres",
    "Bebidas"
  ];
  let error = null;
  let success = false;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const response = await fetch(new URL("/api/menu/create", Astro2.url), {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        success = true;
      } else {
        error = "Error al crear el item";
      }
    } catch (e) {
      error = "Error al procesar la solicitud";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nuevo Item - Dashboard", "data-astro-cid-qkjl6s6s": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard" data-astro-cid-qkjl6s6s> <div class="dashboard-header" data-astro-cid-qkjl6s6s> <div class="container" data-astro-cid-qkjl6s6s> <a href="/dashboard" class="dashboard-logo" data-astro-cid-qkjl6s6s>← Volver al Dashboard</a> </div> </div> <div class="dashboard-content" data-astro-cid-qkjl6s6s> <div class="container" data-astro-cid-qkjl6s6s> <h1 data-astro-cid-qkjl6s6s>Agregar Nuevo Item al Menú</h1> ${error && renderTemplate`<div class="error-message" role="alert" data-astro-cid-qkjl6s6s> ${error} </div>`} ${success && renderTemplate`<div class="success-message" role="alert" data-astro-cid-qkjl6s6s>
Item creado exitosamente. Redirigiendo...
</div>`} <form method="POST" class="menu-form" enctype="multipart/form-data" data-astro-cid-qkjl6s6s> <div class="form-grid" data-astro-cid-qkjl6s6s> <div class="form-group" data-astro-cid-qkjl6s6s> <label for="title" data-astro-cid-qkjl6s6s>Título *</label> <input type="text" id="title" name="title" required data-astro-cid-qkjl6s6s> </div> <div class="form-group" data-astro-cid-qkjl6s6s> <label for="category" data-astro-cid-qkjl6s6s>Categoría *</label> <select id="category" name="category" required data-astro-cid-qkjl6s6s> <option value="" data-astro-cid-qkjl6s6s>Seleccionar categoría</option> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")} data-astro-cid-qkjl6s6s>${cat}</option>`)} </select> </div> <div class="form-group" data-astro-cid-qkjl6s6s> <label for="price" data-astro-cid-qkjl6s6s>Precio</label> <input type="number" id="price" name="price" min="0" step="any" placeholder="3500" data-astro-cid-qkjl6s6s> </div> <div class="form-group" data-astro-cid-qkjl6s6s> <label for="order" data-astro-cid-qkjl6s6s>Orden de visualización</label> <input type="number" id="order" name="order" value="0" min="0" data-astro-cid-qkjl6s6s> </div> </div> <div class="form-group" data-astro-cid-qkjl6s6s> <label for="description" data-astro-cid-qkjl6s6s>Descripción</label> <textarea id="description" name="description" rows="3" data-astro-cid-qkjl6s6s></textarea> </div> <div class="form-group" data-astro-cid-qkjl6s6s> <label for="content" data-astro-cid-qkjl6s6s>Contenido adicional (Markdown)</label> <textarea id="content" name="content" rows="5" placeholder="Puedes usar Markdown aquí para más detalles..." data-astro-cid-qkjl6s6s></textarea> </div> <div class="form-group" data-astro-cid-qkjl6s6s> <label for="image" data-astro-cid-qkjl6s6s>URL de imagen</label> <input type="text" id="image" name="image" placeholder="/images/menu-item.jpg" data-astro-cid-qkjl6s6s> </div> <div class="form-group" data-astro-cid-qkjl6s6s> <label class="checkbox-label" data-astro-cid-qkjl6s6s> <input type="checkbox" name="published" value="true" checked data-astro-cid-qkjl6s6s>
Publicar inmediatamente
</label> </div> <div class="form-actions" data-astro-cid-qkjl6s6s> <a href="/dashboard" class="btn" data-astro-cid-qkjl6s6s>Cancelar</a> <button type="submit" class="btn btn-primary" data-astro-cid-qkjl6s6s>Guardar Item</button> </div> </form> </div> </div> </main> ` })}  ${renderScript($$result, "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/dashboard/new.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/dashboard/new.astro", void 0);

const $$file = "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/dashboard/new.astro";
const $$url = "/dashboard/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$New,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
