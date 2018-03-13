import React from "react";

import DefaultLayout from "./DefaultLayout";

import DrawerContainer from "../containers/Drawer.container";

const SpecLayout = ({ component: Component, ...rest }) => {
  return (
    <DefaultLayout
      {...rest}
      component={matchProps => (
        <div>
          <Component {...matchProps} />
          <DrawerContainer />
        </div>
      )}
    />
  );
};

export default SpecLayout;
