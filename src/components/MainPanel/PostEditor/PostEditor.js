import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Form from './Form'
import Helper from './Helper'

class AddPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sourcePost: {}
    }
  }

  componentDidMount() {
    const editedPostId = this.props.posts.editedPostId
    const sourcePost = this.props.posts.data.find(
      post => post._id === editedPostId
    )
    if (this.props.variant === 'edit' && sourcePost !== undefined) {
      this.setState({
        sourcePost
      })
    }
  }

  handleAddPost = editedPost => {
    this.props.addPost(editedPost)
  }

  handlePasteExample = examplePost => {
    this.setState({ sourcePost: examplePost })
  }

  render() {
    return (
      <Container>
        <h4>
          {this.props.variant === 'add' ? 'Write new post!' : 'Edit your post.'}
        </h4>
        <hr className='pb-3' />
        <Helper
          variant={this.props.variant}
          onPasteExample={this.handlePasteExample}
        />
        <Form
          authDisplayName={this.props.authDisplayName}
          sourcePost={this.state.sourcePost}
          variant={this.props.variant}
          onFinishEditPost={this.handleAddPost}
        />
      </Container>
    )
  }
}

export default AddPost
