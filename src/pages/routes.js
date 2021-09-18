import { Switch, Route } from "react-router-dom";
import { Characters, Episodes, Locations, Settings,Login } from "pages";

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Characters}/>
            <Route path='/locations' component={Locations}/>
            <Route path='/episodes' component={Episodes}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' component={Login}/>
        </Switch>
     );
}

export default Routes;
