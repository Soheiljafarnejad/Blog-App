import Api from "services";

export const getAllPostApi = (params, header) => {
  return Api(
    {
      method: "GET",
      url: "posts",
      params,
    },
    false,
    header
  );
};

export const getPostByCategoryApi = (categorySlug, header) => {
  return Api(
    {
      method: "GET",
      url: `posts/${categorySlug}`,
    },
    false,
    header
  );
};

export const likePostApi = (id) => {
  return Api({
    method: "PUT",
    url: `posts/like/${id}`,
  });
};

export const bookmarkPostApi = (id) => {
  return Api({
    method: "PUT",
    url: `posts/bookmark/${id}`,
  });
};

export const sendCommentApi = (data) => {
  return Api({
    method: "PUT",
    url: `post-comment/save-comment`,
    data,
  });
};
