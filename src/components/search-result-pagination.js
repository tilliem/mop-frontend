import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const SearchResultPagination = ({ resultCount, pageSize, currentPage, searchNavLinks, query }) => {

  const q = query || ''
  const nextPage = searchNavLinks ? searchNavLinks.next : ''
  const pageNow = searchNavLinks ? searchNavLinks.url : ''

  const parsedPreviousPageLink = (location.query !== undefined ? location.query.pageNow - 1  : 0)
  const parsedNextPageLink = (location.query !== undefined ? location.query.nextPage  : 0)
  const nextPageLinkUrl = `find?q=${q}&page=${parsedNextPageLink.page}`
  const prevPageLinkUrl = `find?q=${q}&page=${parsedPreviousPageLink}`

  const numPages = Math.ceil(resultCount / pageSize)
  const pages = []

  pages.push(<li className='disabled prevLink' key={0} ><Link to={prevPageLinkUrl}>&#171;</Link></li>)

  const startPage = Math.max(1, currentPage - 3)
  const endPage = Math.min(currentPage + 3, numPages)

  for (let i = startPage; i <= endPage; i++) {
    if (i === currentPage) {
      const url = `find?q=${q}&page=${currentPage}`
      pages.push(<li className='active pagelink' key={i}><Link to={url}>{currentPage}</Link></li>)
    } else {
      const url = `find?q=${q}&page=${i}`
      pages.push(<li className='pagelink' key={i} ><Link to={url}>{i}</Link></li>)
    }
  }

  return (
    <div className='pagination'>
      <ul>
        {pages}
        <li key={endPage} ><Link className='nextLink' to={nextPageLinkUrl}>&#187;</Link></li>
      </ul>
      <p><small>Found {resultCount} results.</small></p>
    </div>
  )
}

SearchResultPagination.propTypes = {
  resultCount: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  searchNavLinks: PropTypes.object.isRequired,
  query: PropTypes.string
}

export default SearchResultPagination
