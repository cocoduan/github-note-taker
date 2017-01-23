import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import {Route, IndexRoute} from "react-router";
import Profile from "../components/Profile";

// instructor config for the router; indexRoute is the default route
// <Route path="/profile/:username" component={Profile} />
const routes = (
    <Route path="/" component={Main}>
        <Route path="/profile/:username" component={Profile} />
        <IndexRoute component={Home} />
    </Route>
);

export default routes;