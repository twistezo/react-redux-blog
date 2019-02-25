import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../../index'

class PostsCardVertical extends Component {
  render() {
    const post = this.props.post
    const postURL = PUBLIC_URL + '/post/id-' + post.id
    return (
      <div className='card'>
        <Link to={postURL}>
          <img src={post.mainImage} className='card-img-top pt-3' alt='' />
        </Link>
        <div className='card-body'>
          <Link to={postURL}>
            <h4 className='card-title'>{post.title}</h4>
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
        </div>
      </div>
    )
  }
}

export default PostsCardVertical
