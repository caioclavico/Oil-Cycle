import { Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};
