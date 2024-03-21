import { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { requestBackend } from "../utils/request";

export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/products",
        params: {
            page,
            name,
            size,
            sort
        }
    };

    return requestBackend(config);
}

export function findById(id: number) {
    return requestBackend({ url: `/products/${id}` }); 
}
