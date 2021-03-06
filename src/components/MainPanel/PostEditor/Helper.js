import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Col, Row } from 'react-bootstrap'
import FormattingHelp from './FormattingHelp'
import DataUtils from '../../../data/dataUtils'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    const mainImage = shouldClearPastedExample
      ? generatedExample.randomImageSrc
      : ''
    const tags = shouldClearPastedExample ? generatedExample.tags : []

    this.setState({
      ...this.state,
      shouldClearPastedExample
    })
    this.props.onPasteExample({
      title,
      shortDescription,
      text,
      mainImage,
      tags
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
          {this.props.variant === 'add' ? (
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
          ) : (
            ''
          )}
        </Col>
      </div>
    )
  }

  render() {
    return (
      <Container>
        <this.Helper />
        {this.state.showFormattingHelp && (
          <ReactCSSTransitionGroup
            transitionName='search-result'
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnter={false}
            transitionLeave={false}
          >
            <FormattingHelp />
          </ReactCSSTransitionGroup>
        )}
      </Container>
    )
  }
}

Helper.propTypes = {
  onPasteExample: PropTypes.func,
  variant: PropTypes.string
}

export default Helper
