import http from "utils/fetch";

export const signIn = body => {
  return http("/Account/Login", {
    method:"POST",
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