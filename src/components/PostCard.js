import React, { Component } from "react";
import { Container } from "react-bootstrap";

class PostsCard extends Component {
  render() {
    const post = this.props.post;
    return (
      <Container className="PostCard mb-2">
        <p>Id: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Author: {post.author}</p>
        <p>
          Date:
          {post.date.toLocaleString("pl-PL", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
          })}
        </p>
        <p>Tags: {post.tags}</p>
      </Container>
    );
  }
}

export default PostsCard;
