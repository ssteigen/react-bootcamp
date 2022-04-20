import React, { Component } from "react";
import './App.css';
// import Coinflip from "CoinFlip/Coinflip";
// import Lotto from 'Lotto/Lotto';
// import RollDice from "RollDice/RollDice";
// import BoxContainer from "ColorBoxes/BoxContainer";
// import ButtonList from 'ButtonList/ButtonList';
// import Hangman from "Hangman/Hangman";
// import Board from "LightsOut/Board";
// import BoxList from 'ColorBoxes/BoxList';

import TodoList from 'TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoList />

        {/* <BoxList /> */}

        {/* <Board /> */}

        {/* <Hangman /> */}

        {/* <ButtonList className='card' /> */}

        {/* <BoxContainer numBoxes={9} /> */}

        {/* <Coinflip className='card' /> */}

        {/* <Lotto className='card' /> */}

        {/* <Lotto className='card'title="Mini Daily" maxNum={10} numBalls={4} /> */}

        {/* <RollDice className='card' /> */}

        {/* <RollDice className='card' title="Roll more dice!!" numDice={4} /> */}
      </div>
    )
  }
}

export default App;
