import React, { Component } from "react";
import './Lotto.css';
import LottoBall from "./LottoBall";

class Lotto extends Component {
  static defaultProps = {
    title: "Lottery",
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div className={`Lotto bg-gradient`}>
        <h1 className="Lotto-title">{this.props.title}</h1>
        <div className="Lotto-content">
          {this.state.nums.map((n, index) => (
            <LottoBall num={n} key={index} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lotto;
