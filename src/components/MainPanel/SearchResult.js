import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { PostCardContainer } from '../../containers/PostCardContainer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SearchResult extends Component {
  PostCards = () => {
    return this.props.filteredPosts.map(post => (
      <ReactCSSTransitionGroup
        transitionName='search-result'
        transitionAppear={true}
        transitionAppearTimeout={750}
        transitionEnter={false}
        transitionLeave={false}
        key={post.id}
      >
        <PostCardContainer
          key={post.id}
          cardVersion={'horizontal'}
          post={post}
        />
      </ReactCSSTransitionGroup>
    ))
  }

  EmptyResult = () => {
    return (
      <div className='text-center pt-5'>
        <div className='pb-2'>
          <h2>Nothing here...</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Container>
        {this.props.filteredPosts.length !== 0 ? (
          <this.PostCards />
        ) : (
          <this.EmptyResult />
        )}
      </Container>
    )
  }
}

export default SearchResult
