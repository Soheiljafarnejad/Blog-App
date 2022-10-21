import Api from "services";

export const signUpApi = (data) => {
  return Api({
    method: "POST",
    url: "user/signup",
    data,
  });
};

export const signInApi = (data) => {
  return Api({
    method: "POST",
    url: "user/signin",
    data,
  });
};

export const LogoutApi = () => {
  return Api({
    method: "GET",
    url: "user/logout",
  });
};

export const CheckUserCookiesApi = () => {
  return Api({
    method: "GET",
    url: "user/load",
  });
};
