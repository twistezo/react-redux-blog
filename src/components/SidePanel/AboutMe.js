import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

const iconSize = { height: 40, width: 40 }

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <h4 className='pb-2'>About Me</h4>
        <Row className='ml-0 pb-3'>
          <img
            src='https://picsum.photos/200/?random'
            alt=''
            className='rounded float-left'
            height='100'
          />
        </Row>
        <Row className='ml-0 pb-2'>
          <h5>John Smith</h5>
          <span>Full-stack developer</span>
        </Row>
        <Row className='ml-0'>
          <SocialIcon
            className='mr-2'
            url='http://twitter.com/'
            style={iconSize}
          />
          <SocialIcon
            className='mr-2'
            url='http://facebook.com/'
            style={iconSize}
          />
          <SocialIcon
            className='mr-2'
            url='http://linkedin.com/'
            style={iconSize}
          />
          <SocialIcon
            className='mr-2'
            url='http://github.com/'
            style={iconSize}
          />
        </Row>
      </Container>
    )
  }
}

export default AboutMe
