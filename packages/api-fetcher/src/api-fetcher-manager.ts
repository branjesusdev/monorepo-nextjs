import axios from 'axios';
import type { ApiError } from './types';
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

type RequestInterceptor = (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
type ResponseInterceptor = (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;

const setGlobalBaseURL = (url: string) => {
  axios.defaults.baseURL = url;
};

const setGlobalTimeout = (timeout: number) => {
  axios.defaults.timeout = timeout;
};

const setGlobalHeaders = (headers: Record<string, string>) => {
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    ...headers,
  };
};

const setGlobalAuthorizationHeader = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};


const createAxiosInstance = (
  { url, headers, requestInterceptor, responseInterceptor }: {
    url?: string;
    headers?: Record<string, string>;
    requestInterceptor?: RequestInterceptor;
    responseInterceptor?: ResponseInterceptor;
  },
): AxiosInstance => {
  const instance = axios.create({
    baseURL: url || axios.defaults.baseURL,
    timeout: axios.defaults.timeout,
    headers: {
      ...axios.defaults.headers.common,
      ...headers,
    },
  });
  if (requestInterceptor) {
    instance.interceptors.request.use(requestInterceptor, (error) => Promise.reject({ message: error.message }));
  }

  if (responseInterceptor) {
    instance.interceptors.response.use(responseInterceptor, (error) => {
      const customError: ApiError = {
        message: error.message,
        status: error.response?.status,
      };
      return Promise.reject(customError);
    });
  }

  return instance;
};

export { createAxiosInstance, setGlobalBaseURL, setGlobalTimeout, setGlobalHeaders, setGlobalAuthorizationHeader };
