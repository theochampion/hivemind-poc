import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

import Grid from "material-ui/Grid";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  toolbar: theme.mixins.toolbar
});

class Lobby extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.toolbar} />

        <Grid container>
          <Grid container justify="center" alignItems="center" spacing={40}>
            {[0, 1, 2, 3].map(value => (
              <Grid item xs={12} sm={6} lg={3} key={value}>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Lobby);
