import React, { Component } from "react";
import "./App.css";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

import Coinflip from "CoinFlip/Coinflip";
import Hangman from "Hangman/Hangman";
import RollDice from "RollDice/RollDice";
import Lotto from "Lotto/Lotto";
import TodoList from "TodoList/TodoList";
import Board from "LightsOut/Board";
import ButtonList from "ButtonList/ButtonList";
import Game from "Yahtzee/Game";
import ZenQuote from "ZenQuote/ZenQuote";
import Deck from "CardDealer/Deck";
import DadJokes from "DadJokes/DadJokes";

const APPS = [
  { id: "rollDice", name: "Roll Dice", component: <RollDice /> },
  { id: "lotto", name: "Lottery", component: <Lotto /> },
  { id: "coinFip", name: "Coin Flip", component: <Coinflip /> },
  { id: "buttonList", name: "Button List", component: <ButtonList /> },
  { id: "hangman", name: "Hangman", component: <Hangman /> },
  { id: "lightsOut", name: "Lights Out", component: <Board /> },
  { id: "todoList", name: "To Do List", component: <TodoList /> },
  { id: "yahtzee", name: "Yahtzee", component: <Game /> },
  { id: "zenQuote", name: "Zen Quote", component: <ZenQuote /> },
  { id: "cardDealer", name: "Card Dealer", component: <Deck /> },
  { id: "dadJokes", name: "Dad Jokes", component: <DadJokes /> },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeApp: null };

    this.setActiveApp = this.setActiveApp.bind(this);
  }

  setActiveApp(appId) {
    this.setState({ activeApp: appId });
  }

  render() {
    return (
      <div className="App">
        <AppHeader
          apps={APPS}
          setActiveApp={this.setActiveApp}
          activeApp={this.state.activeApp}
        />

        <div className="AppContent">
          {this.state.activeApp ? (
            APPS.find((app) => app.id === this.state.activeApp).component
          ) : (
            <div className="Intro">
              <h1>Intro</h1>
              <p>
                Hi! I'm Savanah. I'm working my way through this{" "}
                <a href="https://www.udemy.com/course/modern-react-bootcamp/">
                  Udemy Course
                </a>{" "}
                to learn React.
              </p>
              <p>
                This course includes a number of hands-on examples, which are
                showcased here.
              </p>
            </div>
          )}
        </div>

        <AppFooter />

        {/* <BoxList /> */}

        {/* <BoxContainer numBoxes={9} /> */}
      </div>
    );
  }
}

export default App;
