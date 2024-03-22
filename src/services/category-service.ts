import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";


export function findAllRequest() {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/categories',
  };

  return requestBackend(config);
}