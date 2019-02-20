import React, { Component } from "react";
import {
  Navbar as BsNavbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class Navbar extends Component {
  render() {
    return (
      <BsNavbar bg="dark" variant="dark">
        <BsNavbar.Brand href="/">Blog</BsNavbar.Brand>
        <Nav className="mr-auto" />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Form inline className="pl-5">
          <Button variant="outline-info">Sign in</Button>
        </Form>
      </BsNavbar>
    );
  }
}

export default Navbar;
