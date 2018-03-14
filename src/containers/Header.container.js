import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { compose } from "redux";
import { connect } from "react-redux";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";

import AddIcon from "material-ui-icons/LibraryAdd";

import * as UserActions from "../actions/user";

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
  render() {
    const { classes, isLogged } = this.props;

    console.log("isLogged", this.props.isLogged);
    return (
      <header className="header">
        <AppBar position="absolute">
          <Toolbar className={classes.flex}>
            <Typography
              className={classes.flexstart}
              variant="title"
              color="inherit"
              noWrap
            >
              HiveMind
            </Typography>

            {isLogged ? (
              <div>
                <IconButton aria-label="Delete">
                  <AddIcon />
                </IconButton>
                <Button
                  onClick={() => {
                    console.log("toggle toggled");
                    this.props.toggleLog();
                  }}
                >
                  <Avatar src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/27541055_10209196634467925_2256573480339693500_n.jpg?oh=273f93266e49ce8e5e1f9bc97b12d052&oe=5B477552" />
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  console.log("toggle toggled");
                  this.props.toggleLog();
                }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

const mapStateToProps = state => ({ isLogged: state.user.isLogged });

function mapDispatchToProps(dispatch) {
  return {
    toggleLog: () => {
      dispatch(UserActions.toggleLog());
    }
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);
