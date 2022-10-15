import axiosInstance from "./axios/Instance";
import { errorHandler } from "./errors";

export const api = async (options, notAuthorize, dontHandleError) => {
  let op = options;
  if (!notAuthorize) {
    op = {
      ...options,
      headers: {
        // Authorization: localStorage.getItem("Authorization"),
      },
    };
  }

  try {
    const response = await axiosInstance({ ...op });
    return response.data;
  } catch (error) {
    return await errorHandler(error, dontHandleError);
  }
};
