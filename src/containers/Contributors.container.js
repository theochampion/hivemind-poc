import React, { Component } from "react";

import { withStyles } from "material-ui/styles";
import { CardContent, CardMedia, CardActions } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Chip from "material-ui/Chip";
import Grid from "material-ui/Grid";
import Card from "material-ui/Card";

import { ProjectHeader } from "../components/Project";
import CardMatrix from "../components/CardMatrix";
import data from "../data";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

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
    console.log(this.state);
    const { classes } = this.props;
    const { name, description, likes, liked, tags } = this.state.project;

    const contributorsCards = this.state.contributors.map(contributor => (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://hackadaycom.files.wordpress.com/2018/01/kspcon_feat1.jpg?w=800"
        />
        <CardContent>
          <Typography
            variant="headline"
            component="h2"
            // style={{ margin: "12px" }}
          >
            {contributor.name}
          </Typography>

          {contributor.competencies.map(tag => (
            <Chip key={tag} style={{ margin: "3px" }} label={tag} />
          ))}

          {/* <Typography variant="headline">
            Rep: {contributor.reputation}
          </Typography> */}
        </CardContent>
      </Card>
    ));

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
        <CardMatrix cards={contributorsCards} />
      </div>
    );
  }
}

export default withStyles(styles)(Contributors);
