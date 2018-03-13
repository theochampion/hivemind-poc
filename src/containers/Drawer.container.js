import React, { Component } from "react";

import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import Divider from "material-ui/Divider";
import MenuItem from "material-ui/MenuItem";
import Avatar from "material-ui/Avatar";

import Download from "material-ui/svg-icons/file/file-download";

const style = {
  paper: {
    display: "inline-block",
    float: "left",
    margin: "16px 32px 16px 0"
  }
};

class DrawerContainer extends Component {
  render() {
    return (
      <Paper
      // style={style.paper}
      >
        <Menu>
          <MenuItem
            // style={{ style.menu }}
            leftIcon={<Avatar />}
            primaryText="Theo"
            secondaryText="Electronic lover"
          />

          <Divider />

          <MenuItem primaryText="Share" />
          <MenuItem primaryText="Get links" />
          <MenuItem primaryText="Download" leftIcon={<Download />} />
          <Divider />
          <MenuItem primaryText="Remove" />
        </Menu>
      </Paper>
    );
  }
}

// DrawerContainer.propTypes = {
//   addTodo: PropTypes.func.isRequired
// };

export default DrawerContainer;
