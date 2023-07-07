import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URI
})

const token = localStorage.getItem('jwt');

instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export default instance;
