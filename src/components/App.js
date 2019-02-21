import React, { Component } from "react";
import { DataGenerator } from "../data/generator";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import { PostsBoardContainer } from "../containers/PostsBoardContainer";
import { Row, Col } from "react-bootstrap";

class App extends Component {
  componentDidMount() {
    new DataGenerator()
      .fetch(10)
      .then(posts => {
        this.props.fetchPosts(posts);
        this.props.unwrapTags(posts);
        this.props.unwrapDates(posts);
        this.props.filterPosts(posts);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Row className="pt-5">
          <Col xs={3}>
            <SidePanel />
          </Col>
          <Col xs={9}>
            <PostsBoardContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
