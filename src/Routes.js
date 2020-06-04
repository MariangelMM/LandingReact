import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
