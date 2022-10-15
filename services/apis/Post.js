import { api } from "services";

export const getAllPost = (params) => {
  return api({
    method: "GET",
    url: "posts",
    params,
  });
};

export const getPostByCategory = (categorySlug) => {
  return api({
    method: "GET",
    url: `posts/${categorySlug}`,
  });
};
