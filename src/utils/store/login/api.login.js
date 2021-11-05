import http, { makeParams } from "utils/fetch";

export const signIn = body => {
  return http("/Account/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  });
};

export const signUp = body => {
  return http("/Account/Register", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  });
};

export const getProfile = userName => {
  return http("/Account/GetProfile" + makeParams({ userName }));
};

export const updateProfile = data => {
  return http("/Account/UpdateProfile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  });
};