import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PostsShape, FilteredPostsShape } from '../data/propTypes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import { NavbarContainer } from '../containers/NavbarContainer'
import { SidePanelContainer } from '../containers/SidePanelContainer'
import SearchResult from '../components/MainPanel/SearchResult'
import MainBoard from '../components/MainPanel/MainBoard'
import Post from '../components/MainPanel/Post'
import { PostEditorContainer } from '../containers/PostEditorContainer'
import { SettingsContainer } from '../containers/SettingsContainer'
import { PUBLIC_URL } from '../index'
import DataUtils from '../data/dataUtils'

class App extends Component {
  constructor(props) {
    super(props)
    this.waitMessages = [
      'Feeding artificial intelligence',
      'Decorating unattractive UI',
      'Refactoring dirty code',
      'Writing fake news',
      'Patching security vulnerabilities'
    ]
    this.state = {
      error: null,
      waitMessage: DataUtils.randomArrayItem(this.waitMessages)
    }
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  componentDidUpdate(prevProps) {
    const posts = this.props.posts
    if (posts !== prevProps.posts) {
      this.setState({
        error: this.props.posts.fetchingError
      })
    }
  }

  ErrorContainer = () => {
    return (
      <div className='text-center pt-5'>
        <div className='pb-2'>
          <h2>Error. Please reload the page.</h2>
          <h5>Error message: "{this.state.error.message}"</h5>
        </div>
      </div>
    )
  }

  WaitContainer = () => {
    const currentIndex = this.waitMessages.findIndex(
      m => m === this.state.waitMessage
    )
    setTimeout(() => {
      this.setState({
        waitMessage: DataUtils.nextArrayItem(this.waitMessages, currentIndex)
      })
    }, 1000)

    return (
      <div className='wait-container'>
        <div className='container text-center h-100 d-flex flex-column justify-content-center'>
          <Row className='wait-text'>
            <Col>
              <h2 className='mb-5'>{this.state.waitMessage + `.`}</h2>
            </Col>
          </Row>
          <div className='box-loading' />
        </div>
      </div>
    )
  }

  MainContainer = () => {
    const isSignedIn = this.props.isSignedIn
    return (
      <Router>
        <div>
          <NavbarContainer />
          <Container>
            <Row className='pt-5'>
              <Col md={3} className='side-panel d-none d-lg-block'>
                <SidePanelContainer />
              </Col>
              <Col sm={12} lg={9}>
                <Switch>
                  <Route
                    exact
                    path={PUBLIC_URL + '/'}
                    component={() => (
                      <MainBoard filteredPosts={this.props.filteredPosts} />
                    )}
                  />
                  <Route
                    path={PUBLIC_URL + '/search'}
                    component={() => (
                      <SearchResult filteredPosts={this.props.filteredPosts} />
                    )}
                  />
                  <Route
                    path={PUBLIC_URL + '/post/id-:id'}
                    component={route => (
                      <Post
                        posts={this.props.posts.data}
                        variant={'final'}
                        routeParamId={route.match.params.id}
                      />
                    )}
                  />
                  {isSignedIn && (
                    <Route
                      path={PUBLIC_URL + '/addpost'}
                      component={() => <PostEditorContainer variant={'add'} />}
                    />
                  )}
                  {isSignedIn && (
                    <Route
                      path={PUBLIC_URL + '/editpost'}
                      component={() => <PostEditorContainer variant={'edit'} />}
                    />
                  )}
                  {isSignedIn && (
                    <Route
                      path={PUBLIC_URL + '/settings'}
                      component={SettingsContainer}
                    />
                  )}
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    )
  }

  render() {
    if (this.props.posts.data.length !== 0 && this.state.error === null) {
      return <this.MainContainer />
    } else if (this.state.error !== null) {
      return <this.ErrorContainer />
    } else {
      return <this.WaitContainer />
    }
  }
}

App.propTypes = {
  posts: PostsShape,
  filteredPosts: FilteredPostsShape,
  isSignedIn: PropTypes.bool,
  fetchPosts: PropTypes.func
}

export default App
