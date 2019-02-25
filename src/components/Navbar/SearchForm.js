import React, { Component } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PUBLIC_URL } from '../../index'

class SearchForm extends Component {
  handleSearchFormInputChange = event => {
    const value = event.target.value
    this.props.handleSearchInput(value)

    let filters = Object.assign({}, this.props.filters)
    filters.searchValue = value
    this.props.filterPosts(this.props.posts, filters)
  }

  render() {
    return (
      <Form inline>
        <Link to={PUBLIC_URL + '/search'}>
          <FormControl
            className='mr-sm-2'
            name='search'
            type='text'
            value={this.props.filters.searchValue}
            placeholder='search'
            onChange={this.handleSearchFormInputChange}
          />
        </Link>
        <i className='fas fa-search' />
      </Form>
    )
  }
}

export default SearchForm
