import axios from "axios";
import { apiconfig } from "./config";
import { registerInterceptors } from "./interceptors";

const apiClient = axios.create(apiconfig);

registerInterceptors(apiClient);

export {apiClient}