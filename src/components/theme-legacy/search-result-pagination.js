import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const SearchResultPagination = ({ pages, onClickNext, resultCount }) => (
  <div className='pagination'>
    <ul>
      {pages}
      <li>
        <Link
          className='nextLink'
          onClick={onClickNext}
        >
          &#187;
        </Link>
      </li>
    </ul>
    {resultCount === false ? (
      <p>
        <small>Loading ...</small>
      </p>
    ) : (
      <p>
        <small>Found {resultCount} results.</small>
      </p>
    )}
  </div>
)

SearchResultPagination.propTypes = {
  pages: PropTypes.array,
  onClickNext: PropTypes.func,
  resultCount: PropTypes.number
}

export default SearchResultPagination
