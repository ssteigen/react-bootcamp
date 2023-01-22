import React from "react";
import "./Coin.css";

import imgHeads from "./cent-head.png";
import imgTails from "./cent-tail.png";

export default function Coin({side, flipping}) {
  return (
    <div className={`Coin ${side} ${flipping ? 'flipping' : ''}`}>
      <div className='side-a'>
        <img src={imgHeads} alt='heads' />
      </div>
      <div className='side-b'>
        <img src={imgTails} alt='tails' />
      </div>
    </div>
  );
};
