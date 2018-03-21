import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { compose } from "redux";

import Typography from "material-ui/Typography";

import { HiveMembers, HiveProjects, HiveHeader } from "../components/Hive";
import hiveData from "../data/hive";
import membersData from "../data/members";
import projectsData from "../data/home";

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
        <HiveMembers members={members} />
        <HiveHeader name={hive.name} location={hive.location}/>
        <HiveProjects projects={projects} />
      </div>
    );
  }
}

// export default Hive;

export default compose(withStyles(styles))(Hive);
