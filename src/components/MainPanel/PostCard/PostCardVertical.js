import React, { Component } from 'react'
import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../../index'

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
              <ButtonGroup className='btn-group-sm'>
                <Link to={PUBLIC_URL + '/editpost'}>
                  <Button
                    variant='outline-primary'
                    onClick={this.props.onEditPost}
                  >
                    Edit &nbsp; <i className='fas fa-edit' />
                  </Button>
                </Link>
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
        </div>
      </Card>
    )
  }
}

export default PostCardVertical