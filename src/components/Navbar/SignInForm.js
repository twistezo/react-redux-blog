import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Col, Row, Button, Modal } from 'react-bootstrap'

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        email: '',
        password: ''
      },
      formValidation: {
        email: false,
        password: false
      },
      isFormValid: false,
      isFormValidated: false,
      authFailed: false
    }
  }

  handleSignIn = () => {
    this.props
      .signIn(this.state.formData.email, this.state.formData.password)
      .then(result => {
        if (result.isSignedIn === false && result.errorMessage !== '') {
          this.setState({
            ...this.state,
            formData: {
              ...this.state.formData,
              password: ''
            },
            authFailed: true
          })
        } else {
          this.setState({ ...this.state, authFailed: false })
          this.handleHideSignInModal()
        }
      })
  }

  handleHideSignInModal = () => {
    this.props.onSignInFormHide()
  }

  handleFormInputChange = event => {
    const targetName = event.target.name
    const targetValue = event.target.value
    const isFieldValid = event.target.checkValidity() === true
    let formValidation = { ...this.state.formValidation }
    formValidation[targetName] = isFieldValid

    this.setState(() => ({
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
          <Form className='pt-3' validated={this.state.isFieldValidated}>
            <Form.Group>
              <Form.Control
                name='email'
                value={this.state.formData.email}
                type='email'
                placeholder='Email'
                required
                onChange={this.handleFormInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                Incorrect email format.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                name='password'
                value={this.state.formData.password}
                type='password'
                placeholder='Password'
                required
                onChange={this.handleFormInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                Password is required.
              </Form.Control.Feedback>
            </Form.Group>
            {this.state.authFailed && (
              <Row className='pt-2 text-center'>
                <Col>
                  <div className='alert alert-danger' role='alert'>
                    Wrong email or password.
                  </div>
                </Col>
              </Row>
            )}
            <Row className='pt-3 pb-3 text-center'>
              <Col>
                <Button
                  variant='outline-info'
                  onClick={this.handleHideSignInModal}
                >
                  Back
                </Button>
              </Col>
              <Col>
                <Button
                  variant='outline-info'
                  disabled={!this.state.isFormValid}
                  onClick={this.handleSignIn}
                >
                  Ok
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

SignInForm.propTypes = {
  signIn: PropTypes.func,
  onSignInFormHide: PropTypes.func,
  signInModalShow: PropTypes.bool,
}

export default SignInForm
