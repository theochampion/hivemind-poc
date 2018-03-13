import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";

import IconButton from "material-ui/IconButton";
import Chip from "material-ui/Chip";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import ReactMarkdown from "react-markdown";

import StarIcon from "material-ui-icons/Grade";
import FavoriteIcon from "material-ui-icons/Favorite";
import FavoriteBorderIcon from "material-ui-icons/FavoriteBorder";
import UpIcon from "material-ui-icons/KeyboardArrowUp";
import DownIcon from "material-ui-icons/KeyboardArrowDown";

import data from "../data";

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
      {props.liked ? (
        <FavoriteIcon style={{ margin: "6px" }} />
      ) : (
        <FavoriteBorderIcon style={{ margin: "6px" }} />
      )}
    </IconButton>
  );
};

const ProjectCards = props => {
  return (
    <Grid container style={{ margin: "12px" }}>
      <Grid container justify="center" alignItems={"center"} spacing={40}>
      {props.cards.map(card => (
        <Grid item xs={12} sm={6} lg={3} key={card.title}>
          <Card>
            <CardContent>
              <Typography
                variant="headline"
                component="h2"
                style={{ margin: "12px" }}
              >
                {card.title}
              </Typography>
              <Typography component="p">{card.description}</Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "12px"
                }}
              >
                <IconButton>
                  <UpIcon style={{ height: 38, width: 38 }} />
                </IconButton>
                <Typography variant="headline">{card.points}</Typography>
                <IconButton>
                  <DownIcon style={{ height: 38, width: 38 }} />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
      </Grid>
    </Grid>
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
        <div>
          <ProjectCards cards={props.cards} />
        </div>
        <div>Better than Slack</div>
      </SwipeableViews>
    </div>
  );
};

class Project extends Component {
  state = data.project;

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onTabChange(e, data) {
    this.setState({ tabIndex: data });
  }
  render() {
    const {
      name,
      quote,
      description,
      likes,
      liked,
      tags,
      tabIndex,
      cards
    } = this.state;
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
          cards={cards}
        />
      </div>
    );
  }
}

export default Project;
