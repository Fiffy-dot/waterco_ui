import React, { useContext } from "react";
import Context from "./Context/Context";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/login/login.component";


const Routing = () => {
  const { state } = useContext(Context);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
