import React, { Component } from 'react'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

class Settings extends Component {
  handleRemoveAllPosts = () => {
    console.log('handleRemoveAllPosts')
  }

  handleUserDataChange = () => {
    console.log('handleUserDataChange')
  }

  render() {
    return (
      <Container>
        <h4>Settings</h4>
        <hr className='pb-3' />
        <h5 className='pb-1'>For debugging purposes</h5>
        <Col className='pb-5'>
          <Row className='pb-2 d-flex align-items-center'>
            <Col sm={4} className='pl-0'>
              <span>Remove all posts:</span>
            </Col>
            <Col sm={2} className='d-flex justify-content-end'>
              <Button className='ml-2' onClick={this.handleRemoveAllPosts}>
                Remove
              </Button>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col sm={4} className='pl-0'>
              <span>Generate new random posts:</span>
            </Col>
            <Col sm={2} className='d-flex justify-content-end'>
              <Button className='ml-2' onClick={this.handleRemoveAllPosts}>
                Generate
              </Button>
            </Col>
          </Row>
        </Col>
        <h5 className='pb-2'>User data</h5>
        <Form>
          <Col sm={6} className='pl-0'>
            <Form.Group>
              <Form.Control
                name='displayName'
                // value={this.state.formInput.title}
                type='text'
                placeholder='Name'
                required
                maxLength='30'
                // onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='email'
                type='email'
                // value={this.state.formInput.shortDescription}
                placeholder='Email'
                required
                // onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group className='d-flex justify-content-end'>
              <Button onClick={this.handleUserDataChange}>Change</Button>
            </Form.Group>
          </Col>
        </Form>
      </Container>
    )
  }
}

export default Settings
