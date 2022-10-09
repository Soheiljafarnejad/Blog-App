import axiosInstance from "./axios/Instance";
import { errorHandler } from "./errors";

export const api = (options, notAuthorize, dontHandleError) => {
  let op = options;
  if (!notAuthorize) {
    op = {
      ...options,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
  }

  return axiosInstance({ ...op })
    .then((response) => {
      return response.data;
    })
    .catch((error) => errorHandler(error, dontHandleError));
};
