import { c as createComponent, g as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_ZMbJ8bXS.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_G2FyrSsu.mjs';
import { s as supabase } from '../../../chunks/supabase_DC4BOCeF.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/dashboard");
  let error = null;
  let success = false;
  const categories = [
    "Desayunos & Brunch",
    "Cafetería de Especialidad",
    "Platos Principales",
    "Postres",
    "Bebidas"
  ];
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      formData.append("slug", slug);
      const response = await fetch(new URL("/api/menu/update", Astro2.url), {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        success = true;
      } else {
        const data = await response.json();
        error = data.error || "Error al actualizar el item";
      }
    } catch (e) {
      error = "Error al procesar la solicitud";
      console.error(e);
    }
  }
  const { data: item, error: dbError } = await supabase.from("menu_items").select("*").eq("slug", slug).single();
  if (dbError || !item) {
    console.error("Item no encontrado:", dbError);
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Editar ${item.title} - Dashboard`, "data-astro-cid-potan6zt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="dashboard" data-astro-cid-potan6zt> <div class="dashboard-header" data-astro-cid-potan6zt> <div class="container" data-astro-cid-potan6zt> <a href="/dashboard" class="dashboard-logo" data-astro-cid-potan6zt>← Volver al Dashboard</a> </div> </div> <div class="dashboard-content" data-astro-cid-potan6zt> <div class="container" data-astro-cid-potan6zt> <h1 data-astro-cid-potan6zt>Editar Item: ${item.title}</h1> ${error && renderTemplate`<div class="error-message" role="alert" data-astro-cid-potan6zt> ${error} </div>`} ${success && renderTemplate`<div class="success-message" role="alert" data-astro-cid-potan6zt>
Item actualizado exitosamente!
</div>`} <form method="POST" class="menu-form" data-astro-cid-potan6zt> <div class="form-grid" data-astro-cid-potan6zt> <div class="form-group" data-astro-cid-potan6zt> <label for="title" data-astro-cid-potan6zt>Título *</label> <input type="text" id="title" name="title"${addAttribute(item.title, "value")} required data-astro-cid-potan6zt> </div> <div class="form-group" data-astro-cid-potan6zt> <label for="category" data-astro-cid-potan6zt>Categoría *</label> <select id="category" name="category" required data-astro-cid-potan6zt> ${categories.map((cat) => renderTemplate`<option${addAttribute(cat, "value")}${addAttribute(cat === item.category, "selected")} data-astro-cid-potan6zt> ${cat} </option>`)} </select> </div> <div class="form-group" data-astro-cid-potan6zt> <label for="price" data-astro-cid-potan6zt>Precio</label> <input type="number" id="price" name="price"${addAttribute(item.price || "", "value")} min="0" step="any" placeholder="3500" data-astro-cid-potan6zt> </div> <div class="form-group" data-astro-cid-potan6zt> <label for="order" data-astro-cid-potan6zt>Orden de visualización</label> <input type="number" id="order" name="order"${addAttribute(item.order, "value")} min="0" data-astro-cid-potan6zt> </div> </div> <div class="form-group" data-astro-cid-potan6zt> <label for="description" data-astro-cid-potan6zt>Descripción</label> <textarea id="description" name="description" rows="3" data-astro-cid-potan6zt>${item.description || ""}</textarea> </div> <!-- TODO: Implementar contenido adicional 
                    <div class="form-group">
                        <label for="content"
                            >Contenido adicional (Markdown)</label
                        >
                        <textarea id="content" name="content" rows="5"
                            >{content}</textarea
                        >
                    </div>
                    --> <div class="form-group" data-astro-cid-potan6zt> <label for="image" data-astro-cid-potan6zt>URL de imagen</label> <input type="text" id="image" name="image"${addAttribute(item.image || "", "value")} placeholder="/images/menu-item.jpg" data-astro-cid-potan6zt> </div> <div class="form-group" data-astro-cid-potan6zt> <label class="checkbox-label" data-astro-cid-potan6zt> <input type="checkbox" name="published" value="true"${addAttribute(item.published, "checked")} data-astro-cid-potan6zt>
Publicado
</label> </div> <div class="form-actions" data-astro-cid-potan6zt> <a href="/dashboard" class="btn" data-astro-cid-potan6zt>Cancelar</a> <button type="submit" class="btn btn-primary" data-astro-cid-potan6zt>Guardar Cambios</button> </div> </form> </div> </div> </main> ` })} `;
}, "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/dashboard/edit/[slug].astro", void 0);
const $$file = "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/dashboard/edit/[slug].astro";
const $$url = "/dashboard/edit/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
