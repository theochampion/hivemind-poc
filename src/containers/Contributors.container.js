import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import { CardContent, CardMedia, CardActions } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import IconButton from "material-ui/IconButton";

import { ProjectHeader } from "../components/Project";
import CardMatrix from "../components/CardMatrix";
import data from "../data";

import ReputationIcon from "material-ui-icons/Whatshot";
import AddIcon from "material-ui-icons/Extension";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
};

const ContributorsMatrix = props => {
  var i = 0;
  const contributors = props.contributors.map(contributor => (
    <div>
      <CardMedia
        // className={classes.media}
        style={styles.media}
        image={contributor.img}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="display1" style={{ padding: "12px" }}>
          {contributor.name}
        </Typography>
        {contributor.competencies.map(tag => (
          <Chip key={tag} style={{ margin: "3px" }} label={tag} />
        ))}
      </CardContent>
      <CardActions style={{ justifyContent: "space-between", margin: "1em" }}>
        <IconButton aria-label="Add to favorites">
          <ReputationIcon />
          {contributor.reputation}
        </IconButton>
        <IconButton aria-label="Share">
          {contributor.commits}
          <AddIcon />
        </IconButton>
      </CardActions>
    </div>
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
        {/* <ProjectHeader
          name={name}
          //   quote={quote}
          likes={likes + liked}
          liked={liked}
          tags={tags}
          onLike={() => this._onLike()}
        /> */}
        <Typography variant="display4" style={{ margin: "12px" }}>
          Contributors
        </Typography>
        <ContributorsMatrix contributors={contributors} />
      </div>
    );
  }
}

export default withStyles(styles)(Contributors);
