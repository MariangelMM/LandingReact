import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};
export default Routes;
