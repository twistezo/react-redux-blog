import React, { Component } from 'react'
import { PUBLIC_URL } from '../../../index'
import PostCardHorizontal from './PostCardHorizontal'
import PostCardVertical from './PostCardVertical'

class PostsCard extends Component {
  handleEditPost = () => {
    this.props.editedPostId(this.props.post.id)
  }
  handleRemovePost = () => {
    this.props.removePost(this.props.post.id)
  }

  HorizontalCard = props => (
    <PostCardHorizontal
      post={props.post}
      postURL={props.postURL}
      onEditPost={this.handleEditPost}
      onRemovePost={this.handleRemovePost}
      isSignedIn={props.isSignedIn}
    />
  )

  VerticalCard = props => (
    <PostCardVertical
      post={props.post}
      postURL={props.postURL}
      onEditPost={this.handleEditPost}
      onRemovePost={this.handleRemovePost}
      isSignedIn={props.isSignedIn}
    />
  )

  render() {
    const post = this.props.post
    const postURL = PUBLIC_URL + '/post/id-' + post.id
    const isSignedIn = this.props.isSignedIn
    const cardVersion = this.props.cardVersion
    const card =
      cardVersion === 'horizontal' ? (
        <this.HorizontalCard
          post={post}
          postURL={postURL}
          isSignedIn={isSignedIn}
        />
      ) : (
        <this.VerticalCard
          post={post}
          postURL={postURL}
          isSignedIn={isSignedIn}
        />
      )
    return card
  }
}

export default PostsCard
