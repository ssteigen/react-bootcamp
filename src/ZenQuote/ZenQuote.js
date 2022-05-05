import React, { Component } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import "./ZenQuote.css";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, quote: "" };
  }

  componentDidMount() {
    axios.get("https://api.github.com/zen").then((response) => {
      setTimeout(
        function () {
          this.setState({ quote: response.data, isLoaded: true });
        }.bind(this),
        3000
      );
    });
  }

  render() {
    return (
      <div class="ZenQuote">
        <h1>Always remember...</h1>
        {this.state.isLoaded ? (
          <p>{this.state.quote}</p>
        ) : (
          <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
        )}
      </div>
    );
  }
}

export default ZenQuote;
