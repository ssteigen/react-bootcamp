import React, { Component } from "react";

class NavItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.setActiveApp(this.props.app.id);
  }

  render() {
    return (
      <li className={`NavItem ${this.props.isActive ? 'active' : ''}`}>
        <button onClick={this.handleClick}>{this.props.app.name}</button>
      </li>
    );
  }
}

export default NavItem;
