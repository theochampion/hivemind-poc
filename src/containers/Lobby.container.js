import React, { Component } from "react";
import YouTubePlayer from "react-player/lib/players/YouTube";

import { withStyles } from "material-ui/styles";

import Card from "material-ui/Card";
import { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";
import homeData from "../data/home";

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
    const cards = homeData.projects.map(card => (
      <Card
        // raised
        className={classes.card}
        onClick={() => history.push("/project")}
      >
        <CardMedia
          className={classes.media}
          image={card.img}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {card.name}
          </Typography>
          <Typography component="p">
            {card.desc}
          </Typography>
        </CardContent>
      </Card>
    ));
    return (
      <div>
        <div style={{ height: "100%", width: "100%", top: "-1em" }}>
          <YouTubePlayer
            youtubeConfig={{ playerVars: { showinfo: 1 } }}
            url="https://www.youtube.com/watch?v=2s2dKBqpnIs"
            height="1080px"
            width="100%"
            playing
            loop
            muted
          />
        </div>
        <Typography className={classes.fontTitle}>Hivemind</Typography>
        {/* <Typography component="h1" className={classes.fontDesc}>
          Make it together{" "}
        </Typography> */}
        <div
          style={{
            "margin-top": "-30em",
            position: "absolute",
            "background-color": "white"
          }}
        >
          <CardMatrix toolbar cards={cards} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Lobby);
