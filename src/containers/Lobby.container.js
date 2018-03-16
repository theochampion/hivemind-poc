import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import Card from "material-ui/Card";

import  brain from "../brain.jpg"
import { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";
import data from "../data";

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
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  incrementVar(count){
    this.setState({
      count: this.state.count + 1}); 
    }
  render() {
    const { classes } = this.props;
    var i = 0;
    const cards = data.homeCardProject.cards.map(cards => (
      <div>
        <CardMedia
          className={classes.media}
          image={data.homeCardProject.cards[i].img} 
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {data.homeCardProject.cards[i].name}
          </Typography>
          <Typography component="p">
            {data.homeCardProject.cards[i++].desc}
          </Typography>
        </CardContent>
      </div>
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
