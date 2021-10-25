import { SET_PROFILE } from "./types.login";

const initialState = {
  profile: null
};

const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case SET_PROFILE: {
      return { ...state, profile: action.payload };
    }
    default: return state;
  }
};

export default reducer;