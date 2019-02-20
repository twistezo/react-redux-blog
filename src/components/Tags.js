import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Tags extends Component {
  onTagClick = e => {
    console.log(e.target);
    e.preventDefault();
  };

  Tags = () => {
    const posts = this.props.posts;
    const tags = Array.from(new Set(posts.map(post => post.tags).flat()));
    
    return tags.map(tag => (
      <a key={tag} onClick={this.onTagClick}>
        {tag}
      </a>
    ));
  };

  render() {
    return (
      <Container className="Tags">
        Tags:
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
