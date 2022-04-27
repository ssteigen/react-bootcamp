import React, { Component } from "react";
import "./Die.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

class Die extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getDiceIcon(num) {
    let icon;
    switch (num) {
      case 1:
        icon = faDiceOne;
        break;
      case 2:
        icon = faDiceTwo;
        break;
      case 3:
        icon = faDiceThree;
        break;
      case 4:
        icon = faDiceFour;
        break;
      case 5:
        icon = faDiceFive;
        break;
      case 6:
        icon = faDiceSix;
        break;
      default:
        break;
    }

    return icon;
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { val, locked, rolling, disabled } = this.props;

    const icon = this.getDiceIcon(val);

    return (
      <FontAwesomeIcon disabled={disabled}
        className={`Die ${locked ? "Die-locked" : ""} ${
          rolling ? "Die-rolling" : ""
        }`}
        icon={icon}
        onClick={this.handleClick}
      />
    );
  }
}

export default Die;
