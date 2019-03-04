import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PostsDataShape, FiltersShape } from '../../data/propTypes'
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
      <Form className='order-2 flex-fill mr-3' inline>
        <Link to={PUBLIC_URL + '/search'}>
          <FormControl
            className='nav-search-input'
            name='search'
            type='text'
            value={this.props.filters.searchValue}
            placeholder='search'
            onChange={this.handleSearchFormInputChange}
          />
        </Link>
        <i className='fas fa-search d-none d-sm-block' />
      </Form>
    )
  }
}

SearchForm.propTypes = {
  posts: PostsDataShape,
  filters: FiltersShape,
  handleSearchInput: PropTypes.func,
  filterPosts: PropTypes.func
}

export default SearchForm
