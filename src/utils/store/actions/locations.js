import { GET_LOCATIONS, LOCATIONS_LOADING } from "../constants";

export const getLocations = data => {
  return {
    type: GET_LOCATIONS,
    payload: data
  }
}
export const locationLoading = () => {
  return { type: LOCATIONS_LOADING }
}