import React, { Component } from "react";
import "./DadJokes.css";
import JokeList from "./JokeList";

class DadJokes extends Component {
  render() {
    return (
      <div className="DadJokes">
        <JokeList />
      </div>
    );
  }
}

export default DadJokes;
