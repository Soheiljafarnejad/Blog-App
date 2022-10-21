import axios from "axios";
import Router from "next/router";

let http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_APP,
  // headers: {
  //   "Content-type": "application/json",
  // },
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      Router.push("/signin");
    }
    return Promise.reject(error);
  }
);

const Api = async (options, notAuthorize, headers) => {
  let op = { ...options, headers };
  if (!notAuthorize) op = { ...op, withCredentials: true };

  try {
    const response = await http({ ...op });
    return response.data;
  } catch (error) {
    return await Promise.reject(error);
  }
};

export default Api;
