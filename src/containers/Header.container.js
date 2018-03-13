import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

//const Login = props => <FlatButton label="Login" primary={true} />;

//onst Logged = props => <Avatar>T</Avatar>;

class HeaderContainer extends Component {
  state = {
    logged: true
  };

  render() {
    const { logged } = this.state;

    return (
      <header className="header">
        <AppBar position="absolute" className={this.props.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              HiveMind
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default HeaderContainer;
