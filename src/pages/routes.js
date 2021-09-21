import { Switch, Route } from "react-router-dom";
import { Characters, CharactersInfo, Episodes, Locations, LocationsInfo, Settings,Login, Register } from "pages";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Characters}/>
            <Route path='/locationsInfo/:id' component={LocationsInfo}/>
            <Route path='/locations' component={Locations}/>
            <Route path='/episodes' component={Episodes}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/charactersInfo/:id' component={CharactersInfo}/>
        </Switch>
     );
}

export default Routes;
