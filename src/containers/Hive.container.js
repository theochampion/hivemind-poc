import React, { Component } from "react";

import hiveData from "../data/hive";

import Typography from "material-ui/Typography";

class Hive extends Component {
  state = hiveData;

  render() {
    const { name, location, competencies } = this.state;
    console.log(name, location, competencies);
    return (
      <div>
        <div
          style={{
            display: "inline-flex",
            flex: "grow",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Typography variant="headline" component="h2">
            {name}
          </Typography>
          <Typography variant="headline" component="h2">
            {location}
          </Typography>
          <Typography variant="headline" component="h2">
            {competencies}
          </Typography>
        </div>
      </div>
    );
  }
}

export default Hive;
