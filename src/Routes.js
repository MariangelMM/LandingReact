import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};
export default Routes;
