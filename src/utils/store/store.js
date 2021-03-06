import { createStore, combineReducers } from "redux";

// reducers
import characters from "./characters/reducer.characters";
import episodes from "./episodes/reducer.episodes";
import locations from "./locations/reducer.locations";
import user from "./login/reducer.login";
import theme from "./theme.reducer";

const rootReducer = combineReducers({
  characters,
  episodes,
  locations,
  user,
  theme,
});

export default createStore(rootReducer);
