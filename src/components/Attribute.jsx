import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

class Attribute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row className="attribute show-grid">
        <Col>
          <Row className="align-items-center">
            <Col className="attribute-base px-0">
              <DecrementButton />
            </Col>
            <Col className="attribute-title px-0">
              {this.props.attributeName}
            </Col>
            <Col className="attribute-base px-0">
              <IncrementButton />
            </Col>
            <Col className="attribute-plus-sign px-0">+</Col>
            <Col className="attribute-racial-adjustment px-0">1</Col>
          </Row>
        </Col>

        <Col>
          <Row className="align-items-center">
            <Col className="attribute-equal-sign">=</Col>
            <Col className="attribute-score">9</Col>
            <Col className="attribute-mod">-1</Col>
            <Col className="attribute-point-cost">0</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Attribute;
