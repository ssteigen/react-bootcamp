import React, { Component } from "react";
import { choose } from "helpers";

import './ButtonList.css';

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"],
  };

  constructor(props) {
    super(props);
    this.state = { color: choose(this.props.colors) };
  }

  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className="ButtonList" style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map((color, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => this.changeColor(color)}
              // onClick={this.changeColor.bind(this, color)}
              // Binding in the render function is not ideal!
            >
              Click on me!
            </button>
          );
        })}
      </div>
    );
  }
}

export default ButtonList;
