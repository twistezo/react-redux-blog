import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { NavbarContainer } from "../containers/NavbarContainer";
import SidePanel from "./SidePanel/SidePanel";
import { SearchResultContainer } from "../containers/SearchResultContainer";
import { MainBoardContainer } from "../containers/MainBoardContainer";
import { PostContainer } from "../containers/PostContainer";
import { AddPostContainer } from "../containers/AddPostContainer";
import { PUBLIC_URL } from "../index";
import DataUtils from "../data/dataUtils";

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
    this.props.fetchPosts();
    // DataUtils.addPostsToFirestore(20);
  }

  componentDidUpdate(prevProps) {
    // console.log(window.store.getState());
    const posts = this.props.posts;
    if (posts !== prevProps.posts) {
      this.setState({
        error: {
          occured: posts.error.occured,
          message: posts.error.message
        }
      });
    }
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
      <Router>
        <div>
          <NavbarContainer />
          <Container>
            <Row className="pt-5">
              <Col sm={3}>
                <SidePanel />
              </Col>
              <Col sm={9}>
                <Switch>
                  <Route
                    exact
                    path={PUBLIC_URL + "/"}
                    component={MainBoardContainer}
                  />
                  <Route
                    path={PUBLIC_URL + "/search"}
                    component={SearchResultContainer}
                  />
                  <Route
                    path={PUBLIC_URL + "/post/id-:id"}
                    component={route => (
                      <PostContainer routeParamId={route.match.params.id} />
                    )}
                  />
                  <Route
                    path={PUBLIC_URL + "/addpost"}
                    component={AddPostContainer}
                  />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
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
