import React, { Component } from "react";

class IncrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button className="btn-attribute">+</button>;
  }
}

export default IncrementButton;
