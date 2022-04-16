import React, { Component } from "react";
import {v4 as uuid} from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = { height: "", width: "", color: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const newBox = { ...this.state, id: uuid() };

    this.props.createBox(newBox);
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <form className="NewBoxForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add New Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
