import http, { makeParams } from "utils/fetch";

export const getAllLocations = (PageNumber = 1, PageSize = 200) => {
  return http("/Locations/GetAll" + makeParams({ PageNumber, PageSize }));
};

export const getLocationsInfo = Id => {
  return http("/Locations/GetById" + makeParams({ Id }) );
};