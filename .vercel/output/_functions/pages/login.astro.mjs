import { c as createComponent, g as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ZMbJ8bXS.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_G2FyrSsu.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const errors = {
    invalid: "Credenciales inv\xE1lidas"
  };
  let error = null;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const username = formData.get("username")?.toString();
      const password = formData.get("password")?.toString();
      if (!username || !password) {
        error = "Por favor completa todos los campos";
      } else {
        const { validateCredentials, createSession } = await import('../chunks/auth_YdSHJ-WW.mjs');
        if (validateCredentials(username, password)) {
          const session = createSession({ username, role: "admin" });
          Astro2.cookies.set("session", session, {
            path: "/",
            httpOnly: true,
            sameSite: "lax",
            maxAge: 86400
            // 24 hours
          });
          return Astro2.redirect("/dashboard", 302);
        } else {
          error = errors.invalid;
        }
      }
    } catch (e) {
      console.error("Login error:", e);
      error = "Error al procesar la solicitud";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login - Comuna 9 Dashboard", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="login-page" data-astro-cid-sgpqyurt> <div class="login-container" data-astro-cid-sgpqyurt> <div class="login-header" data-astro-cid-sgpqyurt> <a href="/" class="login-logo" data-astro-cid-sgpqyurt>COMUNA 9</a> <h1 data-astro-cid-sgpqyurt>Dashboard de Administración</h1> <p data-astro-cid-sgpqyurt>Gestiona el contenido de tu carta</p> </div> <form method="POST" class="login-form" data-astro-cid-sgpqyurt> ${error && renderTemplate`<div class="error-message" role="alert" data-astro-cid-sgpqyurt> ${error} </div>`} <div class="form-group" data-astro-cid-sgpqyurt> <label for="username" data-astro-cid-sgpqyurt>Usuario</label> <input type="text" id="username" name="username" required autocomplete="username" autofocus data-astro-cid-sgpqyurt> </div> <div class="form-group" data-astro-cid-sgpqyurt> <label for="password" data-astro-cid-sgpqyurt>Contraseña</label> <input type="password" id="password" name="password" required autocomplete="current-password" data-astro-cid-sgpqyurt> </div> <button type="submit" class="btn btn-primary btn-block" data-astro-cid-sgpqyurt>
Ingresar
</button> </form> <div class="login-footer" data-astro-cid-sgpqyurt> <p data-astro-cid-sgpqyurt>Credenciales de demo:</p> <p data-astro-cid-sgpqyurt> <strong data-astro-cid-sgpqyurt>Usuario:</strong> admin | <strong data-astro-cid-sgpqyurt>Contraseña:</strong> comuna9admin
</p> </div> </div> </main> ` })} `;
}, "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/login.astro", void 0);

const $$file = "C:/Users/alan_/Documents/AlaNova/Projects/2025-09_Comuna9/prod/comuna9/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
