import axios from 'axios';
import { RequestTypesEnum } from 'enums/requestTypes';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8082'

const METHODS = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    default: axios.get,
};

export const requestOptions = {
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
};

export function request(method: RequestTypesEnum, api: string, params: any) {
    return METHODS[method](api, params);
}

export const getParseResponse = (res: any, method = 'get') => {
    if (method === 'get') {
        return res;
    }
    return JSON.stringify(res);
};
