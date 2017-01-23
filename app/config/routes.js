import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import {Route, IndexRoute} from "react-router";

// instructor config for the router; indexRoute is the default route

const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home} />
    </Route>
);

export default routes;