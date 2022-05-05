import React, { Component } from "react";
import "./JokeList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaugh } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import Joke from "./Joke";

const API_URL = "https://icanhazdadjoke.com/";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);

    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };

    this.seenJokes = new Set(this.state.jokes.map((j) => j.id));

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    try {
      let jokes = [];

      while (jokes.length < this.props.numJokesToGet) {
        const response = await axios.get(API_URL, {
          headers: { Accept: "application/json" },
        });

        const newJoke = response.data;
        if (!this.seenJokes.has(newJoke.id)) {
          jokes.push({ id: newJoke.id, text: newJoke.joke, votes: 0 });
          this.seenJokes.add(newJoke.id);
        } else {
          console.log("Found a duplicate!");
          console.log(newJoke.joke);
        }
      }

      this.setState(
        (st) => ({
          loading: false,
          jokes: [...st.jokes, ...jokes],
        }),
        () => this.saveJokes()
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }

  handleVote(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      () => this.saveJokes()
    );
  }

  saveJokes() {
    window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-loader">
          <FontAwesomeIcon
            className="fa-spin JokeList-spinner"
            icon={faLaugh}
            size="8x"
          />
          <h1>Loading...</h1>
        </div>
      );
    }

    let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes);

    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="Laugh-crying emoji"
          />
          <button className="JokeList-button" onClick={this.handleClick}>
            New Jokes
          </button>
        </div>
        <div className="JokeList-jokes">
          {jokes.map((j) => (
            <Joke
              key={j.id}
              id={j.id}
              text={j.text}
              votes={j.votes}
              upVote={() => this.handleVote(j.id, 1)}
              downVote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
