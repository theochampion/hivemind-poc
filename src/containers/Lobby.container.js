import React, { Component } from "react";

import { withStyles } from "material-ui/styles";

import Card from "material-ui/Card";
import { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import CardMatrix from "../components/CardMatrix";
import Map from "../components/Map";
import homeData from "../data/home";
import zIndex from "material-ui/styles/zIndex";

const styles = theme => ({
  hivecard: {
    position: "absolute",
    zIndex: 10,
    opacity: 0.9,
    margin: "1em"
  },
  media: {
    height: 200,
    marginTop: "0px"
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
    this.state = {
      count: 0,
      selectedHive: null
    };
  }
  render() {
    const { classes, history } = this.props;
    var i = 0;
    const cards = homeData.projects.map(card => (
      <Card
        // raised
        onClick={() => history.push("/project")}
      >
        <CardMedia className={classes.media} image={card.img} />
        <CardContent>
          <Typography variant="headline" component="h2">
            {card.name}
          </Typography>
          <Typography component="p">{card.desc}</Typography>
        </CardContent>
      </Card>
    ));
    return (
      <div>
        {this.state.selectedHive && (
          <Card className={classes.hivecard}>
            {/* <CardMedia className={classes.media} image={card.img} /> */}

            <CardContent>
              <Grid container spacing={24}>
                <Grid item xs={10}>
                  <Typography variant="headline" component="h2">
                    {this.state.selectedHive.name}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="headline" component="h2">
                    {this.state.selectedHive.members}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}
        <Map
          animate
          style={{
            height: "40em",
            width: "100%"
          }}
          onHiveChange={hive => {
            this.setState({ selectedHive: hive });
          }}
        />
        {/* <Typography className={classes.fontTitle}>Hivemind</Typography> */}
        <Typography component="h1" className={classes.fontDesc}>
          Featured
        </Typography>
        <CardMatrix toolbar cards={cards} />
      </div>
    );
  }
}

export default withStyles(styles)(Lobby);
