import React, { Component } from "react";
import "./Coin.css";

import imgHeads from "./cent-head.png";
import imgTails from "./cent-tail.png";

class Coin extends Component {
  render() {
    return (
      <div className={`Coin ${this.props.side} ${this.props.flipping ? 'flipping' : ''}`}>
        <div className='side-a'>
          <img src={imgHeads} alt='heads' />
        </div>
        <div className='side-b'>
          <img src={imgTails} alt='tails' />
        </div>
      </div>

    );
  }
}

export default Coin;
