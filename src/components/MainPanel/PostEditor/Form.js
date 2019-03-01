import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import uuidv1 from 'uuid/v1'
import { Post } from '../../../data/index'
import Preview from './Preview'
import { PUBLIC_URL } from '../../../index'
import DataUtils from '../../../data/dataUtils'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        title: '',
        shortDescription: '',
        text: '',
        mainImage: '',
        tags: ''
      },
      formValidation: {
        title: false,
        shortDescription: false,
        text: false,
        mainImage: false,
        tags: false
      },
      isFormValid: false,
      isFormValidated: false
    }
    this.regex = {
      imageURL: `^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:\\/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$`,
      tags: `^[a-zA-Z0-9_ ]*$`
    }
  }

  componentDidUpdate(prevProps) {
    const sourcePost = this.props.sourcePost
    // handle paste or clear example
    if (sourcePost !== prevProps.sourcePost) {
      const wasCleared = sourcePost.title !== ''
      this.setState({
        ...this.state,
        formData: {
          title: sourcePost.title,
          shortDescription: sourcePost.shortDescription,
          text: sourcePost.text,
          mainImage: sourcePost.mainImage,
          tags: DataUtils.convertTagsArrayToSentence(sourcePost.tags)
        },
        formValidation: {
          title: wasCleared,
          shortDescription: wasCleared,
          text: wasCleared,
          mainImage: wasCleared,
          tags: wasCleared
        },
        isFormValidated: wasCleared,
        isFormValid: wasCleared
      })
    }
  }

  handleFinishEdit = () => {
    this.props.onFinishEditPost(
      new Post(
        this.props.variant === 'add' ? uuidv1() : this.props.sourcePost.id,
        this.state.formData.title,
        this.state.formData.shortDescription,
        this.state.formData.text,
        this.props.authDisplayName,
        new Date(),
        DataUtils.convertSentenceToTagsArray(this.state.formData.tags),
        this.state.formData.mainImage
      )
    )
  }

  handleInputChange = event => {
    const targetName = event.target.name
    const targetValue = event.target.value
    const isFieldValid = event.target.checkValidity() === true
    let formValidation = { ...this.state.formValidation }
    formValidation[targetName] = isFieldValid

    this.setState(() => ({
      ...this.state,
      formData: {
        ...this.state.formData,
        [targetName]: targetValue
      },
      formValidation,
      isFormValid: Object.values(formValidation).every(v => v === true),
      isFieldValidated: true
    }))
  }

  render() {
    return (
      <Container>
        <div className='pb-4'>
          <h5 className='pb-2'>Let's write</h5>
          <Form validated={this.state.isFieldValidated}>
            <Form.Group>
              <Form.Control
                name='title'
                value={this.state.formData.title}
                type='text'
                placeholder='Post title'
                required
                maxLength='100'
                onChange={this.handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                This field is required. Max length is 100.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='shortDescription'
                as='textarea'
                value={this.state.formData.shortDescription}
                placeholder='Short description'
                required
                rows='3'
                onChange={this.handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                This field is required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='text'
                as='textarea'
                value={this.state.formData.text}
                placeholder='Post body'
                rows='10'
                required
                onChange={this.handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                This field is required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='mainImage'
                value={this.state.formData.mainImage}
                type='text'
                placeholder='Main image source. Ex. https://example.com/image.svg'
                pattern={this.regex.imageURL}
                required
                onChange={this.handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                This field is required. Ex. https://example.com/image.svg
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='tags'
                value={this.state.formData.tags}
                type='text'
                placeholder='Tags. Ex. rust java scss'
                pattern={this.regex.tags}
                required
                onChange={this.handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                This field is required. Tags must be separated with space. Ex.
                rust java scss
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='d-flex justify-content-end'>
              <Link to={PUBLIC_URL}>
                <Button
                  variant='outline-primary'
                  disabled={!this.state.isFormValid}
                  onClick={this.handleFinishEdit}
                >
                  {this.props.variant === 'add' ? 'Add' : 'Edit'}
                </Button>
              </Link>
            </Form.Group>
          </Form>
        </div>
        <Preview
          title={this.state.formData.title}
          shortDescription={this.state.formData.shortDescription}
          text={this.state.formData.text}
          tags={this.state.formData.tags}
        />
      </Container>
    )
  }
}

export default Editor
