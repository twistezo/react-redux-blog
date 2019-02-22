import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PostCardHorizontal from "./PostCards/PostCardHorizontal";
import PostCardVertical from "./PostCards/PostCardVertical";

class MainBoard extends Component {
  static headPostsNum = 2;

  HeadPosts = () => {
    const headCards = this.props.filteredPosts
      .slice(0, MainBoard.headPostsNum)
      .map(post => <PostCardVertical key={post.id} post={post} />);
    return <div className="card-deck">{headCards}</div>;
  };

  PostCards = () => {
    return this.props.filteredPosts
      .slice(MainBoard.headPostsNum)
      .map(post => <PostCardHorizontal key={post.id} post={post} />);
  };

  render() {
    return (
      <Container>
        <h4>Latest posts</h4>
        <this.HeadPosts />
        <hr />
        <this.PostCards />
      </Container>
    );
  }
}

export default MainBoard;
