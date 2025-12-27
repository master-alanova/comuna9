// src/lib/auth.ts

import { any } from "astro:schema";

export interface User {
    username: string;
    role: 'admin';
}

// 1. Validar credenciales contra variables de entorno
export function validateCredentials(username: string, password: string): boolean {
    // Usamos import.meta.env para leer las variables configuradas en Vercel/Local
    const adminUser = import.meta.env.ADMIN_USERNAME;
    const adminPass = import.meta.env.ADMIN_PASSWORD;

    // Si no hay variables configuradas, el login falla por seguridad
    if (!adminUser || !adminPass) {
        console.error("Faltan configurar ADMIN_USERNAME o ADMIN_PASSWORD en las variables de entorno.");
        return false;
    }

    return username === adminUser && password === adminPass;
}

// 2. Crear la sesión (token simple en base64)
export function createSession(user: User): string {
    const sessionData = {
        user,
        createdAt: Date.now(),
    };
    // Codificamos los datos en base64 para crear un "token"
    return Buffer.from(JSON.stringify(sessionData)).toString('base64');
}

// 3. Validar si la petición tiene una sesión activa
export function isAuthenticated(request: Request): boolean {
    // Intentamos obtener la cookie 'session' de los headers
    const cookieHeader = request.headers.get("cookie");
    if (!cookieHeader) return false;

    const cookies = parseCookies(cookieHeader);
    const sessionToken = cookies['session'];

    if (!sessionToken) return false;

    const user = validateSessionToken(sessionToken);
    return user !== null;
}

// Función auxiliar para decodificar y validar el token
export function validateSessionToken(token: string): User | null {
    try {
        const sessionData = JSON.parse(Buffer.from(token, 'base64').toString());

        // Verificar expiración (24 horas)
        const maxAge = 24 * 60 * 60 * 1000;
        if (Date.now() - sessionData.createdAt > maxAge) {
            return null;
        }

        return sessionData.user;
    } catch (e) {
        return null;
    }
}

// Función auxiliar para leer cookies manualmente (útil en middleware o endpoints)
function parseCookies(cookieHeader: string): Record<string, string> {
    return cookieHeader.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        if (key && value) acc[key] = value;
        return acc;
    }, {} as Record<string, string>);
}