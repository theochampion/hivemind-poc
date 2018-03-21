import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import { withRouter } from "react-router-dom";

import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Button from "material-ui/Button";

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
  }
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
          <List>
            <ListItem>
              <Avatar src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/27541055_10209196634467925_2256573480339693500_n.jpg?oh=273f93266e49ce8e5e1f9bc97b12d052&oe=5B477552" />
              <ListItemText
                primary="Théo Champion"
                secondary="Code enthusiast"
              />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => history.push("/project")}>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button onClick={() => history.push("/contributors")}>
              <ListItemText primary="Contributors" />
            </ListItem>
            <ListItem>
              <Button
                variant="raised"
                color="secondary"
                className={classes.button}
              >
                Discord
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="raised"
                color="primary"
                className={classes.button}
              >
                Github
              </Button>
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
