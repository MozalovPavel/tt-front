import type { Axios, AxiosResponse } from 'axios';
import axios from 'axios';


const baseURL = 'https://datsorange.devteam.games';
const token = process.env.REACT_APP_TOKEN;

const getInstanceApi = (url?: string): Axios => {
    if (!url) {
        throw new Error('Не задано АПИ');
    }

    if (!token) {
        throw new Error('Не задан токен');
    }

    const api = axios.create({
        baseURL: url,
        timeout: 2500,
        headers: { token }
    });

    api.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: any) => {
            if (error?.response) {
                console.error(
                    'Server error',
                    error
                );
            }

            return Promise.reject(error);
        }
    );

    return api;
};

export const api = getInstanceApi(baseURL);
