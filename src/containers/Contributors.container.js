import React, { Component } from "react";

import { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";

import { ProjectHeader } from "../components/Project";
import CardMatrix from "../components/CardMatrix";
import data from "../data";

const ContributorsMatrix = props => {
  console.log(props);
  var i = 0;
  const contributors = props.contributors.map(contributor => (
    <CardContent>
      <Typography variant="headline" component="h2" style={{ margin: "12px" }}>
        {contributor.name}
      </Typography>

      <div style={{ display: "flex" }}>
        {contributor.competencies.map(tag => (
          <Chip key={tag} style={{ margin: "3px" }} label={tag} />
        ))}
      </div>
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Contemplative Reptile"
      /> */}
      {/* <Typography component="p">{card.description}</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "12px"
            }}
          >
            <IconButton>
              <UpIcon style={{ height: 38, width: 38 }} />
            </IconButton> */}
      <Typography variant="headline">Rep: {contributor.reputation}</Typography>
      {/* <IconButton>
              <DownIcon style={{ height: 38, width: 38 }} />
            </IconButton> */}
      {/* </div> */}
    </CardContent>
  ));
  return <CardMatrix cards={contributors} />;
};

class Contributors extends Component {
  state = { project: data.project, contributors: data.contributors };

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onTabChange(e, data) {
    this.setState({ tabIndex: data });
  }
  render() {
    const { name, description, likes, liked, tags } = this.state.project;
    const contributors = this.state.contributors;
    // console.log(this.state)
    // console.log(contributors)
    return (
      <div>
        <ProjectHeader
          name={name}
          //   quote={quote}
          likes={likes + liked}
          liked={liked}
          tags={tags}
          onLike={() => this._onLike()}
        />
        <ContributorsMatrix contributors={contributors} />
      </div>
    );
  }
}

export default Contributors;
