import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar as BsNavbar, Button, Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import SignInForm from './SignInForm'
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
    if (this.props.isSignedIn) {
      this.props.signOut()
    } else {
      this.setState({ signInModalShow: true })
    }
  }

  handleHideSignInModal = () => {
    this.setState({ signInModalShow: false })
  }

  render() {
    const isSignedIn = this.props.isSignedIn
    return (
      <BsNavbar bg='dark' variant='light' className='sticky-top text-center'>
        <Container>
          <div className='d-flex justify-content-between flex-fill align-items-center'>
            <Link to={PUBLIC_URL + '/'} onClick={this.handleLogoClick}>
              <BsNavbar.Brand className='ml-4'>
                John Smith's cave
              </BsNavbar.Brand>
            </Link>
            <div className='d-flex'>
              <SearchForm
                posts={this.props.posts}
                filters={this.props.filters}
                filterPosts={this.props.filterPosts}
                handleSearchInput={this.props.handleSearchInput}
              />
              {isSignedIn && (
                <div className='d-flex'>
                  <div className='hello-user d-flex align-self-center ml-2'>
                    {'Hello, ' + this.props.displayName + '!'}
                  </div>
                  <Link className='ml-4' to={PUBLIC_URL + '/settings'}>
                    <Button variant='outline-info'>
                      <i className='fas fa-cogs' />
                    </Button>
                  </Link>
                  <Link className='ml-2' to={PUBLIC_URL + '/addpost'}>
                    <Button variant='outline-info'>
                      Add Post&nbsp; <i className='fas fa-pen-alt' />
                    </Button>
                  </Link>
                </div>
              )}
              <Link to={PUBLIC_URL}>
                <Button
                  className='ml-2 mr-4'
                  variant='outline-info'
                  onClick={this.handleSignInClick}
                >
                  {isSignedIn ? (
                    <div>
                      Sign out &nbsp; <i className='fas fa-sign-out-alt' />
                    </div>
                  ) : (
                    <div>
                      Sign in &nbsp; <i className='fas fa-sign-in-alt' />
                    </div>
                  )}
                </Button>
              </Link>
            </div>
          </div>
          <SignInForm
            signInModalShow={this.state.signInModalShow}
            onSignInFormHide={this.handleHideSignInModal}
            signIn={this.props.signIn}
          />
        </Container>
      </BsNavbar>
    )
  }
}

export default Navbar
