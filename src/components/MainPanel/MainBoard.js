import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { PostCardContainer } from '../../containers/PostCardContainer'

class MainBoard extends Component {
  static headPostsNum = 2

  HeadPosts = () => {
    return (
      <div className='card-deck'>
        {this.props.filteredPosts.slice(0, MainBoard.headPostsNum).map(post => (
          <PostCardContainer
            key={post.id}
            cardVersion={'vertical'}
            post={post}
          />
        ))}
      </div>
    )
  }

  PostCards = () => {
    return this.props.filteredPosts
      .slice(MainBoard.headPostsNum)
      .map(post => (
        <PostCardContainer
          key={post.id}
          cardVersion={'horizontal'}
          post={post}
        />
      ))
  }

  render() {
    return (
      <Container>
        <h4 className='pb-3'>Latest posts</h4>
        <this.HeadPosts />
        <hr className='pb-2' />
        <this.PostCards />
      </Container>
    )
  }
}

export default MainBoard
