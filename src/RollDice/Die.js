import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import "./Die.css";

class Die extends Component {
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

  render() {
    const icon = this.getDiceIcon(this.props.num);

    return (
      <FontAwesomeIcon
        className={`Die ${this.props.rolling && "wobble"}`}
        icon={icon}
        size="8x"
      />
    );
  }
}

export default Die;
