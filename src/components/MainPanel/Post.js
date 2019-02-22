import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Post extends Component {
  PostContainer = () => {
    const post = this.props.posts.find(
      post => post.id === this.props.routeParamId
    );
    return (
      <div>
        <h2>{post.title}</h2>
        <div>{post.text}</div>
      </div>
    );
  };

  render() {
    return (
      <Container>
        <this.PostContainer />
      </Container>
    );
  }
}

export default Post;
