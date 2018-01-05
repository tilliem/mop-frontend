import React from 'react'
import PropTypes from 'prop-types'

const SearchResultPagination = ({ resultCount, pageSize, currentPage, searchNavLinks, query }) => {
  const q = query || ''
  console.log('q:', q);
  const nextPage = searchNavLinks.next
  const numPages = Math.ceil(resultCount / pageSize)
  const pages = []
  pages.push(<li className='disabled'><a href={searchNavLinks.url}>&#171;</a></li>)

  const startPage = Math.max(1, currentPage - 3)
  const endPage = Math.min(currentPage + 3, numPages)

  for (let i = startPage; i <= endPage; i++) {
    debugger;
    if(i == currentPage){
      pages.push(<li className='active'><a href={'/#/find?query=' + q + '&page=' + currentPage}>{currentPage}</a></li>)
    } else {
      pages.push(<li><a href={'/#/find?query=' + q + '&page='+ i}>{i}</a></li>)
    }
  }

  return (
    <div className='pagination'>
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
  searchNavLinks: PropTypes.object.isRequired,
  query: PropTypes.string
}


export default SearchResultPagination
