import React, { Component } from "react";
import { DataGenerator } from "../data/generator";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import { PostBoardContainer } from "../containers/PostBoardContainer";
import { Row, Col } from "react-bootstrap";

class App extends Component {
  componentDidMount() {
    new DataGenerator()
      .fetch(10)
      .then(data => {
        this.props.fetchPosts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log("store:");
    console.log(window.store.getState());
    console.log("---");
  }

  render() {
    return (
      <div>
        <Navbar />
        <Row>
          <Col xs={3}>
            <SidePanel />
          </Col>
          <Col xs={9}>
            <PostBoardContainer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
