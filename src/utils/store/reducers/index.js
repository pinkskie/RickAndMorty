import { combineReducers } from "redux";

// reducers
import charactersReducer from "./characters";
import episodesReducer from "./episodes";
import locationsReducer from "./locations";

const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer,
  episodes: episodesReducer
});

export default rootReducer;