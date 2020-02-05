import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Attribute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row className="attribute show-grid">
        <Col xs={6}>
          <Row>
            <Col xs={3} className="attribute-title">
              {this.props.attributeName}
            </Col>
            <Col xs={3} className="attribute-base">
              8
            </Col>
            <Col xs={3} className="attribute-plus-sign">
              +
            </Col>
            <Col xs={3} className="attribute-racial-adjustment">
              1
            </Col>
          </Row>
        </Col>

        <Col xs={6}>
          <Row>
            <Col xs={3} className="attribute-equal-sign">
              =
            </Col>
            <Col xs={3} className="attribute-score">
              9
            </Col>
            <Col xs={3} className="attribute-mod">
              -1
            </Col>
            <Col xs={3} className="attribute-point-cost">
              0
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Attribute;
