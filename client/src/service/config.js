import axios from 'axios';
import dotenv from "dotenv"
const url = import.meta.env.VITE_APP_URL
const envurl = import.meta.env.VITE_APP_URL
const configure = {
    local:import.meta.env.VITE_APP_URL
    //local: location.origin.replace(location.port, "") + "/api/"
};

const http = axios.create({
    baseURL: envurl,
    headers: {
        'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Methods': '*',
        //'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});

// http.interceptors.request.use(
//     function (config) {
//         let user = sessionStorage.getItem('usuario');
//         config.headers.Authorization = (user != null && user.token != null) ? "Bearer " + user.token : '';
//         return config;
//     }
// );

export default http;