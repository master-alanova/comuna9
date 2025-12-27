import { defineMiddleware } from 'astro:middleware';
// 1. CAMBIO AQUÍ: Importamos el nombre nuevo
import { validateSessionToken } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
    const { url, cookies, redirect } = context;

    // Check if accessing dashboard routes
    if (url.pathname.startsWith('/dashboard')) {
        const sessionToken = cookies.get('session')?.value;

        // 2. VALIDACIÓN: Si no hay token, redirigir directo (evita pasar undefined)
        if (!sessionToken) {
            return redirect('/login');
        }

        // 3. CAMBIO AQUÍ: Usamos la nueva función
        const user = validateSessionToken(sessionToken);

        if (!user) {
            return redirect('/login');
        }

        // Attach user to locals for use in pages
        context.locals.user = user;
    }

    return next();
});