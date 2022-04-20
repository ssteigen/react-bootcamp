import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";
import { choose } from "../helpers";

class RollDice extends Component {
  static defaultProps = {
    sides: [1, 2, 3, 4, 5, 6],
    rolling: false,
    numDice: 2,
    title: "Roll Dice",
  };

  constructor(props) {
    super(props);
    this.state = { dice: Array.from({ length: this.props.numDice }).fill(1) };
    this.roll = this.roll.bind(this);
  }

  roll() {
    this.setState((st) => ({
      ...st,
      dice: st.dice.map((n) => choose(this.props.sides)),
      rolling: true,
    }));

    this.setState((st) => ({
      ...st,
      total: st.dice.reduce((a, b) => a + b, 0),
    }));

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className={`RollDice ${this.props.className} bg-gradient`}>
        <h1 className="RollDice-title">{this.props.title}</h1>
        <div className="RollDice-content">
          <div className="RollDice-dice">
            {this.state.dice.map((n, index) => (
              <Die rolling={this.state.rolling} num={n} key={index} />
            ))}
          </div>
          {this.state.total && <p>You rolled a {this.state.total}!</p>}
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling" : "Roll Dice"}
        </button>

      </div>
    );
  }
}

export default RollDice;
