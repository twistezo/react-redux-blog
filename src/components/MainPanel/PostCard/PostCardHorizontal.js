import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../../index'
import { Post } from '../../../data/index'

class PostsCardHorizontal extends Component {
  render() {
    const post = this.props.post
    const postURL = this.props.postURL
    return (
      <Card className='mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-3 d-flex flex-wrap align-items-center justify-content-center pt-4 pt-md-0'>
            <Link to={postURL}>
              <img src={post.mainImage} className='card-img pl-3' alt='' />
            </Link>
          </div>
          <div className='col-md-9'>
            <div className='card-body'>
              <Link to={postURL}>
                <h5 className='card-title'>{post.title}</h5>
              </Link>
              <p className='card-text text-justify'>
                {post.shortDescription.substring(0, 150) + '...'}
              </p>
              <span className='card-text'>
                <Row>
                  <Col className='flex-fill'>
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
                    <Col className='align-self-center pt-3 pt-sm-0'>
                      <div className='float-right'>
                        <Link to={PUBLIC_URL + '/editpost'}>
                          <Button
                            className='btn-sm'
                            variant='outline-primary'
                            onClick={this.props.onEditPost}
                          >
                            Edit &nbsp;
                            <i className='fas fa-edit' />
                          </Button>
                        </Link>
                        <Button
                          variant='outline-primary'
                          className='btn-sm ml-3'
                          onClick={this.props.onRemovePost}
                        >
                          Remove &nbsp;
                          <i className='fas fa-trash-alt' />
                        </Button>
                      </div>
                    </Col>
                  )}
                </Row>
              </span>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}

PostsCardHorizontal.propTypes = {
  post: PropTypes.instanceOf(Post),
  postURL: PropTypes.string,
  isSignedIn: PropTypes.bool,
  onEditPost: PropTypes.func,
  onRemovePost: PropTypes.func
}

export default PostsCardHorizontal
