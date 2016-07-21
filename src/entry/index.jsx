import "../common/lib";
import React from "react";
import { render } from "react-dom";
import { IndexRoute, Router, Route, hashHistory } from "react-router";
import "../common/lib";
import App from "../component/App";
import Index from "../component/Index";

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
      </Route>
    </Router>
), document.getElementById("react"));
