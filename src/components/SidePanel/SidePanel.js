import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import AboutMe from './AboutMe'
import Tags from './Tags'
import Archives from './Archives'

class SidePanel extends Component {
  render() {
    return (
      <Container>
        <Row className='pb-5'>
          <AboutMe />
        </Row>
        <Row className='pb-5'>
          <Tags
            posts={this.props.posts}
            filters={this.props.filters}
            switchTagState={this.props.switchTagState}
            filterPosts={this.props.filterPosts}
          />
        </Row>
        <Row className='pb-5'>
          <Archives
            posts={this.props.posts}
            filters={this.props.filters}
            switchDateState={this.props.switchDateState}
            filterPosts={this.props.filterPosts}
          />
        </Row>
      </Container>
    )
  }
}

export default SidePanel
