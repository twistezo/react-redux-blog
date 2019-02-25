import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar as BsNavbar, Form, Button, Container } from 'react-bootstrap'
import { SearchFormContainer } from '../../containers/SearchFormContainer'
import { SignInFormContainer } from '../../containers/SignInFormContainer'
import { PUBLIC_URL } from '../../index'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { signInModalShow: false }
  }

  handleLogoClick = () => {
    this.props.resetFilters(this.props.filters)
    this.props.filterPosts(this.props.posts, {
      tags: [],
      dates: [],
      searchValue: ''
    })
  }

  handleSignInClick = () => {
    if (this.props.auth.isSignedIn) {
      this.props.signOut()
    } else {
      this.setState({ signInModalShow: true })
    }
  }

  handleHideSignInModal = () => {
    this.setState({ signInModalShow: false })
  }

  render() {
    return (
      <BsNavbar bg='dark' variant='dark' className='sticky-top text-center'>
        <Container>
          <Link to={PUBLIC_URL + '/'} onClick={this.handleLogoClick}>
            <BsNavbar.Brand className='ml-4'>Home</BsNavbar.Brand>
          </Link>
          <SearchFormContainer />
          {this.props.auth.isSignedIn && (
            <div className='hello-user'>
              {'Hello, ' + this.props.auth.displayName}
            </div>
          )}
          <Form inline>
            <Link to={PUBLIC_URL + '/addpost'}>
              <Button variant='outline-info mr-4'>Add Post</Button>
            </Link>
            <Button
              variant='outline-info mr-4'
              onClick={this.handleSignInClick}
            >
              {this.props.auth.isSignedIn ? 'Sign out' : 'Sign in'}
            </Button>
          </Form>
          <SignInFormContainer
            signInModalShow={this.state.signInModalShow}
            onSignInFormHide={this.handleHideSignInModal}
          />
        </Container>
      </BsNavbar>
    )
  }
}

export default Navbar
