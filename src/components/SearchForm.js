import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";

class Navbar extends Component {
  handleSearchFormInputChange = event => {
    const value = event.target.value;
    this.props.handleSearchInput(value);
    this.props.filterPosts(
      this.props.posts,
      this.props.tags,
      this.props.dates,
      value
    );
  };

  render() {
    return (
      <Form inline>
        <FormControl
          className="mr-sm-2"
          name="search"
          type="text"
          placeholder="search by title"
          onChange={this.handleSearchFormInputChange}
        />
      </Form>
    );
  }
}

export default Navbar;
