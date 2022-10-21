const { api } = require("services");

export const signUpApi = (data) => {
  return api({
    method: "POST",
    url: "user/signup",
    data,
  });
};

export const signInApi = (data) => {
  return api({
    method: "POST",
    url: "user/signin",
    data,
  });
};
