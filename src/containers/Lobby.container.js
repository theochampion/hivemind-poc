import React, { Component } from "react";
import ReactPlayer from "react-player";
import { withStyles } from "material-ui/styles";

import Card from "material-ui/Card";
import { CardContent, CardMedia } from "material-ui/Card";
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
    fontSize: "75px",
    color: "white",
    transform: "translate(-50%, -50%)"
  },
  fontDesc: {
    top: "60%",
    left: "30%",
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
        <div
          style={{
            position: "relative",
            textAlign: "center"
          }}
        >
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              youtubeConfig={{ playerVars: { showinfo: 1 } }}
              url="https://www.youtube.com/watch?v=2s2dKBqpnIs"
              width="100%"
              height="1100px"
              playing
              loop
              muted
            />
          </div>
          <h2 className={classes.fontTitle}>Do It Together</h2>
          <text className={classes.fontDesc}>
            Large-scale collaboration-enabled toolbox
          </text>
        </div>
        <CardMatrix toolbar cards={cards} />
      </div>
    );
  }
}

export default withStyles(styles)(Lobby);
