import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// containers
import Lobby from "./containers/Lobby.container";
import Login from "./containers/Login.container";
import Project from "./containers/Project.container";

// layouts for header and spec sidebar
import DefaultLayout from "./components/DefaultLayout";
import SpecLayout from "./components/SpecLayout";

import configureStore from "./store/configureStore";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "./material_ui_raw_theme_file";

//Needed for React Developer Tools
window.React = React;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <BrowserRouter>
        <div>
          <DefaultLayout exact path="/" component={Lobby} />
          <SpecLayout path="/login" component={Login} />
          {/* <SpecLayout path="/project" component={Project} /> */}
          <DefaultLayout path="/project" component={Project} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
