import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import AboutMe from './AboutMe'
import { TagsContainer } from '../../containers/TagsContainer'
import { ArchivesContainer } from '../../containers/ArchivesContainer'

class SidePanel extends Component {
  render() {
    return (
      <Container>
        <Row className='pb-5'>
          <AboutMe />
        </Row>
        <Row className='pb-5'>
          <TagsContainer />
        </Row>
        <Row className='pb-5'>
          <ArchivesContainer />
        </Row>
      </Container>
    )
  }
}

export default SidePanel
