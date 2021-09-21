import http, { makeParams } from "./fetch";

export const getAllLocations = (PageNumber = 1, PageSize = 200) => {
    return http('/Locations/GetAll?PageNumber=1&PageSize=200')
}

export const getLocationsInfo = id => {
    return http('/Locations/GetById?Id=' + id )
}