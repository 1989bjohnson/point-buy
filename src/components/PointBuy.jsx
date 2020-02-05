import React, { Component } from "react";
import Attribute from "./Attribute";
import SelectRace from "./SelectRace";
import data from "../data/data";
import { Grid } from "react-bootstrap";

class PointBuy extends Component {
  constructor(props) {
    super(props);
  }
  renderAttributes = data.attributes.map(name => (
    <Attribute attributeName={name} />
  ));
  render() {
    return (
      <div>
        <SelectRace />
        <Grid className="main-content">{this.renderAttributes}</Grid>
      </div>
    );
  }
}

export default PointBuy;
