import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Post } from "../../../data/index";
import DataUtils from "../../../data/dataUtils";
import Preview from "./Preview";
import FormattingHelp from "./FormattingHelp";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: {
        title: "",
        shortDescription: "",
        text: ""
      },
      parsedText: "",
      controllers: {
        showFormattingHelp: false,
        shouldClearPastedExample: false
      }
    };
  }

  handleShowFormattingHelp = () => {
    const current = this.state.controllers.showFormattingHelp;
    this.setState({
      ...this.state,
      controllers: { showFormattingHelp: !current }
    });
  };

  handlePasteExample = () => {
    const shouldClearPastedExample = !this.state.controllers
      .shouldClearPastedExample;
    const title = shouldClearPastedExample ? "Example title" : "";
    const shortDescription = shouldClearPastedExample
      ? "Example short description"
      : "";
    const text = shouldClearPastedExample
      ? DataUtils.generateExampleMarkdownText()
      : "";

    this.setState({
      ...this.state,
      formInput: {
        title,
        shortDescription,
        text
      },
      parsedText: text,
      controllers: {
        ...this.state.controllers,
        shouldClearPastedExample
      }
    });
  };

  handleInputChange = event => {
    let text = event.target.value;
    const parsedText =
      event.target.name === "text" ? text : this.state.parsedText;
    this.setState({
      ...this.state,
      formInput: {
        ...this.state.formInput,
        [event.target.name]: text
      },
      parsedText
    });
  };

  handleAddPost = () => {
    this.props.addPost(
      new Post(
        uuidv1(),
        this.state.formInput.title,
        this.state.formInput.shortDescription,
        this.state.parsedText,
        "twistezo",
        new Date(),
        ["#rust", "#javascript", "#linux"],
        "https://avatars.dicebear.com/v2/identicon/test.svg"
      )
    );
  };

  Form = () => {
    return (
      <div className="pt-4">
        <h4>Create your post!</h4>
        <hr />
        <Form className="pt-2">
          <Form.Group>
            <Form.Control
              name="title"
              value={this.state.formInput.title}
              type="text"
              placeholder="Post title"
              required
              maxLength="30"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="shortDescription"
              as="textarea"
              value={this.state.formInput.shortDescription}
              placeholder="Short description"
              required
              rows="3"
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="text"
              as="textarea"
              value={this.state.formInput.text}
              placeholder="Post body"
              rows="10"
              required
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Button onClick={this.handleAddPost}>Add</Button>
          </Form.Group>
        </Form>
      </div>
    );
  };

  Helper = () => {
    return (
      <div>
        <h4>Need a little help?</h4>
        <hr />
        <Col>
          <Row className="pt-2">
            <span>Formatting options:</span>
            <Button className="ml-2" onClick={this.handleShowFormattingHelp}>
              {this.state.controllers.showFormattingHelp ? "Hide" : "Show"}
            </Button>
          </Row>
          <Row className="pt-2">
            <span>Example post:</span>
            <Button className="ml-2" onClick={this.handlePasteExample}>
              {this.state.controllers.shouldClearPastedExample
                ? "Clear"
                : "Paste"}
            </Button>
          </Row>
        </Col>
      </div>
    );
  };

  render() {
    return (
      <Container>
        <this.Helper />
        {this.state.controllers.showFormattingHelp && <FormattingHelp />}
        <this.Form />
        <Preview
          title={this.state.formInput.title}
          shortDescription={this.state.formInput.shortDescription}
          parsedText={this.state.parsedText}
        />
      </Container>
    );
  }
}

export default AddPost;
