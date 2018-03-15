import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import Card from "material-ui/Card";

import { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

class Lobby extends Component {
  render() {
    const { classes } = this.props;
    const cards = [0, 1, 2, 3].map(value => (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://hackadaycom.files.wordpress.com/2018/01/kspcon_feat1.jpg?w=800"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Mega WOW kerbal controller
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    ));
    return <CardMatrix toolbar cards={cards} />;
  }
}

export default withStyles(styles)(Lobby);
