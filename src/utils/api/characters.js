import http, { makeParams } from "./fetch";

export const getAllCharacters = (PageNumber = 1, PageSize = 200) => {
  return http("/Characters/GetAll" + makeParams({ PageNumber, PageSize }));
};

export const getCharactersByFilter = params => {
  return http("/Characters/Filter" + makeParams(params));
}; 

export const getCharaterInfo = Id => {
  return http("/Characters/GetById" + makeParams({ Id }));
};