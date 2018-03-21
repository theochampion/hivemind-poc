import React, { component, Component } from "react";
import TextField from "material-ui/TextField";
import SwipeableViews from "react-swipeable-views";

import IconButton from "material-ui/IconButton";
import Chip from "material-ui/Chip";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import Card, { CardContent } from "material-ui/Card";
import Paper from "material-ui/Paper";
import ReactMarkdown from "react-markdown";

import FavoriteIcon from "material-ui-icons/Favorite";
import FavoriteBorderIcon from "material-ui-icons/FavoriteBorder";
import UpIcon from "material-ui-icons/KeyboardArrowUp";
import DownIcon from "material-ui-icons/KeyboardArrowDown";
import CommitIcon from "material-ui-icons/Extension";
import ContributorsIcon from "material-ui-icons/Group";
import EditIcon from "material-ui-icons/ModeEdit";
import Button from "material-ui/Button";

import CardMatrix from "./CardMatrix";
import SourceFiles from "./SourceFiles";

import MarkMirror from "react-markmirror";
import { typography } from "material-ui/styles";

export const ProjectTags = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.tags.map(tag => (
        <Chip
          key={tag}
          style={{ margin: "3px", color: "white", backgroundColor: "#03A9F4" }}
          label={tag}
        />
      ))}
    </div>
  );
};

export const ProjectStatus = props => {
  return (
    <IconButton onClick={props.onLike}>
      <Typography variant="display1">{props.likes}</Typography>
      {props.liked ? (
        <FavoriteIcon style={{ margin: "6px" }} />
      ) : (
        <FavoriteBorderIcon style={{ margin: "6px" }} />
      )}
    </IconButton>
  );
};

export const ProjectCards = props => {
  const cards = props.cards.map(card => (
    <Card>
      <CardContent>
        <Typography
          variant="headline"
          component="h2"
          style={{ margin: "12px" }}
        >
          {card.title}
        </Typography>
        <ProjectTags tags={card.tags} />
        <Typography component="p" style={{ marginTop: "1em" }}>
          {card.description}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "6px"
          }}
        >
          <IconButton>
            <UpIcon style={{ height: 38, width: 38 }} />
          </IconButton>
          <Typography variant="headline">{card.points}</Typography>
          <IconButton>
            <DownIcon style={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="Commits">
            {card.commits}
            <CommitIcon />
          </IconButton>
          <IconButton aria-label="Commits">
            {card.contributors}
            <ContributorsIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  ));
  return <CardMatrix toolbar cards={cards} />;
};

export const ProjectHeader = props => {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          flex: "grow",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <Typography variant="display2">{props.name}</Typography>
        <ProjectStatus
          liked={props.liked}
          likes={props.likes}
          onLike={props.onLike}
        />
      </div>
      <ProjectTags tags={props.tags} />
      <Typography variant="headline" style={{ margin: "24px" }}>
        {props.quote ? <i>"{props.quote}"</i> : null}
      </Typography>
    </div>
  );
};

export const ProjectConversation = props => {
  const messages = props.messages.map((message, i) => (
    <div key={i}>
      <div>
        <Typography>{message.name}</Typography>
      </div>
      <div>
        <Chip
          style={{
            margin: "3px",
            color: i % 2 === 0 ? "white" : "black",
            backgroundColor: i % 2 === 0 ? "#03A9F4" : null,
            marginBottom: "1em"
          }}
          label={message.msg}
        />
      </div>
    </div>
  ));
  // return <CardMatrix toolbar cards={cards} />;
  return (
    <div
      style={{
        margin: "2em",
        height: "100%"
        // display: "inline-flex",
        //flexDirection: "column",
        // flex: "grow",
        //justifyContent: "space-between"
      }}
    >
      {messages}
      <TextField
        id="name"
        label="Message"
        style={{ width: "100%", marginBottom: "1em" }}
        onKeyDown={props.onNewMessage}
      />
    </div>
  );
};

class ProjectMarkDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "Edit your project page",
      edit: false
    };
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit() {
    this.setState({ edit: !this.state.edit });
  }

  handleChange = code => {
    this.setState({ code: code });
    console.log(this.state.code);
  };

  render() {
    return (
      <div style={{ flex: "1", margin: "2em", font: "loboto" }}>
        <div style={{ margin: "1em" }}>
          <Button
            variant="fab"
            color="primary"
            aria-label="edit"
            style={{ margin: "theme.spacing.unit" }}
            onClick={this.onEdit}
          >
            <EditIcon />
          </Button>
        </div>
        {this.state.edit && (
          <span style={{ width: "50%" }}>
            <MarkMirror value={this.state.code} onChange={this.handleChange} />
          </span>
        )}
        <span style={{ width: "50%" }}>
          <Paper>
            <div style={{ padding: "1em", margin: "1em" }}>
              <ReactMarkdown source={this.state.code} />
            </div>
          </Paper>
        </span>
      </div>
    );
  }
}

export const ProjectContent = props => {
  console.log("ff", props.files);
  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          onChange={props.onTabChange}
          value={props.tabIndex}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Decription" value={0} />
          <Tab label="Files" value={1} />
          <Tab label="Project Management" value={2} />
          <Tab label="Conversation" value={3} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={props.tabIndex} onChangeIndex={props.onTabChange}>
        <div>
          <ProjectMarkDown />
        </div>
        <SourceFiles files={props.files} />
        <div>
          <ProjectCards cards={props.cards} />
        </div>
        <div>
          <ProjectConversation messages={props.messages} onNewMessage={props.onNewMessage}/>
        </div>
      </SwipeableViews>
    </div>
  );
};
