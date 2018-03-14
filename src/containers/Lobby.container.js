import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";

const styles = theme => ({
  media: {
    height: 200,
    marginTop: "900px",
  },
  bigImage: {
    width: "100%",
    height: "800px",
    alignItems:"left",
    marginLeft: "auto",
    marginRight: "auto",
    right: 0,
    left: 0,
    marginTop:"56px",
    position: "absolute"
  }
});

class Lobby extends Component {
  render() {
    const { classes } = this.props;
    const cards = [0, 1, 2, 3].map(value => (
      <div>
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
      </div>
    ));
  return (
      <div> 
        <img 
          className={classes.bigImage} 
          src="https://wallpaper.wiki/wp-content/uploads/2016/09/1920x1080-wallpapers11.jpg"
          title="look at my wallpaper"
          alignItems="left"
        />
        <CardMatrix toolbar cards={cards} />
      </div>);
  }
}

export default withStyles(styles)(Lobby);
