import http from "./fetch";

export const signIn = (userName, password) => {
    return http('/Account/Login', {method:'POST', body: JSON.stringify({userName,password})})
}

export const signUp = (userName, password, firstName, lastName, patronymic) => {
    return http('/Account/Register', {method:'POST', body: JSON.stringify({userName, password, firstName, lastName, patronymic})})
}