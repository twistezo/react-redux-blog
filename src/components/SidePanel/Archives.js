import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Badge } from 'react-bootstrap'
import { PUBLIC_URL } from '../../index'

class Archives extends Component {
  onDateClick = (event, year, month) => {
    this.props.switchDateState({ year, month })
    this.props.filterPosts(this.props.posts, this.props.filters)
    event.preventDefault()
  }

  Dates = () => {
    const dates = this.props.filters.dates
    return dates.length > 0
      ? dates.map(date => (
          <ul key={date.year} className='list-unstyled'>
            <div
              className='alert-link'
              onClick={event => this.onDateClick(event, date.year)}
            >
              <Link to={PUBLIC_URL + '/search'}>
                {date.year}
                {date.yearState ? (
                  <i className='far fa-check-square ml-2' />
                ) : (
                  ''
                )}
              </Link>
            </div>
            {date.months.map(month => (
              <li key={month.name}>
                <div
                  className='alert-link'
                  onClick={event =>
                    this.onDateClick(event, date.year, month.name)
                  }
                >
                  <Link to={PUBLIC_URL + '/search'}>
                    {month.name}
                    {month.state ? (
                      <i className='far fa-check-square ml-2' />
                    ) : (
                      <Badge variant='secondary' className='ml-2'>
                        {month.quantity}
                      </Badge>
                    )}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ))
      : ''
  }

  render() {
    return (
      <Container>
        <h4>Archive posts</h4>
        <this.Dates />
      </Container>
    )
  }
}

export default Archives
