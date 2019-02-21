import React, { Component } from "react";
import { Container, Alert, Badge } from "react-bootstrap";

class Archives extends Component {
  onDateClick = (event, year, month) => {
    this.props.switchDateState({ year, month });
    this.props.filterPosts(
      this.props.posts,
      this.props.tags,
      this.props.dates,
      this.props.searchValue
    );
    event.preventDefault();
  };

  Dates = () => {
    return this.props.dates.map(date => (
      <ul key={date.year} className="list-unstyled">
        <Alert.Link onClick={event => this.onDateClick(event, date.year)}>
          {date.year}
          <Badge variant="light" className="ml-1">
            {date.yearState ? "x" : ""}
          </Badge>
        </Alert.Link>
        {date.months.map(month => (
          <li key={month.name}>
            <Alert.Link
              onClick={event => this.onDateClick(event, date.year, month.name)}
            >
              {month.name}
              <Badge variant="success" className="ml-1">
                {month.quantity}
              </Badge>
              <Badge variant="light" className="ml-1">
                {month.state ? "x" : ""}
              </Badge>
            </Alert.Link>
          </li>
        ))}
      </ul>
    ));
  };

  render() {
    return (
      <Container className="Archives">
        Archive posts:
        <this.Dates />
      </Container>
    );
  }
}

export default Archives;
