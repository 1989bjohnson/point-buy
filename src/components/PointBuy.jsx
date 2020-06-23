import React, { Component } from "react";
import Attribute from "./Attribute";
import SelectRace from "./SelectRace";
import data from "../data/data";
import Container from "react-bootstrap/Container";

class PointBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributeMod: [],
    };
  }

  componentDidMount() {}

  renderAttributes = data.attributes.map((name) => (
    <Attribute attributeName={name} />
  ));
  render() {
    return (
      <div>
        <SelectRace />
        <Container className="main-content">{this.renderAttributes}</Container>
      </div>
    );
  }
}

export default PointBuy;
