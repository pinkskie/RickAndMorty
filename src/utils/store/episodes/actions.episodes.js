import { EPISODES_LOADING, GET_EPISODES } from "./types.episodes";

export const getEpisodes = data => {
  return {
    type: GET_EPISODES,
    payload: data
  };
};

export const episodesLoading = () => {
  return {
    type: EPISODES_LOADING
  };
};