import { createStore, combineReducers } from "redux";

// reducers
import characters from "./characters/reducer.characters";
import episodes from "./episodes/reducer.episodes";
import locations from "./locations/reducer.locations";

const rootReducer = combineReducers({
  characters,
  episodes,
  locations,
});

export default createStore(rootReducer);
