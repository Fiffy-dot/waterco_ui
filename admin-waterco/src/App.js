import React, { useReducer } from "react";
import Context from "./Context/Context";
import Routing from "./Routing";
import { Reducer, InitialState } from "./reducers/Reducer";
import './App.scss';

function App() {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
       <Routing />
    </Context.Provider>
  );
}

export default App;
