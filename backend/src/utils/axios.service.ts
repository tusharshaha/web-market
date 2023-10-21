import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "https://himalayas.app/jobs",
});

axiosRequest.interceptors.response.use(
  (res) => res.data,
  (err) => {
    // Handle errors globally here if necessary
    return Promise.reject(err.message);
  },
);

export default axiosRequest;
