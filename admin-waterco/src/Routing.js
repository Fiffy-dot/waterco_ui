import React, { useContext } from "react";
import Context from "./Context/Context";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/login.component";
import Register from "./components/registration/Registration";
import Dashboard from "./components/Dashboard/Dashboard";
import CheckAuthorization from "./components/Utils/CheckAuthorization";


const Routing = () => {
  const { state } = useContext(Context);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <CheckAuthorization
          exact
          path="/dashboard"
          component={Dashboard}
          auth={state.checkAuth}  
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
