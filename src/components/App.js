import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataGenerator } from "../data/generator";
import { NavbarContainer } from "../containers/NavbarContainer";
import SidePanel from "./SidePanel/SidePanel";
import { SearchResultContainer } from "../containers/SearchResultContainer";
import { MainBoardContainer } from "../containers/MainBoardContainer";
import { PostContainer } from "../containers/PostContainer";
import { Row, Col, Container } from "react-bootstrap";

class App extends Component {
  static publicURL = process.env.PUBLIC_URL;

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

  componentDidUpdate() {
    // console.log(window.store.getState());
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
                    path={App.publicURL + "/"}
                    component={MainBoardContainer}
                  />
                  <Route
                    path={App.publicURL + "/search"}
                    component={SearchResultContainer}
                  />
                  <Route
                    path={App.publicURL + "/post/id-:id"}
                    component={route => (
                      <PostContainer routeParamId={route.match.params.id} />
                    )}
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
