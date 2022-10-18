import { api } from "services";

export const getAllPostApi = (params) => {
  return api({
    method: "GET",
    url: "posts",
    params,
  });
};

export const getPostByCategoryApi = (categorySlug) => {
  return api({
    method: "GET",
    url: `posts/${categorySlug}`,
  });
};

export const likePostApi = (id) => {
  return api({
    method: "PUT",
    url: `posts/like/${id}`,
  });
};

export const bookmarkPostApi = (id) => {
  return api({
    method: "PUT",
    url: `posts/bookmark/${id}`,
  });
};
