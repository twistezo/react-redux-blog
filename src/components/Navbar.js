import React, { Component } from "react";
import { Navbar as BsNavbar, Nav, Form, Button } from "react-bootstrap";
import { SearchFormContainer } from "../containers/SearchFormContainer";

class Navbar extends Component {
  render() {
    return (
      <BsNavbar bg="dark" variant="dark" className="sticky-top">
        <BsNavbar.Brand href="/">Blog</BsNavbar.Brand>
        <Nav className="mr-auto" />
        <SearchFormContainer />
        <Form inline className="pl-5">
          <Button variant="outline-info">Sign in</Button>
        </Form>
      </BsNavbar>
    );
  }
}

export default Navbar;
