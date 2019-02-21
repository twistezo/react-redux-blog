import React, { Component } from "react";
import { DataGenerator } from "../data/generator";
import Navbar from "./Navbar";
import SidePanel from "./SidePanel";
import { PostsBoardContainer } from "../containers/PostsBoardContainer";
import { Row, Col, Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: {
        occured: false,
        message: ""
      }
    };
  }

  componentDidMount() {
    new DataGenerator()
      .fetch(10)
      .then(posts => {
        this.props.fetchPosts(posts);
      })
      .then(() => {
        this.props.unwrapTags(this.props.posts);
        this.props.unwrapDates(this.props.posts);
      })
      .then(() => {
        this.props.filterPosts(this.props.posts, this.props.filters);
      })
      .catch(err => {
        this.setState({
          error: {
            occured: true,
            message: err.message
          }
        });
      });
  }

  ErrorContainer = () => {
    return (
      <div className="text-center pt-5">
        <div className="pb-2">
          <h2>Error. Please reload the page.</h2>
          <h5>Error message: "{this.state.error.message}"</h5>
        </div>
      </div>
    );
  };

  WaitContainer = () => {
    return (
      <div className="text-center pt-5">
        <div className="pb-2">
          <h2>Downloading data...</h2>
        </div>
      </div>
    );
  };

  MainContainer = () => {
    return (
      <div>
        <Navbar />
        <Container>
          <Row className="pt-5">
            <Col sm={3}>
              <SidePanel />
            </Col>
            <Col sm={9}>
              <PostsBoardContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  render() {
    if (this.props.posts.length !== 0 && !this.state.error.occured) {
      return <this.MainContainer />;
    } else if (this.state.error.occured) {
      return <this.ErrorContainer />;
    } else {
      return <this.WaitContainer />;
    }
  }
}

export default App;
