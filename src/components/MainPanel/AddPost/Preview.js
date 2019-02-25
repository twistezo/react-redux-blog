import React, { Component } from 'react'
import DataUtils from '../../../data/dataUtils'

class Preview extends Component {
  componentDidMount() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  componentDidUpdate() {
    DataUtils.updateCodeSyntaxHighlighting()
  }

  render() {
    return (
      <div className='pt-3'>
        <h4>Live preview</h4>
        <hr />
        <h1>{this.props.title}</h1>
        <p>{this.props.shortDescription}</p>
        <div
          className='content pt-3'
          dangerouslySetInnerHTML={{
            __html: DataUtils.convertMarkdownToHtml(this.props.parsedText)
          }}
        />
      </div>
    )
  }
}

export default Preview
