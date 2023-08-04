import { getState } from "@/store/AuthStore";
import axios, { AxiosError, AxiosInstance } from "axios";
import { history } from "./history";

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
    registerInterceptTokenManager: (signOut: SignOut) => () => void;
}

export const baseApi = axios.create({
    baseURL: "http://localhost:8080/api"
});

baseApi.interceptors.request.use(async (req) => {
    const authToken = getState().token;

    console.log(authToken);

    if (authToken) {
        req.headers.Authorization = `Bearer ${authToken}`;
    }

    return req;
});

baseApi.interceptors.response.use((res) => res, async (requestError) => {

    if (requestError instanceof AxiosError) {
        if (requestError.response?.status === 403) {
            const originalRequest = await requestError.request;

            console.log(originalRequest.responseURL);

            // console.log(urlRequest);


            if (!originalRequest.responseURL.includes("auth/login")) {
                window.location.replace("/login");
            } else {
                throw requestError;
            }
        }
    }

    throw requestError;
})

// baseApi.registerInterceptTokenManager = signOut => {
//     const interceptTokenManager = baseApi.interceptors.response.use(response => response, async (requestError) => {

//         if (requestError?.response?.status === 403) {

//         }

//     })
// }