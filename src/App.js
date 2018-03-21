import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// containers
import Lobby from "./containers/Lobby.container";
import Project from "./containers/Project.container";
import Contributors from "./containers/Contributors.container";

// layouts for header and spec sidebar
import DefaultLayout from "./components/DefaultLayout";
import SpecLayout from "./components/SpecLayout";

import { createStore } from "redux";

import rootReducer from "./reducers";
import "./App.css";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <DefaultLayout exact path="/" component={Lobby} />
            <SpecLayout path="/project" component={Project} />
            <SpecLayout path="/contributors" component={Contributors} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
