import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'
import DataUtils from '../../data/dataUtils'

class Post extends Component {
  componentDidMount() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  componentDidUpdate() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  render() {
    const variant = this.props.variant
    const post =
      variant === 'final'
        ? this.props.posts.find(post => post.id === this.props.routeParamId)
        : this.props.tempPost
    const text = DataUtils.convertMarkdownToHtml(post.text)

    return (
      <Container className='post'>
        {variant === 'preview' && (
          <div>
            <h4>Live preview</h4>
            <Col sm={3} className='pl-0'>
              <hr />
            </Col>
          </div>
        )}
        <h1>{post.title}</h1>
        <p>{post.shortDescription}</p>
        <div className='content' dangerouslySetInnerHTML={{ __html: text }} />
        <Col sm={3} className='pl-0 float-right pb-5'>
          <hr className='mb-1' />
          <p className='pt-2 mb-1 text-right'>
            {post.author +
              ', ' +
              post.date.toLocaleString('pl-PL', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
              })}
          </p>
          <p className='text-right'>
            {post.tags.map(tag => (
              <span key={tag}>{tag + ' '}</span>
            ))}
          </p>
        </Col>
      </Container>
    )
  }
}

export default Post
