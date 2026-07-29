import axios from "axios";

const DEFAULT_ERROR_MESSAGE = "unexpected error occurred";
const NETWORK_ERROR_MESSAGE = " check network connection";
const TIMEOUT_ERROR_MESSAGE = " try again";

export interface ApiError {
    status :  number | null;
    message: string;
    code?: string;
    isNetworkError: boolean;
}

interface ErrorResponse{
    message?: string;
    code?: string;
}

const isErrorResponse = (data:unknown): data is ErrorResponse => {
    return (
        typeof data === "object" && data !== null && ("message" in data || "code" in data)
    );
} 

export const normalizeApiError = (error : unknown): ApiError => {
    if (axios.isAxiosError(error)){
        if (!error.response){
            return{
                status:null,
                message: error.code === "ECONNABOETED" ? TIMEOUT_ERROR_MESSAGE: NETWORK_ERROR_MESSAGE,
                code: error.code,
                isNetworkError: true,
            };
        }

        const responseData = error.response.data;
         return{
            status: error.response.status,
            message: isErrorResponse(responseData) &&  responseData.message ? responseData.message : error.message || DEFAULT_ERROR_MESSAGE,
            code:
            isErrorResponse(responseData)? responseData.code : undefined,
            isNetworkError: false,
         };
        }

        if (error instanceof Error){
            return{
                status: null,
                message: error.message,
                isNetworkError: false,
            };
        }

        return{
            status: null,
            message: DEFAULT_ERROR_MESSAGE,
            isNetworkError: false,
        };
    }


