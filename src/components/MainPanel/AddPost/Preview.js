import React, { Component } from 'react'
import DataUtils from '../../../data/dataUtils'
import { Col } from 'react-bootstrap'

class Preview extends Component {
  componentDidMount() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  componentDidUpdate() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  render() {
    return (
      <div className='pb-4'>
        <h4>Live preview</h4>
        <Col sm={3} className='pl-0'>
          <hr />
        </Col>
        <h1>{this.props.title}</h1>
        <p>{this.props.shortDescription}</p>
        <div
          className='content pt-3'
          dangerouslySetInnerHTML={{
            __html: DataUtils.convertMarkdownToHtml(this.props.text)
          }}
        />
      </div>
    )
  }
}

export default Preview
