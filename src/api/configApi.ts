import axios from "axios";
import { TOKEN, BASE_URL } from "./../constant/index";
import { lcStorage } from "../helpers/lcStorage";

// Thiết lập URL cơ sở
axios.defaults.baseURL = BASE_URL;

// Add a request interceptor GỬI ĐI
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // console.log(config);
        // Kết hợp URL cơ sở và phần đường dẫn cụ thể
        config.url = `${axios.defaults.baseURL}${config.url}`;
        config.headers.Authorization = `Bearer ${lcStorage.get(TOKEN)}`;
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor GỬI VỀ
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        // console.log("API về", response);
        return response;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);
