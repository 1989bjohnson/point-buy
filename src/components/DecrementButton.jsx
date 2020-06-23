import React, { Component } from "react";

class DecrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button className="btn-attribute">-</button>;
  }
}

export default DecrementButton;
