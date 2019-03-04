import PropTypes from 'prop-types'
import { Post } from './index'

export const PostsShape = PropTypes.shape({
  data: PropTypes.arrayOf(PropTypes.instanceOf(Post)),
  fetchingError: PropTypes.string
})

export const PostsDataShape = PropTypes.arrayOf(PropTypes.instanceOf(Post))

export const FilteredPostsShape = PropTypes.arrayOf(PropTypes.instanceOf(Post))

export const FiltersShape = PropTypes.shape({
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      state: PropTypes.bool
    })
  ),
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      months: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          quantity: PropTypes.number,
          state: PropTypes.bool
        })
      ),
      year: PropTypes.number,
      yearStare: PropTypes.bool
    })
  ),
  searchValue: PropTypes.string
})

export const AuthShape = PropTypes.shape({
  displayName: PropTypes.string,
  email: PropTypes.string,
  isSignedIn: PropTypes.bool,
  errorMessage: PropTypes.string
})
