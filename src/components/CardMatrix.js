import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import Card from "material-ui/Card";
import Grid from "material-ui/Grid";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  toolbar: theme.mixins.toolbar
});

class CardMatrix extends Component {
  render() {
    const { classes } = this.props;
    const { toolbar, cards } = this.props;
    var i = 0;
    return (
      <div>
        <div className={toolbar ? classes.toolbar : ""} />
        <Grid container>
          <Grid container alignItems="center" spacing={40}>
            {cards.map(card => (
              <Grid item xs={12} sm={6} lg={3} key={i++}>
                <Card className={classes.card}>{card}</Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CardMatrix);
