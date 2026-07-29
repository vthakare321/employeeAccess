import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse} from "axios";
import { getAuthToken } from "./authToken";
import { normalizeApiError } from "./errors";

const onRequest = (
    config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
    const token = getAuthToken();
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}

const onRequestError = (error: AxiosError): Promise<never>=>{
    return Promise.reject(normalizeApiError(error));
};

const onResponse = <T>(
    response: AxiosResponse<T>,
): AxiosResponse<T> => {
    return response;
}

const onResponseError = (error : AxiosError): Promise<never> => {
    return Promise.reject(normalizeApiError(error))
};

export const registerInterceptors = (
    client : AxiosInstance,
): void => {
    client.interceptors.request.use(
        onRequest,
        onRequestError,
    );

    client.interceptors.response.use(
        onResponse,
        onResponseError,
    )
}