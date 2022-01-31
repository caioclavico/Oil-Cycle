import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import RegisterBuyer from "../pages/RegisterBuyer";
import Register from "../pages/RegisterSeller";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/registerBuyer" component={RegisterBuyer} />
    </Switch>
  );
};
