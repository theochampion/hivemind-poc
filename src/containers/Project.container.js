import React, { Component } from "react";

import { ProjectHeader, ProjectContent } from "../components/Project";
import projectData from "../data/project";

class Project extends Component {
  state = projectData.project;

  _onLike() {
    const { liked } = this.state;
    this.setState({ liked: !liked });
  }

  _onTabChange(e, data) {
    this.setState({ tabIndex: data });
  }

  _onNewMessage(e) {
    if (e.key === "Enter") {
      this.setState({
        conversation: [
          ...this.state.conversation,
          { name: "0xdeadbeef", msg: e.target.value }
        ]
      });
      e.target.value = ''
    }
  }

  render() {
    const {
      name,
      quote,
      description,
      likes,
      liked,
      tags,
      tabIndex,
      cards,
      files,
      conversation
    } = this.state;

    return (
      <div>
        <ProjectHeader
          name={name}
          quote={quote}
          likes={likes + liked}
          liked={liked}
          tags={tags}
          onLike={() => this._onLike()}
        />
        <ProjectContent
          tabIndex={tabIndex}
          onTabChange={(e, data) => this._onTabChange(e, data)}
          onNewMessage={(e, data) => this._onNewMessage(e)}
          description={description}
          cards={cards}
          files={files}
          messages={conversation}
        />
      </div>
    );
  }
}

export default Project;
