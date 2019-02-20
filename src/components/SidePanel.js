import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "./AboutMe";
import { TagsContainer } from "../containers/TagsContainer";
import Archives from "./Archives";

class SidePanel extends Component {
  render() {
    return (
      <Container className="SidePanel">
        <Row>
          <Col>
            <AboutMe />
          </Col>
        </Row>
        <Row>
          <Col>
            <TagsContainer />
          </Col>
        </Row>
        <Row>
          <Col>
            <Archives />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SidePanel;
