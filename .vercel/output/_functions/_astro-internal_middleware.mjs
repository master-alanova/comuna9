import { d as defineMiddleware, s as sequence } from './chunks/index_CNjpRfn_.mjs';
import { validateSession } from './chunks/auth_YdSHJ-WW.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CZ4XIX0V.mjs';
import 'piccolore';
import './chunks/astro/server_ZMbJ8bXS.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  if (url.pathname.startsWith("/dashboard")) {
    const sessionToken = cookies.get("session")?.value;
    const user = validateSession(sessionToken);
    if (!user) {
      return redirect("/login");
    }
    context.locals.user = user;
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
