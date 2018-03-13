import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";

import FlatButton from "material-ui/FlatButton";

const Login = props => <FlatButton label="Login" primary={true} />;

const Logged = props => <Avatar>T</Avatar>;

class HeaderContainer extends Component {
  state = {
    logged: true
  };

  render() {
    const { logged } = this.state;

    return (
      <header className="header">
        <AppBar
          title="HiveMind"
          showMenuIconButton={false}
          iconElementLeft={
            <IconButton>
              <ActionHome />
            </IconButton>
          }
          iconElementRight={logged ? <Logged /> : <Login />}
        />
      </header>
    );
  }
}

export default HeaderContainer;
