import http, { makeParams } from "utils/fetch";

export const getAllEpisodes = () => {
  return http("/Episodes/GetAll" + makeParams({ PageNumber: 1 , PageSize:200 }));
};

export const getEpisodesInfo = Id => {
  return http("/Episodes/GetById" + makeParams({ Id }));
};