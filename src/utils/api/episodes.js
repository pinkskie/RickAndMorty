import http, { makeParams } from "./fetch";

export const getAllEpisodes = (Season) => {
    return http('/Episodes/GetAll' + makeParams({Season, PageNumber: 1 , PageSize:200}))
}
