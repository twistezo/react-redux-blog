import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'

class AboutMe extends Component {
  render() {
    return (
      <Container id='about-me'>
        <h3 className='pb-2'>About Me</h3>
        <Row className='pb-3'>
          <img
            src='https://picsum.photos/200/?random'
            alt=''
            className='rounded float-left'
            height='100'
          />
        </Row>
        <Row className='pb-1'>
          <h5>John Smith</h5>
        </Row>
        <Row className='pb-1'>
          <p>Full-stack developer</p>
        </Row>
        <Row className=''>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter' />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook' />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin' />
          </a>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github' />
          </a>
        </Row>
      </Container>
    )
  }
}

export default AboutMe
