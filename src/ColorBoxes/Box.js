import React, { Component } from "react";
import "./Box.css";
import { choose } from "helpers";

class Box extends Component {
  static defaultProps = {
    allColors: [
      "lavender",
      "thistle",
      "plum",
      "violet",
      "orchid",
      "fuchsia",
      "mediumorchid",
      "mediumpurple",
      "rebeccapurple",
      "blueviolet",
      "darkviolet",
      "darkorchid",
      "darkmagenta",
      "purple",
      "indigo",
      "slateblue",
      "darkslateblue",
      "mediumslateblue",
    ],
  };

  render() {
    return (
      <div className="Box" key={this.props.id}>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.props.removeBox}>X</button>
      </div>
    );
  }
}

export default Box;
