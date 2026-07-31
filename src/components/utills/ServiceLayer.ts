import type { AxiosRequestHeaders } from "axios";
import config from "./Config";
import { createGet, createGetHeaders, createPost } from "./WebClient";


export const setAccessToken = (token?: string) => {
    if (token) {
        localStorage.setItem(config.ACCESS_TOKEN_KEY, token);
    } else {
        localStorage.removeItem(config.ACCESS_TOKEN_KEY);
    }
};

export const getAccessToken = (): string | null => {
    return localStorage.getItem(config.ACCESS_TOKEN_KEY);
};

export const checkHealth = async () => {

    try {
        const resp = await createGet('/health');
        if (resp.status === config.OK_STATUS) {
            console.log(resp.data);
        } else {
            console.log("Service not working!")
            localStorage.removeItem(config.ACCESS_TOKEN_KEY);
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
            const token = data[config.ACCESS_TOKEN] 
            if (token) {
                setAccessToken(token);
            }
        } else {
            console.log("Login Service not working!")
        }
        return resp.data
    } catch (error) {
        console.error('`LoginService` failed due to :: ', error);
        throw error;
    }
}



export const registerService = async (firstname: string, lastname: string, username: string, email: string, password: string): Promise<Record<string, unknown>> => {

    try {
        const payload = {
            "firstName": firstname,
            "lastName": lastname,
            "username": username,
            "email": email,
            "password": password
        }
        const resp = await createPost(config.AUTH + '/v1/register', payload, config.HEADER);
        if (resp.status === config.OK_STATUS) {
            const data = resp.data as Record<string, string>;
            const token = data[config.ACCESS_TOKEN] 
            
            if (token) {
                setAccessToken(token);
            }
        } else {
            console.log("RegisterService not working!")
        }
        return resp.data
    } catch (error) {
        console.error('`LoginService` failed due to :: ', error);
        throw error;
    }
}


export const googleLoginService = async (token: string): Promise<Record<string, unknown>> => {

    try {
        const payload = {
            "token": token
        }
        const resp = await createPost(config.AUTH + '/v1/googleLogin', payload, config.HEADER);
        if (resp.status === config.OK_STATUS) {
            const data = resp.data as Record<string, string>;
            const token = data[config.ACCESS_TOKEN] 
            
            if (token) {
                setAccessToken(token);
            }
        } else {
            console.log("GoogleLoginService not working!")
        }
        return resp.data
    } catch (error) {
        console.error('`LoginService` failed due to :: ', error);
        throw error;
    }
}


export const chatService = async (message: string): Promise<Record<string, unknown>> => {

    try {
        const payload = {
            "message": message
        }

        const headers = {
            "Content-Type": "application/json",
            "Authorization" : config.BEARER + getAccessToken()
        }
        const resp = await createPost('/api/v1/chat', payload, headers);
        if (resp.status !== config.OK_STATUS) {
            console.log("ChatService not working! due to " + resp.data)
        }
        return resp.data
    } catch (error) {
        console.error('`LoginService` failed due to :: ', error);
        throw error;
    }
}

export const getUserNameService = async (): Promise<Record<string, unknown>> => {

    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization" : config.BEARER + getAccessToken()
        }
        const resp = await createGetHeaders('/api/v1/userDetails', headers as AxiosRequestHeaders);
        if (resp.status !== config.OK_STATUS) {
            localStorage.removeItem(config.ACCESS_TOKEN_KEY);
            console.log("UserNameService not working! due to " + resp.data)
        }
        return resp.data
    } catch (error) {
        localStorage.removeItem(config.ACCESS_TOKEN_KEY);
        console.error('`UserNameService` failed due to :: ', error);
        throw error;
    }
}
