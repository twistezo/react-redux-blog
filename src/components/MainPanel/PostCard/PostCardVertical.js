import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../../index'
import { Post } from '../../../data/index'

class PostCardVertical extends Component {
  render() {
    const post = this.props.post
    const postURL = this.props.postURL
    return (
      <Card id='post-card-vertical' className='mb-3'>
        <Link to={postURL}>
          <img src={post.mainImage} className='card-img-top pt-3' alt='' />
        </Link>
        <div className='card-body'>
          <Link to={postURL}>
            <h5 className='card-title'>{post.title}</h5>
          </Link>
        </div>
        <div className='card-footer'>
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
          {this.props.isSignedIn && (
            <Col className='align-self-center text-center pt-2'>
              <div>
                <Link to={PUBLIC_URL + '/editpost'}>
                  <Button
                    className='btn-sm'
                    variant='outline-primary'
                    onClick={this.props.onEditPost}
                  >
                    Edit &nbsp; <i className='fas fa-edit' />
                  </Button>
                </Link>
                <Button
                  variant='outline-primary'
                  className='btn-sm ml-3'
                  onClick={this.props.onRemovePost}
                >
                  Remove &nbsp; <i className='fas fa-trash-alt' />
                </Button>
              </div>
            </Col>
          )}
        </div>
      </Card>
    )
  }
}

PostCardVertical.propTypes = {
  post: PropTypes.instanceOf(Post),
  postURL: PropTypes.string,
  isSignedIn: PropTypes.bool,
  onEditPost: PropTypes.func,
  onRemovePost: PropTypes.func
}

export default PostCardVertical
