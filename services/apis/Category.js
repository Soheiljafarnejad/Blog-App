const { api } = require("services");

export const getAllCategoryApi = () => {
  return api({
    method: "GET",
    url: "post-category",
  });
};
