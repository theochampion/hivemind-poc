import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
<<<<<<< HEAD

import Card from "material-ui/Card";

=======
import  brain from "../brain.jpg"
>>>>>>> homePage
import { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200,
    marginTop: "0px"
  },
  bigImage: {
    width: "100%"
  },
  fontTitle: {
    position: "absolute",
    top: "40%",
    left: "30%",
    fontSize: "125px",
    color: "white",
    transform: "translate(-50%, -50%)"
  },
  fontDesc: {
    top: "60%",
    left: "30%",
    position: "absolute",
    fontSize: "75px",
    color: "white",
    transform: "translate(-40%, -50%)"
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
    return (
      <div>
        <div
          style={{
            position: "relative",
            textAlign: "center"
          }}
        >
          <img
            className={classes.bigImage}
            src={brain}
            title="look at my wallpaper"
          />
          <h2 className={classes.fontTitle}>HiveMind </h2>
          <text className={classes.fontDesc}>Make It Together</text>
        </div>
        <CardMatrix toolbar cards={cards} />
      </div>
    );
  }
}

export default withStyles(styles)(Lobby);
