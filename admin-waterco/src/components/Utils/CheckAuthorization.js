import React from "react";
import { Route, Redirect } from "react-router-dom";

const CheckAuthorization = ({ auth, component: Component, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={(props) => {
        if (auth) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/404-unauthorized",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default CheckAuthorization;
