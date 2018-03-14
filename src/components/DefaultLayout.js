import React from "react";

import { Route } from "react-router-dom";

import HeaderContainer from "../containers/Header.container";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <HeaderContainer />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
