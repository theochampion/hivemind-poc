import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";

import AddIcon from "material-ui-icons/LibraryAdd";

const styles = {
  flex: {
    flex: 1,
    "justify-content": "flex-end"
  },
  flexstart: {
    "margin-right": "auto"
  }
};

const NotLoggedActions = props => <Button>Login</Button>;

const LoggedActions = props => (
  <span>
    <Button>Add</Button>
    <Avatar>T</Avatar>
  </span>
);

class HeaderContainer extends Component {
  state = {
    logged: true
  };

  render() {
    const { classes } = this.props;
    const { logged } = this.state;

    return (
      <header className="header">
        <AppBar position="absolute" style={{backgroundColor: "#03A9F4"}}>
          <Toolbar className={classes.flex}>
            <Typography
              className={classes.flexstart}
              variant="title"
              color="inherit"
              noWrap
            >
              HiveMind
            </Typography>
            <IconButton aria-label="Delete">
              <AddIcon />
            </IconButton>

            <Avatar>T</Avatar>
            {/* {logged ? <LoggedActions /> : <NotLoggedActions />} */}
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default withStyles(styles)(HeaderContainer);
