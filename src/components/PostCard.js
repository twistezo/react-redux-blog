import React, { Component } from "react";
import { Container } from "react-bootstrap";

class PostsCard extends Component {
  render() {
    const post = this.props.post;
    return (
      <Container className="mb-2">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex flex-wrap align-items-center">
              <Container>
                <img
                  src="https://avatars.dicebear.com/v2/identicon/twistezo.svg"
                  className="card-img"
                  alt=""
                />
              </Container>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.text.substring(0, 200) + " ..."}
                </p>
                <span className="card-text">
                  <p className="text-muted mb-0">
                    {post.author +
                      ", " +
                      post.date.toLocaleString("pl-PL", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric"
                      })}
                  </p>
                  <p className="text-muted mb-0">
                    {post.tags.map(tag => (
                      <span key={tag} className="pr-2">
                        {tag}
                      </span>
                    ))}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default PostsCard;
