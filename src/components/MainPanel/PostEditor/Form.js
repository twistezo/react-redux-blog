import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Container, Form as BsForm, Button } from 'react-bootstrap'
import { PUBLIC_URL } from '../../../index'
import DataUtils from '../../../data/dataUtils'
import Post from '../Post'
import { Post as PostObject } from '../../../data/index'

class Form extends Component {
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
      new PostObject(
        this.props.sourcePost.id,
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
          <BsForm validated={this.state.isFieldValidated}>
            <BsForm.Group>
              <BsForm.Control
                name='title'
                value={this.state.formData.title}
                type='text'
                placeholder='Post title'
                required
                maxLength='100'
                onChange={this.handleInputChange}
              />
              <BsForm.Control.Feedback type='invalid'>
                This field is required. Max length is 100.
              </BsForm.Control.Feedback>
            </BsForm.Group>
            <BsForm.Group>
              <BsForm.Control
                name='shortDescription'
                as='textarea'
                value={this.state.formData.shortDescription}
                placeholder='Short description'
                required
                rows='3'
                onChange={this.handleInputChange}
              />
              <BsForm.Control.Feedback type='invalid'>
                This field is required.
              </BsForm.Control.Feedback>
            </BsForm.Group>
            <BsForm.Group>
              <BsForm.Control
                name='text'
                as='textarea'
                value={this.state.formData.text}
                placeholder='Post body'
                rows='10'
                required
                onChange={this.handleInputChange}
              />
              <BsForm.Control.Feedback type='invalid'>
                This field is required.
              </BsForm.Control.Feedback>
            </BsForm.Group>
            <BsForm.Group>
              <BsForm.Control
                name='mainImage'
                value={this.state.formData.mainImage}
                type='text'
                placeholder='Main image source. Ex. https://example.com/image.svg'
                pattern={this.regex.imageURL}
                required
                onChange={this.handleInputChange}
              />
              <BsForm.Control.Feedback type='invalid'>
                This field is required. Ex. https://example.com/image.svg
              </BsForm.Control.Feedback>
            </BsForm.Group>
            <BsForm.Group>
              <BsForm.Control
                name='tags'
                value={this.state.formData.tags}
                type='text'
                placeholder='Tags. Ex. rust java scss'
                pattern={this.regex.tags}
                required
                onChange={this.handleInputChange}
              />
              <BsForm.Control.Feedback type='invalid'>
                This field is required. Tags must be separated with space. Ex.
                rust java scss
              </BsForm.Control.Feedback>
            </BsForm.Group>
            <BsForm.Group className='d-flex justify-content-end'>
              <Link to={PUBLIC_URL}>
                <Button
                  variant='outline-primary'
                  disabled={!this.state.isFormValid}
                  onClick={this.handleFinishEdit}
                >
                  {this.props.variant === 'add' ? 'Add' : 'Edit'}
                </Button>
              </Link>
            </BsForm.Group>
          </BsForm>
        </div>
        <Post
          variant={'preview'}
          tempPost={
            new PostObject(
              null,
              this.state.formData.title,
              this.state.formData.shortDescription,
              this.state.formData.text,
              this.props.authDisplayName,
              new Date(),
              DataUtils.convertSentenceToTagsArray(this.state.formData.tags),
              null
            )
          }
        />
      </Container>
    )
  }
}

Form.propTypes = {
  onFinishEditPost: PropTypes.func,
  authDisplayName: PropTypes.string,
  variant: PropTypes.string
}

export default Form
