import React, { Component } from "react";
import { Container, Alert, Badge } from "react-bootstrap";

class Archives extends Component {
  onDateClick = (event, year, month) => {
    this.props.switchDateState({ year, month });
    this.props.filterPosts(this.props.posts, this.props.filters);
    event.preventDefault();
  };

  Dates = () => {
    const dates = this.props.filters.dates;
    return dates.length > 0
      ? dates.map(date => (
          <ul key={date.year} className="list-unstyled">
            <Alert.Link onClick={event => this.onDateClick(event, date.year)}>
              {date.year}
              {date.yearState ? <i className="far fa-check-square ml-2" /> : ""}
            </Alert.Link>
            {date.months.map(month => (
              <li key={month.name}>
                <Alert.Link
                  onClick={event =>
                    this.onDateClick(event, date.year, month.name)
                  }
                >
                  {month.name}
                  {month.state ? (
                    <i className="far fa-check-square ml-2" />
                  ) : (
                    <Badge variant="secondary" className="ml-2">
                      {month.quantity}
                    </Badge>
                  )}
                </Alert.Link>
              </li>
            ))}
          </ul>
        ))
      : "";
  };

  render() {
    return (
      <Container>
        <h4>Archive posts</h4>
        <this.Dates />
      </Container>
    );
  }
}

export default Archives;
