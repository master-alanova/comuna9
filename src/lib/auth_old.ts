// Simple session management for demo purposes
// For production, use proper session management with Redis, database, or external auth service

export interface User {
    username: string;
    role: 'admin';
}

// Demo credentials - In production, use environment variables and proper password hashing
const DEMO_CREDENTIALS = {
    username: 'admin',
    password: 'comuna9admin', // In production: use bcrypt
};

export function validateCredentials(username: string, password: string): boolean {
    return username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password;
}

export function createSession(user: User): string {
    // In production: use proper session tokens with expiration
    const sessionData = {
        user,
        createdAt: Date.now(),
    };
    return Buffer.from(JSON.stringify(sessionData)).toString('base64');
}

export function validateSession(sessionToken: string | undefined): User | null {
    if (!sessionToken) return null;

    try {
        const sessionData = JSON.parse(Buffer.from(sessionToken, 'base64').toString());

        // Check if session is less than 24 hours old
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        if (Date.now() - sessionData.createdAt > maxAge) {
            return null;
        }

        return sessionData.user;
    } catch {
        return null;
    }
}
