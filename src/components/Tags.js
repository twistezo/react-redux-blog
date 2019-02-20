import React, { Component } from "react";
import { Container, Alert, Badge } from "react-bootstrap";
import { Filter, FilterType } from "../data/";

class Tags extends Component {
  onTagClick = (e, tagName) => {
    this.props.switchTag(tagName);
    this.props.filterPosts(
      this.props.posts,
      new Filter(FilterType.TAG, tagName)
    );
    e.preventDefault();
  };

  Tags = () => {
    return this.props.tags.map(tag => (
      <Alert.Link
        className="mr-1"
        key={tag.name}
        onClick={e => this.onTagClick(e, tag.name)}
      >
        {tag.name}
        <Badge variant="success" className="ml-1">
          {tag.quantity}
        </Badge>
        <Badge variant="light" className="ml-1">
          {tag.state ? "x" : ""}
        </Badge>
      </Alert.Link>
    ));
  };

  render() {
    return (
      <Container className="Tags">
        <div>
          <p className="d-flex flex-wrap">
            <this.Tags />
          </p>
        </div>
      </Container>
    );
  }
}

export default Tags;
