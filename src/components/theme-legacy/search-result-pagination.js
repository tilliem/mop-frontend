import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const SearchResultPagination = ({ pages, onClickNext, resultsCount }) => (
  <div className='pagination'>
    <ul>
      {pages}
      <li>
        <Link className='nextLink' onClick={onClickNext}>
          &#187;
        </Link>
      </li>
    </ul>
    {resultsCount === false ? (
      <p>
        <small>Loading ...</small>
      </p>
    ) : (
      <p>
        <small>Found {resultsCount} results.</small>
      </p>
    )}
  </div>
)

SearchResultPagination.propTypes = {
  pages: PropTypes.array,
  onClickNext: PropTypes.func,
  resultsCount: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
}

export default SearchResultPagination
