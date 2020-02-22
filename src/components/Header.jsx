import React, { Component } from "react";
import Heading from "./Heading"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Heading title="Test" headingLevel="h1" />
      </div>
    );
  }
}

export default Header;
