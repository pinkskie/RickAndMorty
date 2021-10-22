import { EPISODES_LOADING, GET_EPISODES } from "../constants";

const initialState = {
  list: [],
  loading: false
};

const episodesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EPISODES: {
      return {...state, list: action.payload, loading: false};
    }
    case EPISODES_LOADING: {
      if(state.list.length) {
        return state;
      } 
      return {...state, loading: true};
    }
    default: return state;
  }
};

export default episodesReducer;