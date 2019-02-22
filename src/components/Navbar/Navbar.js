import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Form, Button, Container } from "react-bootstrap";
import { SearchFormContainer } from "../../containers/SearchFormContainer";
import App from "../App";

class Navbar extends Component {
  handleLogoClick = () => {
    this.props.resetFilters(this.props.filters);
    this.props.filterPosts(this.props.posts, {
      tags: [],
      dates: [],
      searchValue: ""
    });
  };

  render() {
    return (
      <BsNavbar bg="dark" variant="dark" className="sticky-top text-center">
        <Container>
          <Link to={App.publicURL + "/"} onClick={this.handleLogoClick}>
            <BsNavbar.Brand className="ml-4">Home</BsNavbar.Brand>
          </Link>
          <SearchFormContainer />
          <Form inline>
            <Button variant="outline-info mr-4">Sign in</Button>
          </Form>
        </Container>
      </BsNavbar>
    );
  }
}

export default Navbar;
