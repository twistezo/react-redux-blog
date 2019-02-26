import React, { Component } from 'react'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        email: '',
        password: ''
      }
    }
  }

  handleSignIn = () => {
    this.props.signIn(this.state.formData.email, this.state.formData.password)
    this.props.onSignInFormHide()
  }

  handleHideSignInModal = () => {
    this.props.onSignInFormHide()
  }

  handleFormInputChange = e => {
    const targetName = e.target.name
    const targetValue = e.target.value
    this.setState(() => ({
      formData: {
        ...this.state.formData,
        [targetName]: targetValue
      }
    }))
  }

  render() {
    return (
      <Modal
        show={this.props.signInModalShow}
        onHide={this.props.onSignInFormHide}
        size='sm'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='pt-3'>
            <Form.Group>
              <Form.Control
                name='email'
                // value={this.state.formData.name}
                type='text'
                placeholder='Email'
                required
                onChange={this.handleFormInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='password'
                // value={this.state.formData.review}
                type='password'
                placeholder='Password'
                required
                onChange={this.handleFormInputChange}
              />
            </Form.Group>
            <Row className='pt-3 text-center'>
              <Col>
                <Button onClick={this.handleHideSignInModal}>Back</Button>
              </Col>
              <Col>
                <Button onClick={this.handleSignIn}>Ok</Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SignInForm
