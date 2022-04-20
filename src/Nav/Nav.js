import React, { Component } from "react";

import "./Nav.css";

import NavItem from "./NavItem";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.setActiveApp = this.setActiveApp.bind(this);
  }

  setActiveApp(appId) {
    this.props.setActiveApp(appId);
  }

  render() {
    const apps = this.props.apps.map((app) => {
      return (
        <NavItem
          key={app.id}
          app={app}
          isActive={app.id === this.props.activeApp}
          activeApp={this.props.activeApp}
          setActiveApp={this.setActiveApp}
        />
      );
    });

    return (
      <nav className="Nav">
        <ul>{apps}</ul>
      </nav>
    );
  }
}

export default Nav;
