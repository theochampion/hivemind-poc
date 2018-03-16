import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import CardMatrix from "../components/CardMatrix";
import data from "../data";

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
  },
  fontTitle: {
    fontFamily: 'Roboto, sans-serif',
    marginTop: "450px",
    marginLeft: "50%",
    position: "absolute"
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
    const cards = data.homeCardProject.cards.map(cards => (
      <div>
        <CardMedia
          className={classes.media}
          image={data.homeCardProject.cards[this.state.count].img} 
          title={data.homeCardProject.cards[this.state.count].title}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
          {data.homeCardProject.cards[this.state.count].name}
          </Typography>
          <Typography component="p">
            {data.homeCardProject.cards[this.state.count].desc}
          </Typography>
        </CardContent>
        {this.incrementVar.bind(this)}
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
        <h2
          className={classes.fontTitle}>
          Crowd
          </h2>
        <CardMatrix toolbar cards={cards}/>
      </div>);
  }
}

export default withStyles(styles)(Lobby);
