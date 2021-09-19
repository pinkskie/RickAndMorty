import http from "./fetch";

export const getAllCharacters = (PageNumber = 1, PageSize = 200) => {
    return http('/Characters/GetAll?PageNumber=1&PageSize=200')
}
