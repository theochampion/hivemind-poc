import React, { Component } from "react";

import { withStyles } from "material-ui/styles";

import Card from "material-ui/Card";
import { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";
import data from "../data";
import Map from "../components/Map";

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
    left: "10%",
    fontSize: "75px",
    color: "white"
  },
  fontDesc: {
    top: "60%",
    left: "18.5%",
    position: "absolute",
    fontSize: "50px",
    color: "white",
    transform: "translate(-40%, -50%)"
  }
});

class Lobby extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const { classes, history } = this.props;
    var i = 0;
    const cards = data.homeCardProject.cards.map(cards => (
      <Card
        // raised
        className={classes.card}
        onClick={() => history.push("/project")}
      >
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
      </Card>
    ));
    return (
      <div>
        <Map />
        <Typography className={classes.fontTitle}>Hivemind</Typography>
        <Typography component="h1" className={classes.fontDesc}>
          Make it together
        </Typography>
        <CardMatrix toolbar cards={cards} />
      </div>
    );
  }
}

export default withStyles(styles)(Lobby);
