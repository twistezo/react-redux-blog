import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PostsDataShape, FiltersShape, AuthShape } from '../../data/propTypes'
import { Link } from 'react-router-dom'
import { Navbar as BsNavbar, Button, Container } from 'react-bootstrap'
import SearchForm from './SearchForm'
import SignInForm from './SignInForm'
import { PUBLIC_URL } from '../../index'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signInModalShow: false,
      mobileMenuVisible: false,
      isNightMode: false
    }
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

  handleMobileMenuClick = () => {
    let sideBarColumn = document.querySelector('.side-panel')
    let mobileMenuVisible = this.state.mobileMenuVisible
    let mobileMenuButton = document.querySelector('.mobile-menu-button')

    if (!mobileMenuVisible) {
      // hide menu on `lg` sizes
      sideBarColumn.classList.remove('slide-in-left-rev')
      sideBarColumn.classList.add('slide-in-left')
      sideBarColumn.classList.remove('d-none')
      sideBarColumn.classList.remove('d-lg-block')
      // animate button
      mobileMenuButton.classList.remove('rotate-90-cw-reverse')
      mobileMenuButton.classList.add('rotate-90-cw')
    } else {
      // hide menu on `lg` sizes
      sideBarColumn.classList.remove('slide-in-left')
      sideBarColumn.classList.add('slide-in-left-rev')
      setTimeout(() => {
        sideBarColumn.classList.add('d-none')
        sideBarColumn.classList.add('d-lg-block')
      }, 250)
      // animate button
      mobileMenuButton.classList.remove('rotate-90-cw')
      mobileMenuButton.classList.add('rotate-90-cw-reverse')
    }

    mobileMenuVisible = !mobileMenuVisible
    this.setState({ ...this.state, mobileMenuVisible })
  }

  handleThemeChange = () => {
    let body = document.querySelector('body')
    let isNightMode = this.state.isNightMode
    if (!isNightMode) {
      body.classList.add('night-mode')
    } else {
      body.classList.remove('night-mode')
    }
    isNightMode = !isNightMode
    this.setState({ ...this.state, isNightMode })
  }

  render() {
    const isSignedIn = this.props.auth.isSignedIn
    return (
      <BsNavbar className='sticky-top'>
        <Container className='d-flex flex-wrap align-items-center'>
          <Button
            className='d-lg-none order-0 mr-1'
            variant='outline-info'
            onClick={this.handleMobileMenuClick}
          >
            <i className='mobile-menu-button fas fa-bars' />
          </Button>
          <Link
            className='navbar-brand order-1'
            to={PUBLIC_URL + '/'}
            onClick={this.handleLogoClick}
          >
            <Button variant='outline-info' className='d-sm-none d-block'>
              <i className='fas fa-home' />
            </Button>
            <span className='d-none d-sm-block'>John's blog</span>
          </Link>
          <SearchForm // order-2 flex-fill
            posts={this.props.posts}
            filters={this.props.filters}
            filterPosts={this.props.filterPosts}
            handleSearchInput={this.props.handleSearchInput}
          />
          {isSignedIn && (
            <div className='order-5 flex-fill ml-2 pl-1 pl-lg-0 ml-lg-0 mt-1 mt-lg-0'>
              {'Hello, ' + this.props.auth.displayName + '!'}
            </div>
          )}
          {isSignedIn && (
            <Link className='order-6 mt-1 mt-lg-0' to={PUBLIC_URL + '/addpost'}>
              <Button variant='outline-info'>
                <i className='fas fa-pen-alt' />
              </Button>
            </Link>
          )}
          {isSignedIn && (
            <Link
              className='order-7 ml-1 mt-1 mt-lg-0'
              to={PUBLIC_URL + '/settings'}
            >
              <Button variant='outline-info'>
                <i className='fas fa-cogs' />
              </Button>
            </Link>
          )}
          <Button
            className='theme-switcher order-3 order-sm-8 ml-1'
            variant='outline-info'
            onClick={this.handleThemeChange}
          >
            {this.state.isNightMode ? (
              <i className='fas fa-lightbulb' />
            ) : (
              <i className='fas fa-lightbulb' />
            )}
          </Button>
          <Link className='order-4 order-sm-9 pl-1' to={PUBLIC_URL}>
            <Button variant='outline-info' onClick={this.handleSignInClick}>
              {isSignedIn ? (
                <div>
                  <span className='d-none d-md-block'>
                    Sign out &nbsp;
                    <i className='fas fa-sign-out-alt' />
                  </span>
                  <span className='d-md-none d-block'>
                    <i className='fas fa-sign-out-alt' />
                  </span>
                </div>
              ) : (
                <div>
                  <span className='d-none d-md-block'>
                    Sign in &nbsp;
                    <i className='fas fa-sign-in-alt' />
                  </span>
                  <span className='d-md-none d-block'>
                    <i className='fas fa-sign-in-alt' />
                  </span>
                </div>
              )}
            </Button>
          </Link>
          <SignInForm
            signInModalShow={this.state.signInModalShow}
            onSignInFormHide={this.handleHideSignInModal}
            auth={this.props.auth}
            signIn={this.props.signIn}
          />
        </Container>
      </BsNavbar>
    )
  }
}

Navbar.propTypes = {
  posts: PostsDataShape,
  filters: FiltersShape,
  auth: AuthShape,
  filterPosts: PropTypes.func,
  handleSearchInput: PropTypes.func,
  resetFilters: PropTypes.func,
  signIn: PropTypes.func,
  signOut: PropTypes.func
}

export default Navbar
