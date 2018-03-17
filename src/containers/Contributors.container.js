import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Typography from "material-ui/Typography";

import { ProjectHeader } from "../components/Project";
import { ContributorsMatrix } from "../components/Contributor";
import data from "../data";

class Contributors extends Component {
  state = { project: data.project, contributors: data.contributors };

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onTabChange(e, data) {
    this.setState({ tabIndex: data });
  }
  render() {
    const { classes, isLogged } = this.props;
    const { name, description, likes, liked, tags } = this.state.project;
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
              Advised
            </Typography>
            <ContributorsMatrix inProject={false} contributors={contributors} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ isLogged: state.user.isLogged });

export default compose(connect(mapStateToProps))(Contributors);
