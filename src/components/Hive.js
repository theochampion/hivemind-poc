import React from "react";
import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";

export const HiveMembers = props => {
  const members = props.members.map((member, i) => (
    <ListItem button key={i}>
      <Avatar src={member.img} />
      <ListItemText primary={member.name} secondary={member.location} />
    </ListItem>
  ));
  return (
    // <div style={{ margin: "1em", display:"flex", alignContent: "center" }}>
    //   <Typography>Members</Typography>
      <Paper style={{ minWidth: 300, margin: "1em" }}>
        <List>{members}</List>
      </Paper>
    // </div>
  );
};

export const HiveProjects = props => {
  const projects = props.projects.map((project, i) => (
    <ListItem button key={i}>
      <Avatar src={project.img} />
      <ListItemText primary={project.name} />
    </ListItem>
  ));
  return (
    <Paper style={{ minWidth: 300, margin: "1em" }}>
      <List>{projects}</List>
    </Paper>
  );
};

export const HiveHeader = props => (
  <div align="center">
    <Typography variant="display3">{props.name}</Typography>
    <Typography variant="display2">
      <i>{props.location}</i>
    </Typography>
  </div>
);
