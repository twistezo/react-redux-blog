import React, { Component } from "react";
import PostCard from "./PostCard";
import { Container } from "react-bootstrap";

class PostsBoard extends Component {
  PostCards = () => {
    return this.props.filteredPosts.map(post => (
      <PostCard key={post.id} post={post} />
    ));
  };

  EmptyResult = () => {
    return (
      <div className="text-center pt-5">
        <div className="pb-2">
          <h2>Nothing here...</h2>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Container className="PostsBoard">
        {this.props.filteredPosts.length !== 0 ? (
          <this.PostCards />
        ) : (
          <this.EmptyResult />
        )}
      </Container>
    );
  }
}

export default PostsBoard;
