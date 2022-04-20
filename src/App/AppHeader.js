import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import Nav from 'Nav/Nav';

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.setActiveApp = this.setActiveApp.bind(this);
    this.clearActiveApp = this.clearActiveApp.bind(this);
  }

  setActiveApp(appId) {
    this.props.setActiveApp(appId);
  }

  clearActiveApp() {
    this.props.setActiveApp(null);
  }

  render() {
    return (
      <header className="AppHeader">
        <div className="logo left" onClick={this.clearActiveApp}>
          <span className="fa-stack fa-1x">
            <FontAwesomeIcon icon={faSquare} className="fa-stack-2x" />
            <FontAwesomeIcon icon={faReact} className="fa-stack-1x fa-inverse" />
          </span>
          React Bootcamp
        </div>
        <div className="right">
          <Nav apps={this.props.apps} activeApp={this.props.activeApp} setActiveApp={this.props.setActiveApp} />
        </div>
      </header>
    );
  }
}

export default AppHeader;
