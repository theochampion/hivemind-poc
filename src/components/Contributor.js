import React from "react";

import CardMatrix from "../components/CardMatrix";

import { CardContent, CardMedia, CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Button from "material-ui/Button";
import Card from "material-ui/Card";
import Chip from "material-ui/Chip";
import Typography from "material-ui/Typography";

import ReputationIcon from "material-ui-icons/Whatshot";
import CommitIcon from "material-ui-icons/Extension";
import AddIcon from "material-ui-icons/AddCircle";
// import LocationIcon from "material-ui-icons/LocationOn";

export const ContributorName = props => (
  <Typography variant="display1" style={{ padding: "12px" }}>
    {props.name}
  </Typography>
);

export const ContributorLocation = props => (
  <div>
    {/* <LocationIcon style={{ height: 20, width: 20}} /> */}
    <Typography
      variant="subheading"
      style={{ paddingLeft: "1em", paddingBottom: "1em" }}
    >
      <i>{props.location}</i>
    </Typography>
  </div>
);

export const ContributorCompetencies = props =>
  props.competencies.map(tag => (
    <Chip
      key={tag}
      style={{ margin: "3px", color: "white", backgroundColor: "#03A9F4" }}
      label={tag}
    />
  ));

export const ContributorActions = props => (
  <CardActions style={{ justifyContent: "space-between", margin: "1em" }}>
    <IconButton aria-label="Reputation">
      <ReputationIcon />
      {props.reputation}
    </IconButton>
    {props.inProject ? (
      <IconButton aria-label="Commits">
        {props.commits}
        <CommitIcon />
      </IconButton>
    ) : (
      <Button color="primary" onClick={props.onRecruit} className="bite">
        I Want You
      </Button>
    )}
  </CardActions>
);

export const ContributorsMatrix = props => {
  var contributors = [];
  for (var i in props.contributors) {
    const contributor = props.contributors[i];
    // console.log(contributor);
    // console.log(contributor.inProject, props.editable);
    if (contributor.inProject === props.inProject) {
      contributors.push(
        <Card style={{ minWidth: 250, maxWidth: 350 }}>
          <CardMedia style={{ height: 200 }} image={contributor.img} />
          <CardContent>
            <ContributorName name={contributor.name} />
            <ContributorLocation location={contributor.location} />
            <ContributorCompetencies competencies={contributor.competencies} />
          </CardContent>
          {props.inProject ? (
            <ContributorActions
              inProject
              reputation={contributor.reputation}
              commits={contributor.commits}
            />
          ) : (
            <ContributorActions
              reputation={contributor.reputation}
              onRecruit={props.onRecruit}
            />
          )}
        </Card>
      );
    }
  }
  // if (!props.inProject)
  //   contributors.push(
  //     <Card style={{ minWidth: 250, maxWidth: 350 }}>
  //      <CardContent style={{ justifyContent: "center"}}>
  //       <AddIcon style={{height: 142, width: 142}}/>
  //       </CardContent>
  //     </Card>
  //   );
  return <CardMatrix cards={contributors} />;
};
