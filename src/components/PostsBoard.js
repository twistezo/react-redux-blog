import React, { Component } from "react";
import PostCard from "./PostCard";
import { Container } from "react-bootstrap";

class PostsBoard extends Component {
  PostCards = () => {
    return this.props.filteredPosts.map(post => (
      <PostCard key={post.id} post={post} />
    ));
  };

  render() {
    return (
      <Container className="PostsBoard">
        <this.PostCards />
      </Container>
    );
  }
}

export default PostsBoard;
