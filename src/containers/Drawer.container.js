import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import { withRouter } from "react-router-dom";

import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";

import Divider from "material-ui/Divider";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

class ClippedDrawer extends Component {
  render() {
    const { classes } = this.props;
    const { history } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem>
              <Avatar>T</Avatar>
              <ListItemText primary="Théo" secondary="Body builder" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => history.push("/project")}>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button onClick={() => history.push("/contributors")}>
              <ListItemText primary="Contributors" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ClippedDrawer));
