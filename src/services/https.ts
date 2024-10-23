import axios from "axios";


export const https: any = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}/api`,
    headers: {
        'Accept': 'application/json;charset=utf-8',
    }
});
