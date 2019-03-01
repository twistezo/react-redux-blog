import React, { Component } from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import FormattingHelp from './FormattingHelp'
import DataUtils from '../../../data/dataUtils'

class Helper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFormattingHelp: false,
      shouldClearPastedExample: false
    }
  }

  componentDidUpdate() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  handleShowFormattingHelp = () => {
    const current = this.state.showFormattingHelp
    this.setState({
      ...this.state,
      showFormattingHelp: !current
    })
  }

  handlePasteExample = () => {
    const shouldClearPastedExample = !this.state.shouldClearPastedExample
    const generatedExample = DataUtils.generateExampleMarkdownPost()
    const title = shouldClearPastedExample ? generatedExample.title : ''
    const shortDescription = shouldClearPastedExample
      ? generatedExample.shortDescription
      : ''
    const text = shouldClearPastedExample ? generatedExample.text : ''
    const mainImage = generatedExample.randomImageSrc

    this.props.onPasteExample({
      title,
      shortDescription,
      text,
      mainImage
    })
    this.setState({
      ...this.state,
      shouldClearPastedExample
    })
  }

  Helper = () => {
    return (
      <div className='pb-4'>
        <h5 className='pb-1'>Need a little help?</h5>
        <Col className='pb-4'>
          <Row className='pb-2 d-flex align-items-center'>
            <Col sm={4} className='pl-0'>
              <span>Formatting options:</span>
            </Col>
            <Col sm={2} className='d-flex justify-content-end'>
              <Button
                className='ml-2'
                variant='outline-primary'
                onClick={this.handleShowFormattingHelp}
              >
                {this.state.showFormattingHelp ? 'Hide' : 'Show'}
              </Button>
            </Col>
          </Row>
          <Row className='d-flex align-items-center'>
            <Col sm={4} className='pl-0'>
              <span>Example post:</span>
            </Col>
            <Col sm={2} className='d-flex justify-content-end'>
              <Button
                className='ml-2'
                variant='outline-primary'
                onClick={this.handlePasteExample}
              >
                {this.state.shouldClearPastedExample ? 'Clear' : 'Paste'}
              </Button>
            </Col>
          </Row>
        </Col>
      </div>
    )
  }

  render() {
    return (
      <Container>
        <this.Helper />
        {this.state.showFormattingHelp && <FormattingHelp />}
      </Container>
    )
  }
}

export default Helper
