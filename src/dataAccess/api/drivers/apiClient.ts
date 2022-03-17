import axios, { AxiosRequestConfig, AxiosResponseTransformer } from "axios";
import humps from "humps";
import { CacheKeys } from "dataAccess/cache";

// TODO: envから使う
export const API_ORIGIN = process.env.REACT_APP_API_ORIGIN;
export const ApiClient = axios.create({
  baseURL: API_ORIGIN,
  transformResponse: [
    ...((axios.defaults.transformResponse as AxiosResponseTransformer[]) || []),
    (data) => humps.camelizeKeys(data),
  ],
});

ApiClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = config;

  const token = localStorage.getItem(CacheKeys.AuthToken);

  newConfig.headers = {
    ...config.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  if (config.params) {
    newConfig.params = humps.decamelizeKeys(config.params);
  }

  if (!(config.data instanceof FormData)) {
    humps.decamelizeKeys(config.data);
  }

  if (config.headers?.["content-type"] === "application/json") {
    if (config.params) {
      newConfig.data = humps.decamelizeKeys(config.data);
    }
  }

  return newConfig;
});
