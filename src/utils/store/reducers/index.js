import { combineReducers } from "redux";

// reducers
import charactersReducer from "./characters";

const rootReducer = combineReducers({
  characters: charactersReducer
});

export default rootReducer;