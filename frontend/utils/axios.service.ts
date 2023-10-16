import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 10000,
  withCredentials: true
};

const axiosRequest: AxiosInstance = axios.create(axiosConfig);

axiosRequest.interceptors.response.use(
  (res) => res.data,
  (err) => {
    // Handle errors globally here if necessary
    return Promise.reject(err.message);
  },
);

export default axiosRequest;
