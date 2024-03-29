import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 10000,
};

const publicApi: AxiosInstance = axios.create(axiosConfig);
const privateApi: AxiosInstance = axios.create({
  ...axiosConfig,
  withCredentials: true,
});

publicApi.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err?.response?.data?.message) {
      err.message = err.response.data.message;
    }
    return Promise.reject(err.message);
  },
);

privateApi.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    const prevRequest = err.config;
    if (err?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;
      await publicApi.post("/auth/refresh", {}, { withCredentials: true });
      return privateApi(prevRequest);
    }
    return Promise.reject(err.message);
  },
);

export { publicApi, privateApi };
