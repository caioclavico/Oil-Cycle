import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import RegisterBuyer from "../pages/RegisterBuyer";
import Register from "../pages/RegisterSeller";
import { Signup } from "../pages/Signup";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/registerBuyer" component={RegisterBuyer} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};
