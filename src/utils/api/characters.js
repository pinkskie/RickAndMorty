import http, { makeParams } from "./fetch";

export const getAllCharacters = (PageNumber = 1, PageSize = 200) => {
    return http('/Characters/GetAll?PageNumber=1&PageSize=200')
}

export const getCharactersByFilter = params => {
    return http('/Characters/Filter' + makeParams(params))
} 

export const getCharaterInfo = id => {
    return http('/Characters/GetById?Id=' + id )
}