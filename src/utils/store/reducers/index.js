import { combineReducers } from "redux";

// reducers
import charactersReducer from "./characters";
import locationsReducer from "./locations";

const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer
});

export default rootReducer;