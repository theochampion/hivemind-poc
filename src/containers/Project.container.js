import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";

import IconButton from "material-ui/IconButton";
import Chip from "material-ui/Chip";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import ReactMarkdown from "react-markdown";

import StarIcon from "material-ui-icons/Grade";
import FavoriteIcon from "material-ui-icons/Favorite";
import FavoriteBorderIcon from "material-ui-icons/FavoriteBorder";

const ProjectTags = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.tags.map(tag => (
        <Chip key={tag} style={{ margin: "6px" }} label={tag} />
      ))}
    </div>
  );
};

const ProjectStatus = props => {
  return (
    <IconButton onClick={props.onLike}>
      <Typography variant="display1">{props.likes}</Typography>
      {props.liked ? <FavoriteIcon style={{ margin: "6px" }} /> : <FavoriteBorderIcon style={{ margin: "6px" }} />}
    </IconButton>
  );
};

const ProjectHeader = props => {
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
        <i>"{props.quote}"</i>
      </Typography>
    </div>
  );
};

const ProjectContent = props => {
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
          <ReactMarkdown source={props.description} />
        </div>
        <div>Source file explorer goes here</div>
        <div>Oh yeah, Trello-like</div>
        <div>Better than Slack</div>
      </SwipeableViews>
    </div>
  );
};

class Project extends Component {
  state = {
    name: "AI-Controlled Multi-Pattern Search Radar",
    quote:
      "A high gain radar providing Helical, Raster, Palmer-Raster and Palmer-Helical scanning modes, all controlled by a powerful AI",
    likes: 42,
    liked: false,
    tags: ["Electronics", "Arduino", "Machine Learning"],
    description: "# Description\nA long long description",
    tabIndex: 0
  };

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onTabChange(e, data) {
    this.setState({ tabIndex: data });
  }
  render() {
    const { name, quote, description, likes, liked, tags, tabIndex } = this.state;
    return (
      <div>
        <ProjectHeader
          name={name}
          quote={quote}
          likes={likes + liked}
          liked={liked}
          tags={tags}
          onLike={() => this._onLike()}
        />
        <ProjectContent
          tabIndex={tabIndex}
          onTabChange={(e, data) => this._onTabChange(e, data)}
          description={description}
        />
      </div>
    );
  }
}

export default Project;
