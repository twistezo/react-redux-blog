import React, { Component } from "react";
import PostCard from "./PostCard";
import { Container } from "react-bootstrap";

class PostsBoard extends Component {
  PostCards = () => {
    const posts = this.props.posts;
    return posts.map(post => <PostCard key={post.id} post={post} />);
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
