import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";

import IconButton from "material-ui/IconButton";
import Chip from "material-ui/Chip";
import { Tabs, Tab } from "material-ui/Tabs";

import StarIcon from "material-ui/svg-icons/action/grade";
import FavoriteIcon from "material-ui/svg-icons/action/favorite";
import FavoriteBorderIcon from "material-ui/svg-icons/action/favorite-border";

const ProjectTags = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.tags.map(tag => (
        <Chip key={tag} style={{ margin: "6px" }}>
          {tag}
        </Chip>
      ))}
    </div>
  );
};

const ProjectStatus = props => {
  return (
    <IconButton
      tooltip={props.likes + " Favorites"}
      touch={true}
      tooltipPosition="bottom-right"
      onClick={props.onLike}
    >
      {props.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

const ProjectHeader = props => {
  return (
    <div>
      <div style={{ display: "inline-flex", flex: "grow" }}>
        <h1>{props.name}</h1>
        <ProjectStatus
          liked={props.liked}
          likes={props.likes}
          onLike={props.onLike}
        />
      </div>
      <ProjectTags tags={props.tags} />
      <h2 style={{margin: "42px"}}>
        <i>"{props.description}"</i>
      </h2>
    </div>
  );
};

const ProjectContent = props => {
  return (
    <div>
      <Tabs onChange={props.onTabChange} value={props.tabIndex}>
        <Tab label="Decription" value={0} />
        <Tab label="Files" value={1} />
        <Tab label="Project Management" value={2} />
        <Tab label="Conversation" value={3} />
      </Tabs>
      <SwipeableViews index={props.tabIndex} onChange={props.onTabChange}>
        <div>
          <h2>What is this project about ?</h2>
          Something very complicated.<br />
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
    description:
      "A high gain radar providing Helical, Raster, Palmer-Raster and Palmer-Helical scanning modes, all controlled by a powerful AI",
    likes: 42,
    liked: false,
    tags: ["Electronics", "Arduino", "Machine Learning"],
    tabIndex: 0
  };

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onTabChange(value) {
    this.setState({ tabIndex: value });
  }
  render() {
    const { name, description, likes, liked, tags, tabIndex } = this.state;
    return (
      <div>
        <ProjectHeader
          name={name}
          description={description}
          likes={likes + liked}
          liked={liked}
          tags={tags}
          onLike={() => this._onLike()}
        />
        <ProjectContent
          tabIndex={tabIndex}
          onTabChange={value => this._onTabChange(value)}
        />
      </div>
    );
  }
}

export default Project;
