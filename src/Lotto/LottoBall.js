import React, { Component } from "react";
import "./LottoBall.css";

class LottoBall extends Component {
  render() {
    return (
      <div className="LottoBall">
        <div className="LottoBall-inner">{this.props.num}</div>
      </div>
    );
  }
}

export default LottoBall;
