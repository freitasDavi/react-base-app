import { getState, setState } from "@/store/AuthStore";
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { history } from "./history";

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
    registerInterceptTokenManager: (signOut: SignOut) => () => void;
}

type InternalAxiosRequestConfigWithRetry = InternalAxiosRequestConfig<any> & {
    _retry: boolean
};

export const baseApi = axios.create({
    baseURL: "http://localhost:8080/api"
});

// Add token to every request
baseApi.interceptors.request.use(
    async config => {
        const authToken = getState().token;

        config.headers.Authorization = `Bearer ${authToken}`;
        config.headers.Accept = "application/json";
        config.headers["Content-Type"] = "application/json";

        return config;
    },
    error => Promise.reject(error)
);

baseApi.interceptors.response.use((response) => {
    return response
}, async error => {
    if (error instanceof AxiosError) {
        const originalRequest = error.config as InternalAxiosRequestConfigWithRetry;

        if (error.response?.status === 401) {
            if (error.response?.data?.error.includes("User Not Found")) {
                return Promise.reject(error);
            }

            // originalRequest._retry = true;
            const refreshToken = getState().refreshToken;

            const response = await baseApi.post("/auth/refreshtoken", {
                refreshToken
            });

            setState({
                refreshToken: response.data.refreshToken,
                token: response.data.accessToken
            });

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;

            return baseApi(originalRequest);
        }

        return Promise.reject(error);
    }

    return Promise.reject(error);
})

// baseApi.interceptors.request.use(async (req) => {
//     const authToken = getState().token;

//     console.log(authToken);

//     if (authToken) {
//         req.headers.Authorization = `Bearer ${authToken}`;
//     }

//     return req;
// });

// baseApi.interceptors.response.use((res) => res, async (requestError) => {

//     if (requestError instanceof AxiosError) {

//         if (requestError.response?.status === 401) {
//             const originalRequest = await requestError.request;
//         }

//         if (requestError.response?.status === 403) {
//             const originalRequest = await requestError.request;

//             console.log(originalRequest.responseURL);

//             // console.log(urlRequest);


//             if (!originalRequest.responseURL.includes("auth/login")) {
//                 window.location.replace("/login");
//             } else {
//                 throw requestError;
//             }
//         }
//     }

//     throw requestError;
// })

// baseApi.registerInterceptTokenManager = signOut => {
//     const interceptTokenManager = baseApi.interceptors.response.use(response => response, async (requestError) => {

//         if (requestError?.response?.status === 403) {

//         }

//     })
// }