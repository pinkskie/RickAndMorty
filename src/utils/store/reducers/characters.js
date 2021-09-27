import { CHARACTERS_LOADING, GET_CHARACTERS } from "../constants";

const initialState = {
  list: [],
  loading: false
}

const charactersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CHARACTERS: {
      return {...state, list: action.payload, loading: false}
    } 
    case CHARACTERS_LOADING: {
      if (state.list.length) {
        return state
      }
      return {...state, loading: true}
    }
    default: return state
  }
};

export default charactersReducer;