import { LOCATIONS_LOADING, GET_LOCATIONS } from "./types.locations";

const initialState = {
  list: [],
  loading: false
};

const locationsReducer = (state = initialState, action ) => {
  switch(action.type) {
    case GET_LOCATIONS: {
      return {...state, list: action.payload, loading: false};
    }
    case LOCATIONS_LOADING: {
      if (state.list.length) {
        return  state;
      } 
      return {...state, loading: true};
    }
    default: return state;
  }
};

export default locationsReducer;