import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// כאן נשים את ה-URL של ה-NestJS שלך (במובייל עדיף להשתמש ב-IP של המחשב או בכתובת של ה-env)
const BASE_URL = process.env.EXPO_PUBLIC_BASE_API_URL || 'http://localhost:3000';

if (!BASE_URL) {
    throw new Error('BASE_URL env variable is not defined');
}

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        // במקום next-auth, אנחנו שולפים את הטוקן ששמרנו בטלפון בזמן ה-Login
        const token = await SecureStore.getItemAsync('user_token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default {
    get(endpoint: string, data?: any) {
        return ajax(endpoint, 'GET', data);
    },
    post(endpoint: string, data?: any) {
        return ajax(endpoint, 'POST', data);
    },
    put(endpoint: string, data?: any) {
        return ajax(endpoint, 'PUT', data);
    },
    delete(endpoint: string, data?: any) {
        return ajax(endpoint, 'DELETE', data);
    },
    patch(endpoint: string, data?: any) {
        return ajax(endpoint, 'PATCH', data);
    }
};

async function ajax(endpoint: string, method = 'get', data = null) {
    try {
        const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`;
        const res = await axiosInstance({
            url,
            method,
            data,
            params: (method === 'GET') ? data : null,
        });
        return res.data;
    } catch (err: any) {
        throw err;
    }
}

// פקודת הסטרימינג הרגילה שלך - עובדת מעולה גם בריאקט נייטיב!
export async function straem(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    endpoint: string,
    data?: any,
): Promise<Response> { 

    const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`;
    const token = await SecureStore.getItemAsync('user_token');

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : null,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response; 
}