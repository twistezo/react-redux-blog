import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import App from "../../App";

class PostsCard extends Component {
  render() {
    const post = this.props.post;
    const postURL = App.publicURL + "/post/id-" + post.id;
    return (
      <Container className="mb-2">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex flex-wrap align-items-center">
              <Link to={postURL}>
                <img src={post.mainImage} className="card-img pl-3" alt="" />
              </Link>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <Link to={postURL}>
                  <h5 className="card-title">{post.title}</h5>
                </Link>
                <p className="card-text">
                  {post.text.substring(0, 150) + " ..."}
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
