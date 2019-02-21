import React, { Component } from "react";
import { Container, Alert, Badge } from "react-bootstrap";

class Tags extends Component {
  onTagClick = (event, tagName) => {
    this.props.switchTagState(tagName);
    this.props.filterPosts(
      this.props.posts,
      this.props.tags,
      this.props.dates,
      this.props.searchValue
    );
    event.preventDefault();
  };

  Tags = () => {
    return this.props.tags.map(tag => (
      <Alert.Link
        className="mr-1"
        key={tag.name}
        onClick={event => this.onTagClick(event, tag.name)}
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
          Tags:
          <p className="d-flex flex-wrap">
            <this.Tags />
          </p>
        </div>
      </Container>
    );
  }
}

export default Tags;
