import React, { Component } from "react";
import { DataGenerator } from "../data/generator";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import { PostBoardContainer } from "../containers/PostBoardContainer";
import { Row, Col } from "react-bootstrap";
import { Filter, FilterType } from "../data/";

class App extends Component {
  componentDidMount() {
    new DataGenerator()
      .fetch(10)
      .then(posts => {
        this.props.fetchPosts(posts);
        this.props.unwrapTags(posts);
        this.props.filterPosts(posts, new Filter(FilterType.NONE, ""));
        console.log("store:");
        console.log(window.store.getState());
      })
      .catch(err => {
        // console.log(err);
      });
  }

  componentDidUpdate() {
    // console.log("store:");
    console.log(window.store.getState());
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
