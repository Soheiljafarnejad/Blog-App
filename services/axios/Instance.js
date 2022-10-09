import axios from "axios";
import { history } from "routes/CustomRouter";

let axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // history.replace("/");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
