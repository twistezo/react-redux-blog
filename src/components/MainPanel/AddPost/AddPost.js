import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Post } from '../../../data/index'
import DataUtils from '../../../data/dataUtils'
import Preview from './Preview'
import FormattingHelp from './FormattingHelp'

class AddPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formInput: {
        title: '',
        shortDescription: '',
        text: '',
        mainImageSrc: ''
      },
      parsedText: '',
      controllers: {
        showFormattingHelp: false,
        shouldClearPastedExample: false
      }
    }
  }

  handleShowFormattingHelp = () => {
    const current = this.state.controllers.showFormattingHelp
    this.setState({
      ...this.state,
      controllers: { showFormattingHelp: !current }
    })
  }

  handlePasteExample = () => {
    const shouldClearPastedExample = !this.state.controllers
      .shouldClearPastedExample
    const generatedExample = DataUtils.generateExampleMarkdownPost()
    const title = shouldClearPastedExample ? generatedExample.title : ''
    const shortDescription = shouldClearPastedExample
      ? generatedExample.shortDescription
      : ''
    const text = shouldClearPastedExample ? generatedExample.text : ''
    const mainImageSrc = generatedExample.randomImageSrc

    this.setState({
      ...this.state,
      formInput: {
        title,
        shortDescription,
        text,
        mainImageSrc
      },
      parsedText: text,
      controllers: {
        ...this.state.controllers,
        shouldClearPastedExample
      }
    })
  }

  handleInputChange = event => {
    let text = event.target.value
    const parsedText =
      event.target.name === 'text' ? text : this.state.parsedText
    this.setState({
      ...this.state,
      formInput: {
        ...this.state.formInput,
        [event.target.name]: text
      },
      parsedText
    })
  }

  handleAddPost = () => {
    this.props.addPost(
      new Post(
        uuidv1(),
        this.state.formInput.title,
        this.state.formInput.shortDescription,
        this.state.parsedText,
        this.props.authDisplayName,
        new Date(),
        ['#rust', '#javascript', '#linux'],
        this.state.formInput.mainImageSrc
      )
    )
  }

  Form = () => {
    return (
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
            <Button variant='outline-primary' onClick={this.handleAddPost}>
              Add
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }

  Helper = () => {
    return (
      <div className='pb-4'>
        <h5 className='pb-1'>Need a little help?</h5>
        <Col className='pb-4'>
          <Row className='pb-2 d-flex align-items-center'>
            <Col sm={4} className='pl-0'>
              <span>Formatting options:</span>
            </Col>
            <Col sm={2} className='d-flex justify-content-end'>
              <Button
                className='ml-2'
                variant='outline-primary'
                onClick={this.handleShowFormattingHelp}
              >
                {this.state.controllers.showFormattingHelp ? 'Hide' : 'Show'}
              </Button>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col sm={4} className='pl-0'>
              <span>Example post:</span>
            </Col>
            <Col sm={2} className='d-flex justify-content-end'>
              <Button
                className='ml-2'
                variant='outline-primary'
                onClick={this.handlePasteExample}
              >
                {this.state.controllers.shouldClearPastedExample
                  ? 'Clear'
                  : 'Paste'}
              </Button>
            </Col>
          </Row>
        </Col>
      </div>
    )
  }

  render() {
    return (
      <Container>
        <h4>Write new post!</h4>
        <hr className='pb-3' />
        <this.Helper />
        {this.state.controllers.showFormattingHelp && <FormattingHelp />}
        <this.Form />
        <Preview
          title={this.state.formInput.title}
          shortDescription={this.state.formInput.shortDescription}
          parsedText={this.state.parsedText}
        />
      </Container>
    )
  }
}

export default AddPost
