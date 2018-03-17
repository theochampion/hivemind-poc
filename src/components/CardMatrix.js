import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

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
    return (
      <div>
        <div className={toolbar ? classes.toolbar : ""} />
        <Grid container>
          <Grid container justify="flex-start" alignItems="center" spacing={40}>
            {cards.map((card, idx) => (
              <Grid item xs={12} sm={6} lg={3} key={idx}>
                {card}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CardMatrix);
