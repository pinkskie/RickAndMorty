import { Switch, Route } from "react-router-dom";
import { Characters, CharactersInfo, Episodes, EpisodesInfo, Locations, LocationsInfo, Settings, Login, Register } from "pages";

const Routes = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <Switch>
      <Route exact path='/' component={Characters} />
      <Route path='/characters/:id' component={CharactersInfo} />
      <Route path='/locations/:id' component={LocationsInfo} />
      <Route path='/locations' component={Locations} />
      <Route path='/episodes/:id' component={EpisodesInfo} />
      <Route path='/episodes' component={Episodes} />
      <Route path='/settings' component={Settings} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  );
};

export default Routes;
