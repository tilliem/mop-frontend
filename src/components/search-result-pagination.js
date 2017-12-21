import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'


const SearchResultPagination = ({ resultCount, pageSize, currentPage, searchNavLinks }) => {
  const nextPage = searchNavLinks.next
  const numPages = Math.min(4, Math.ceil(resultCount / pageSize))
  const pages = []
  pages.push(<li className="disabled"><a href={searchNavLinks.url}>&#171;</a></li>);      
  pages.push(<li className="active"><a href="?page={currentPage}&amp;">{currentPage}</a></li>);      
  for (var i = currentPage+1; i <= numPages; i++) {
    pages.push(<li ><a href="?page={i}&amp;">{i}</a></li>);      
  }

  return (
    <div className="pagination">
      <ul>
        {pages}
        <li><a href={nextPage}>&#187;</a></li>
      </ul>

      <p><small>Found {resultCount} results.</small></p>

    </div>

  )
}

SearchResultPagination.propTypes = {
  resultCount: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  searchNavLinks: PropTypes.object.isRequired
}


export default SearchResultPagination
