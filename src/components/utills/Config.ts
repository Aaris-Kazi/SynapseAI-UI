const config = {
    BASE_URL: import.meta.env.VITE_SYNAPSE_URL,
    HEADER: { "Content-Type": "application/json" },
    TIMEOUT: import.meta.env.VITE_TIMEOUT,
    OK_STATUS: 200,
    AUTH: "/api/auth",
    AFTER_LOGIN_PATH: '/chat',
    BEFORE_LOGIN_PATH: '/login',
    ACCESS_TOKEN: "access-token",
    AUTHORIZATION: "Authorization",
    BEARER: "Bearer ",
    ACCESS_TOKEN_KEY: "access_token"
};

export default config;