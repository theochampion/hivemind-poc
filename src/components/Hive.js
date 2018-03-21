import React from "react";
import List, { ListItem, ListItemText, ListSubheader } from "material-ui/List";
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
    <Paper style={props.style}>
      <List subheader={<ListSubheader>Members</ListSubheader>}>{members}</List>
    </Paper>
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
    <Paper style={props.style}>
      <List subheader={<ListSubheader>Projects</ListSubheader>}>
        {projects}
      </List>
    </Paper>
  );
};

export const HiveHeader = props => (
  <div align="center" style={props.style}>
    <Paper
      style={{
        zIndex: 100,
        padding: "1em",
        borderRadius: 40,
        backgroundColor: "#03A9F4"
      }}
    >
      <Typography variant="headline" style={{ color: "white" }}>
        {props.name}
      </Typography>
      <Typography variant="title" style={{ color: "white" }}>
        <i>{props.location}</i>
      </Typography>
    </Paper>
  </div>
);
