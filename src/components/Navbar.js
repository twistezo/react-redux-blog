import React, { Component } from "react";
import {
  Navbar as BsNavbar,
  Form,
  Button,
  Container
} from "react-bootstrap";
import { SearchFormContainer } from "../containers/SearchFormContainer";

class Navbar extends Component {
  render() {
    return (
      <BsNavbar bg="dark" variant="dark" className="sticky-top text-center">
        <Container>
          <BsNavbar.Brand href="/">Blog</BsNavbar.Brand>
          <SearchFormContainer />
          <Form inline>
            <Button variant="outline-info">Sign in</Button>
          </Form>
        </Container>
      </BsNavbar>
    );
  }
}

export default Navbar;
