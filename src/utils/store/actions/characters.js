import { CHARACTERS_LOADING, GET_CHARACTERS } from "../constants";

export const getCharacters = data => {
  return {
    type: GET_CHARACTERS,
    payload: data
  };
};

export const charactersLoading = () => {
  return { type: CHARACTERS_LOADING };
};