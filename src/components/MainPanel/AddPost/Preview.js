import React, { Component } from "react";
import { updateCodeSyntaxHighlighting } from "../../../index";

class Preview extends Component {
  componentDidMount() {
    updateCodeSyntaxHighlighting();
  }

  componentDidUpdate() {
    updateCodeSyntaxHighlighting();
  }

  render() {
    return (
      <div className="pt-3">
        <h4>Live preview</h4>
        <hr />
        <h1>{this.props.title}</h1>
        <p>{this.props.shortDescription}</p>
        <div
          className="content pt-3"
          dangerouslySetInnerHTML={{ __html: this.props.parsedText }}
        />
      </div>
    );
  }
}

export default Preview;
