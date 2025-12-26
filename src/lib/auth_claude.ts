// Session management optimized for Vercel
// Uses environment variables for credentials

export interface User {
    username: string;
    role: 'admin';
}

// Load credentials from environment variables
const getCredentials = () => {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
        throw new Error(
            'Missing required environment variables: ADMIN_USERNAME and/or ADMIN_PASSWORD'
        );
    }

    return { username, password };
};

// Session secret for token generation
const getSessionSecret = () => {
    const secret = process.env.SESSION_SECRET;

    if (!secret) {
        console.warn('SESSION_SECRET not set, using default (NOT RECOMMENDED for production)');
        return 'default-secret-change-in-production';
    }

    return secret;
};

export function validateCredentials(username: string, password: string): boolean {
    try {
        const credentials = getCredentials();

        // Constant-time comparison to prevent timing attacks
        const usernameMatch = constantTimeCompare(username, credentials.username);
        const passwordMatch = constantTimeCompare(password, credentials.password);

        return usernameMatch && passwordMatch;
    } catch (error) {
        console.error('Credentials validation error:', error);
        return false;
    }
}

// Constant-time string comparison to prevent timing attacks
function constantTimeCompare(a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    }

    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }

    return result === 0;
}

export function createSession(user: User): string {
    const sessionData = {
        user,
        createdAt: Date.now(),
        secret: getSessionSecret(),
    };

    return Buffer.from(JSON.stringify(sessionData)).toString('base64');
}

export function validateSession(sessionToken: string | undefined): User | null {
    if (!sessionToken) return null;

    try {
        const sessionData = JSON.parse(Buffer.from(sessionToken, 'base64').toString());

        // Validate session secret
        if (sessionData.secret !== getSessionSecret()) {
            return null;
        }

        // Check if session is less than 24 hours old
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        if (Date.now() - sessionData.createdAt > maxAge) {
            return null;
        }

        return sessionData.user;
    } catch (error) {
        console.error('Session validation error:', error);
        return null;
    }
}

// Utility function to check if environment is properly configured
export function checkEnvironmentConfiguration(): {
    configured: boolean;
    missing: string[];
} {
    const required = ['ADMIN_USERNAME', 'ADMIN_PASSWORD'];
    const missing = required.filter(key => !process.env[key]);

    return {
        configured: missing.length === 0,
        missing,
    };
}