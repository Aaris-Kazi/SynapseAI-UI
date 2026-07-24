import config from "./Config";
import { createGet, createPost } from "./WebClient";

const ACCESS_TOKEN_KEY = "access_token";

export const setAccessToken = (token?: string) => {
    if (token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    } else {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
};

export const getAccessToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const checkHealth = async () => {

    try {
        const resp = await createGet('/health');
        if (resp.status === config.OK_STATUS) {
            console.log(resp.data);
        } else {
            console.log("Service not working!")
        }
    } catch (error) {
        console.error('Health check failed:', error);
    }
}


export const loginService = async (username: string, password: string): Promise<Record<string, unknown>> => {

    try {
        const payload = {
            "username": username,
            "password": password
        }
        const resp = await createPost(config.AUTH + '/v1/login', payload, config.HEADER);
        if (resp.status === config.OK_STATUS) {
            const data = resp.data as Record<string, string>;
            const token = data["access-token"] 
            console.log(token);
            
            if (token) {
                setAccessToken(token);
            }
        } else {
            console.log("Service not working!")
        }
        return resp.data
    } catch (error) {
        console.error('`LoginService` failed due to :: ', error);
        throw error;
    }
}
