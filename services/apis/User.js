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

export const LogoutApi = () => {
  return api({
    method: "GET",
    url: "user/logout",
  });
};

export const CheckUserCookiesApi = () => {
  return api({
    method: "GET",
    url: "user/load",
  });
};
