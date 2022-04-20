import React, { Component } from "react";
import "./Coinflip.css";
import Coin from "./Coin";
import { choose } from "../helpers";
import imgHeads from "./cent-head.png";
import imgTails from "./cent-tail.png";

class Coinflip extends Component {
  static defaultProps = {
    sides: ["heads", "tails"],
    coins: [
      { side: "heads", imgSrc: imgHeads },
      { side: "tails", imgSrc: imgTails },
    ],
    flipping: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      side: "heads",
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // Flip the coin
  flipCoin() {
    const newSide = choose(this.props.sides);

    this.setState((st) => {
      return {
        ...st,
        side: newSide,
        flipping: true,
      };
    });

    setTimeout(() => {
      this.setState((st) => {
        return {
          ...st,
          numFlips: st.numFlips + 1,
          numHeads: st.numHeads + (newSide === "heads" ? 1 : 0),
          numTails: st.numTails + (newSide === "tails" ? 1 : 0),
          flipping: false,
        };
      });
    }, 2000);
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div className={`CoinFlip ${this.props.className} bg-gradient`}>
        <h1 className="CoinFlip-title">Let's flip a coin!</h1>
        <div className="CoinFlip-content">
          <Coin side={this.state.side} flipping={this.state.flipping} />
          <p>
            Out of {this.state.numFlips} flips, there have been{" "}
            {this.state.numHeads} heads and {this.state.numTails} tails.
          </p>
        </div>
        <button onClick={this.handleClick} disabled={this.state.flipping}>
          {this.state.flipping ? "Flipping" : "Flip Coin"}
        </button>
      </div>
    );
  }
}

export default Coinflip;
