import http from "./fetch";

export const signIn = body => {
  return http('/Account/Login', {
    method:'POST',
    body
  })
}

export const signUp = body => {
  return http('/Account/Register', {
    method:'POST',
    body
  })
}