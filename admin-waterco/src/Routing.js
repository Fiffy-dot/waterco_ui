import React, { useContext } from "react";
import Context from "./Context/Context";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/login.component";
import Register from "./components/registration/Registration";
import Dashboard from "./components/Dashboard/Dashboard";
import Bill from "./components/Bill/Bill";
import Client from "./components/Client/Client";
import Payment from "./components/Payment/Payment";
import Premises from "./components/Premise/Premise";
import Routes from "./components/Route/Route";
import User from "./components/User/User";
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
        <CheckAuthorization
          exact
          path="/bill"
          component={Bill}
          auth={state.checkAuth}  
        />
        <CheckAuthorization
          exact
          path="/client"
          component={Client}
          auth={state.checkAuth}  
        />
        <CheckAuthorization
          exact
          path="/payment"
          component={Payment}
          auth={state.checkAuth}  
        />
        <CheckAuthorization
          exact
          path="/premise"
          component={Premises}
          auth={state.checkAuth}  
        />
        <CheckAuthorization
          exact
          path="/route"
          component={Routes}
          auth={state.checkAuth}  
        />
        <CheckAuthorization
          exact
          path="/user"
          component={User}
          auth={state.checkAuth}  
        /> 
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
