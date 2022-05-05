import React, { Component } from "react";
import axios from "axios";

import Card from "CardDealer/Card";

import './Deck.css';

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };

    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    const deck_url = `${API_BASE_URL}/new/shuffle`;

    try {
      const response = await axios.get(deck_url);

      if (!response.data.success) {
        throw new Error(response.data.error);
      }

      this.setState({ deck: response.data });
    } catch (err) {
      alert(err);
    }
  }

  async getCard() {
    const deck_id = this.state.deck.deck_id;
    const cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;

    try {
      const response = await axios.get(cardUrl);

      if (!response.data.success) {
        throw new Error(response.data.error);
      }

      const card = response.data.cards[0];

      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawn.map((c) => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));

    return (
      <div className="Deck">
        <h1 className="Deck-title">&diams; Card Dealer &diams;</h1>
        <h2 className="Deck-subtitle">&diams; A little React Demo &diams;</h2>
        <button className="Deck-btn" onClick={this.getCard}>Get Card</button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
