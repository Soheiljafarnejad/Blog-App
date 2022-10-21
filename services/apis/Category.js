import Api from "services";

export const getAllCategoryApi = () => {
  return Api({
    method: "GET",
    url: "post-category",
  });
};
