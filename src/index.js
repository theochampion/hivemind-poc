import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import Lobby from "./containers/Lobby.container";
import Login from "./containers/Login.container";

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
          <Route exact path="/" component={Lobby} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
