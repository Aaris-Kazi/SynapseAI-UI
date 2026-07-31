const config = {
    BASE_URL:"http://192.168.0.105:8088",
    // BASE_URL:"http://localhost:8080",
    HEADER: { "Content-Type": "application/json" },
    TIMEOUT: 30000,
    OK_STATUS: 200,
    AUTH: "/api/auth",
    AFTER_LOGIN_PATH: '/chat',
    ACCESS_TOKEN: "access-token",
    AUTHORIZATION: "Authorization",
    BEARER: "Bearer ",
    ACCESS_TOKEN_KEY: "access_token"
};

export default config;