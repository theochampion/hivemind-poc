import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Typography from "material-ui/Typography";

import { ProjectHeader } from "../components/Project";
import { ContributorsMatrix } from "../components/Contributor";
import projectData from "../data/project"
import membersData from "../data/members";

class Contributors extends Component {
  state = { project: projectData.project, contributors: membersData.members };

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onRecruit(name) {
    const contributors = this.state.contributors;
    console.log(name)
    for (var i in contributors) {
      if (contributors[i].name === name) contributors[i].inProject = true;
    }
  }

  _onTabChange(e, data) {
    this.setState({ tabIndex: data });
  }
  render() {
    const { isLogged } = this.props;
    // const { name, description, likes, liked, tags } = this.state.project;
    const contributors = this.state.contributors;
    return (
      <div>
        {/* <ProjectHeader
          name={name}
          //   quote={quote}
          likes={likes + liked}
          liked={liked}
          tags={tags}
          onLike={() => this._onLike()}
        /> */}
        <Typography variant="display3" style={{ margin: "12px" }}>
          Contributors
        </Typography>
        <ContributorsMatrix inProject={true} contributors={contributors} />
        {isLogged ? (
          <div>
            <Typography variant="display3" style={{ margin: "12px" }}>
              Suggested
            </Typography>
            <ContributorsMatrix
              inProject={false}
              contributors={contributors}
              onRecruit={(e, data) => console.log(data)}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ isLogged: state.user.isLogged });

export default compose(connect(mapStateToProps))(Contributors);
