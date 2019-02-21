import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";

class SearchForm extends Component {
  handleSearchFormInputChange = event => {
    const value = event.target.value;
    this.props.handleSearchInput(value);

    let filters = Object.assign({}, this.props.filters);
    filters.searchValue = value;
    this.props.filterPosts(this.props.posts, filters);
  };

  render() {
    return (
      <Form inline>
        <FormControl
          className="mr-sm-2"
          name="search"
          type="text"
          placeholder="search"
          onChange={this.handleSearchFormInputChange}
        />
        <i className="fas fa-search" />
      </Form>
    );
  }
}

export default SearchForm;
