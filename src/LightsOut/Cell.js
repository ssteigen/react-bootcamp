import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.flipCellsAroundMe();
  }

  render() {
    return (
      <td
        className={`Cell ${this.props.isLit ? "Cell-lit" : ""}`}
        onClick={this.handleClick}
      />
    );
  }
}

export default Cell;
