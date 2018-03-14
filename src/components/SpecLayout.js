import React from "react";

import DefaultLayout from "./DefaultLayout";

import ClippedDrawerContainer from "../containers/Drawer.container";

const SpecLayout = ({ component: Component, ...rest }) => {
  return (
    <DefaultLayout
      {...rest}
      component={matchProps => (
        <div>
          <ClippedDrawerContainer>
            <Component {...matchProps} />
          </ClippedDrawerContainer>
        </div>
      )}
    />
  );
};

export default SpecLayout;
