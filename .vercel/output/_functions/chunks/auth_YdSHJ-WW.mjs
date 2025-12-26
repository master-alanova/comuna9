const DEMO_CREDENTIALS = {
  username: "admin",
  password: "comuna9admin"
  // In production: use bcrypt
};
function validateCredentials(username, password) {
  return username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password;
}
function createSession(user) {
  const sessionData = {
    user,
    createdAt: Date.now()
  };
  return Buffer.from(JSON.stringify(sessionData)).toString("base64");
}
function validateSession(sessionToken) {
  if (!sessionToken) return null;
  try {
    const sessionData = JSON.parse(Buffer.from(sessionToken, "base64").toString());
    const maxAge = 24 * 60 * 60 * 1e3;
    if (Date.now() - sessionData.createdAt > maxAge) {
      return null;
    }
    return sessionData.user;
  } catch {
    return null;
  }
}

export { createSession, validateCredentials, validateSession };
