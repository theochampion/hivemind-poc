import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// containers
import Lobby from "./containers/Lobby.container";
import Login from "./containers/Login.container";

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
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <DefaultLayout exact path="/" component={Lobby} />
          <SpecLayout path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
