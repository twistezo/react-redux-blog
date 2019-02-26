import React, { Component } from 'react'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PostsCardHorizontal extends Component {
  render() {
    const post = this.props.post
    const postURL = this.props.postURL
    return (
      <div className='row no-gutters'>
        <div className='col-md-3 d-flex flex-wrap align-items-center'>
          <Link to={postURL}>
            <img src={post.mainImage} className='card-img pl-3' alt='' />
          </Link>
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <Link to={postURL}>
              <h5 className='card-title'>{post.title}</h5>
            </Link>
            <p className='card-text'>
              {post.shortDescription.substring(0, 150) + '...'}
            </p>
            <span className='card-text'>
              <Row>
                <Col>
                  <p className='text-muted mb-0'>
                    {post.author +
                      ', ' +
                      post.date.toLocaleString('pl-PL', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric'
                      })}
                  </p>
                  <p className='text-muted mb-0'>
                    {post.tags.map(tag => (
                      <span key={tag} className='pr-2'>
                        {tag}
                      </span>
                    ))}
                  </p>
                </Col>
                {this.props.isSignedIn && (
                  <Col className='align-self-center'>
                    <ButtonGroup className='float-right btn-group-sm'>
                      <Button
                        variant='outline-primary'
                        onClick={this.props.onEditPost}
                      >
                        Edit &nbsp; <i className='fas fa-edit' />
                      </Button>
                      <Button
                        variant='outline-primary'
                        className='ml-3'
                        onClick={this.props.onRemovePost}
                      >
                        Remove &nbsp; <i className='fas fa-trash-alt' />
                      </Button>
                    </ButtonGroup>
                  </Col>
                )}
              </Row>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default PostsCardHorizontal
