import axios from 'axios';

const configure = {
    local: "http://localhost:3000/api/"
    //local: location.origin.replace(location.port, "") + "/api/"
    //local: "mongodb+srv://vercel-admin-user:L7CGW5RlgUpw0Syb@cluster0.44pt6nv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    //local: "http://rafaelcabral26.gratisphphost.info/api/"
};

const http = axios.create({
    baseURL: configure.local,
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