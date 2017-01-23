import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import routes from "./config/routes";

// entry point of the app, keep sync with webpack.config.js
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));