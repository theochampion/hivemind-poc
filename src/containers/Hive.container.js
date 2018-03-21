import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { compose } from "redux";

import Typography from "material-ui/Typography";

import { HiveMembers, HiveProjects, HiveHeader } from "../components/Hive";
import hiveData from "../data/hive";
import membersData from "../data/members";
import projectsData from "../data/home";
import Map from "../components/Map";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // zIndex: 1,
    // overflow: "hidden",
    // position: "relative",
    display: "flex",
    justifyContent: "space-between"
  }
});

class Hive extends Component {
  state = {
    hive: hiveData,
    members: membersData.members,
    projects: projectsData.projects
  };

  render() {
    const { hive, members, projects } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <HiveHeader
          name={hive.name}
          location={hive.location}
          style={{
            position: "absolute",
            top: "5em",
            zIndex: 3,
            width: "20em",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
        <HiveMembers
          members={members}
          style={{
            position: "absolute",
            top: "4em",
            bottom: 9,
            minWidth: 300,
            zIndex: 3,
            margin: "2em",
            borderRadius: 10
          }}
        />
        <HiveProjects
          projects={projects}
          style={{
            position: "absolute",
            top: "4em",
            bottom: 0,
            right: 0,
            minWidth: 300,
            zIndex: 3,
            margin: "2em",
            borderRadius: 10
          }}
        />
        <Map
          style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
          startPos={[2.28217321814, 48.8569864146]}
        />
      </div>
    );
  }
}

// export default Hive;

export default compose(withStyles(styles))(Hive);
