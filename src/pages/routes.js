import { Switch, Route, Redirect } from "react-router-dom";
import { Characters, CharactersInfo, Episodes, EpisodesInfo, Locations, LocationsInfo, Settings, Login, Register } from "pages";
import { useUser } from "utils";
import EditProfile from "./settings/editProfile";

const Routes = () => {
  const [user] = useUser();

  return user.succeeded ? (
    <Switch>
      <Route exact path='/' component={Characters} />
      <Route path='/characters/:id' component={CharactersInfo} />
      <Route path='/locations/:id' component={LocationsInfo} />
      <Route path='/locations' component={Locations} />
      <Route path='/episodes/:id' component={EpisodesInfo} />
      <Route path='/episodes' component={Episodes} />
      <Route path='/settings' component={Settings} />
      <Route path='/edit' component={EditProfile} />
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route>
        <Redirect to='/login' />
      </Route>
    </Switch>
  );
};

export default Routes;
