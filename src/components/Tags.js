import React, { Component } from "react";
import { Container, Alert, Badge } from "react-bootstrap";

class Tags extends Component {
  onTagClick = (event, tagName) => {
    this.props.switchTagState(tagName);
    this.props.filterPosts(this.props.posts, this.props.filters);
    event.preventDefault();
  };

  Tags = () => {
    const tags = this.props.filters.tags;
    return tags.length > 0
      ? tags.map(tag => (
          <Alert.Link
            className="mr-2"
            key={tag.name}
            onClick={event => this.onTagClick(event, tag.name)}
          >
            {tag.name}
            {tag.state ? (
              <i className="far fa-check-square ml-2" />
            ) : (
              <Badge variant="secondary" className="ml-2">
                {tag.quantity}
              </Badge>
            )}
          </Alert.Link>
        ))
      : "";
  };

  render() {
    return (
      <Container>
        <div>
          <h4>Tags</h4>
          <p className="d-flex flex-wrap">
            <this.Tags />
          </p>
        </div>
      </Container>
    );
  }
}

export default Tags;
