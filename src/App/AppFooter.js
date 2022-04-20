import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class AppFooter extends Component {
  render() {
    return (
      <footer className="AppFooter">
        Made with <FontAwesomeIcon icon={faHeart} style={{ color: "pink" }} />{" "}
        by Savanah Steigen
        <span style={{float: 'right'}}>&copy; {new Date().getFullYear()}</span>
      </footer>
    );
  }
}

export default AppFooter;
