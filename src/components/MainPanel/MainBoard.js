import React, { Component } from 'react'
import { FilteredPostsShape } from '../../data/propTypes'
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
      <Container className='pb-5'>
        <h3 className='pb-3'>Latest posts</h3>
        <this.HeadPosts />
        <hr className='pb-2' />
        <this.PostCards />
      </Container>
    )
  }
}

MainBoard.propTypes = {
  filteredPosts: FilteredPostsShape
}

export default MainBoard
