import axios, { AxiosInstance } from "axios";


export const https: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}/api`,
    headers: {
        'Accept': 'application/json;charset=utf-8',
    }
});


export default https;
