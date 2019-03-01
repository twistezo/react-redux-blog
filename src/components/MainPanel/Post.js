import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import DataUtils from '../../data/dataUtils'

class Post extends Component {
  componentDidMount() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  componentDidUpdate() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  render() {
    const post = this.props.posts.find(
      post => post.id === this.props.routeParamId
    )
    const text = DataUtils.convertMarkdownToHtml(post.text)
    return (
      <Container>
        <h1>{post.title}</h1>
        <p>{post.shortDescription}</p>
        <div
          className='content pt-3'
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Container>
    )
  }
}

export default Post
