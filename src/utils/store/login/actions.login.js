import { SET_PROFILE } from "./types.login";

export const setProfile = userName => ({
  type: SET_PROFILE,
  payload: userName
});
