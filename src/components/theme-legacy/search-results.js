import React from 'react'
import PropTypes from 'prop-types'

import SearchResultPagination from '../../containers/search-result-pagination'

const SearchResults = ({
  results,
  resultCount,
  pageSize,
  currentPage,
  searchNavLinks,
  query,
  setResultsRef
}) => {
  const resultsList = results.map((result, index) => (
    <div className='result search-page' key={index}>
      <div className='result-text'>
        <p className='result-name'>
          <a
            className='size-medium-large font-heavy'
            href={`https://pac.petitions.moveon.org/sign/${
              result.short_name
            }/?source=search`}
          >
            {result.name}
          </a>
        </p>
        <p className='size-small'>
          https://pac.petitions.moveon.org/sign/{result.short_name}/
        </p>
        <p className='size-medium'>{result.blurb}...</p>
      </div>
    </div>
  ))

  return (
    <div
      id='search-results'
      ref={setResultsRef}
    >
      {resultsList}
      <SearchResultPagination
        resultCount={resultCount}
        pageSize={pageSize}
        currentPage={currentPage}
        searchNavLinks={searchNavLinks}
        query={query}
      />
    </div>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array,
  resultCount: PropTypes.number,
  currentPage: PropTypes.number,
  query: PropTypes.string,
  searchNavLinks: PropTypes.array,
  pageSize: PropTypes.number,
  setResultsRef: PropTypes.func
}

export default SearchResults
