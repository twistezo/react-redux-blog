import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Badge } from 'react-bootstrap'
import { PUBLIC_URL } from '../../index'

class Tags extends Component {
  onTagClick = (event, tagName) => {
    this.props.switchTagState(tagName)
    this.props.filterPosts(this.props.posts, this.props.filters)
    event.preventDefault()
  }

  Tags = () => {
    const tags = this.props.filters.tags
    return tags.length > 0
      ? tags.map(tag => (
          <div
            className='mr-2 alert-link'
            key={tag.name}
            onClick={event => this.onTagClick(event, tag.name)}
          >
            <Link to={PUBLIC_URL + '/search'}>
              {tag.name}
              {tag.state ? (
                <i className='far fa-check-square ml-2' />
              ) : (
                <Badge variant='secondary' className='ml-2'>
                  {tag.quantity}
                </Badge>
              )}
            </Link>
          </div>
        ))
      : ''
  }

  render() {
    return (
      <Container>
        <div>
          <h4>Tags</h4>
          <span className='d-flex flex-wrap'>
            <this.Tags />
          </span>
        </div>
      </Container>
    )
  }
}

export default Tags
