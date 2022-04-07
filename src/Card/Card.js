import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        {this.props.title && (
          <h1 className="Card-header">{this.props.title}</h1>
        )}
        <div className="Card-content">
          boo
        </div>
        <div className="Card-footer">
          alsdjf
        </div>
      </div>
    );
  }
}

export default Card;
