import { defineMiddleware } from 'astro:middleware';
import { validateSession } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
    const { url, cookies, redirect } = context;

    // Check if accessing dashboard routes
    if (url.pathname.startsWith('/dashboard')) {
        const sessionToken = cookies.get('session')?.value;
        const user = validateSession(sessionToken);

        if (!user) {
            return redirect('/login');
        }

        // Attach user to locals for use in pages
        context.locals.user = user;
    }

    return next();
});
