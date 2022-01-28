import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
};
