import React, { useReducer, useEffect, useState } from "react";
import Context from "./Context/Context";
import jwt_decode from "jwt-decode";
import Routing from "./Routing";
import { Reducer, InitialState } from "./reducers/Reducer";
import { CHECK_AUTH, UPDATE_CURRENT_USER } from "./reducers/types";
import './App.scss';

function App() {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  const [shouldMount, mountComponent] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")){
      let decoded = jwt_decode(localStorage.getItem("token"));
      console.log(decoded);
      if (decoded){
        dispatch({ type: CHECK_AUTH, payload: true});
        dispatch({ type: UPDATE_CURRENT_USER, payload: decoded});
      }
    }
    mountComponent(true);
  }, [])
  return (
    <Context.Provider value={{ state, dispatch }}>
       { shouldMount && <Routing /> }
    </Context.Provider>
  );
}

export default App;
