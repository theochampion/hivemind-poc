import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// containers
import Lobby from "./containers/Lobby.container";
import Login from "./containers/Login.container";
import Project from "./containers/Project.container";
import Contributors from "./containers/Contributors.container";

// layouts for header and spec sidebar
import DefaultLayout from "./components/DefaultLayout";
import SpecLayout from "./components/SpecLayout";

import configureStore from "./store/configureStore";

window.React = React;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <div>
          <DefaultLayout exact path="/" component={Lobby} />
          <SpecLayout path="/login" component={Login} />
          <SpecLayout path="/project" component={Project} />
          <SpecLayout path="/contributors" component={Contributors} />
        </div>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
