export const errorHandler = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
    }
  }

  return Promise.reject(error);
};
