import React, { Component } from "react";
import './App.css';
import Coinflip from "CoinFlip/Coinflip";
import Lotto from 'Lotto/Lotto';
import RollDice from "RollDice/RollDice";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Coinflip className='card' />

        <Lotto className='card' />

        <Lotto className='card'title="Mini Daily" maxNum={10} numBalls={4} />

        <RollDice className='card' />

        <RollDice className='card' title="Roll more dice!!" numDice={4} />
      </div>
    )
  }
}

export default App;
