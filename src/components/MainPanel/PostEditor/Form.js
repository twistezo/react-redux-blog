import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import uuidv1 from 'uuid/v1'
import { Post } from '../../../data/index'
import Preview from './Preview'
import { PUBLIC_URL } from '../../../index'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formInput: {
        title: '',
        shortDescription: '',
        text: '',
        mainImage: ''
      }
    }
  }

  componentDidUpdate(prevProps) {
    const sourcePost = this.props.sourcePost
    if (sourcePost !== prevProps.sourcePost) {
      this.setState({
        formInput: {
          title: sourcePost.title,
          shortDescription: sourcePost.shortDescription,
          text: sourcePost.text,
          mainImage: sourcePost.mainImage
        }
      })
    }
  }

  handleFinishEdit = () => {
    this.props.onFinishEditPost(
      new Post(
        this.props.variant === 'add' ? uuidv1() : this.props.sourcePost.id,
        this.state.formInput.title,
        this.state.formInput.shortDescription,
        this.state.formInput.text,
        this.props.authDisplayName,
        new Date(),
        ['#rust', '#javascript', '#linux'],
        this.state.formInput.mainImage
      )
    )
  }

  handleInputChange = event => {
    let text = event.target.value
    this.setState({
      ...this.state,
      formInput: {
        ...this.state.formInput,
        [event.target.name]: text
      }
    })
  }

  render() {
    return (
      <Container>
        <div className='pb-4'>
          <h5 className='pb-2'>Let's write</h5>
          <Form>
            <Form.Group>
              <Form.Control
                name='title'
                value={this.state.formInput.title}
                type='text'
                placeholder='Post title'
                required
                maxLength='50'
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='shortDescription'
                as='textarea'
                value={this.state.formInput.shortDescription}
                placeholder='Short description'
                required
                rows='3'
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='text'
                as='textarea'
                value={this.state.formInput.text}
                placeholder='Post body'
                rows='10'
                required
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group className='d-flex justify-content-end'>
              <Link to={PUBLIC_URL}>
                <Button
                  variant='outline-primary'
                  onClick={this.handleFinishEdit}
                >
                  {this.props.variant === 'add' ? 'Add' : 'Edit'}
                </Button>
              </Link>
            </Form.Group>
          </Form>
        </div>
        <Preview
          title={this.state.formInput.title}
          shortDescription={this.state.formInput.shortDescription}
          text={this.state.formInput.text}
        />
      </Container>
    )
  }
}

export default Editor
