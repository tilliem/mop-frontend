import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { actions as petitionActions } from '../actions/petitionActions.js'
import { appLocation } from '../routes.js'

import SearchResultPaginationComponent from 'LegacyTheme/search-result-pagination'

class SearchResultPagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: props.query || '',
      selectState: props.selectState || ''
    }

    this.changePage = this.changePage.bind(this)
  }

  changePage(newPage, newUrl) {
    if (newPage !== this.props.currentPage) {
      const dispatch = this.props.dispatch
      dispatch(
        petitionActions.searchPetitions(
          this.props.query,
          newPage,
          this.props.selectState
        )
      )
      appLocation.push(newUrl)
    }
  }

  render() {
    const q = this.props.query || ''
    const currentPage = this.props.currentPage
    const resultsCount = this.props.resultsCount
    const pageSize = this.props.pageSize

    const nextPage = currentPage + 1
    const prevPage = Math.max(1, currentPage - 1)

    const nextPageLinkUrl = `/find?q=${q}&page=${nextPage}`
    const prevPageLinkUrl = `/find?q=${q}&page=${prevPage}`

    const numPages = Math.ceil(resultsCount / pageSize)
    const pages = []

    if (currentPage === 1) {
      pages.push(
        <li className='disabled prevLink' key={0}>
          <Link onClick={() => this.changePage(prevPage, prevPageLinkUrl)}>
            &#171;
          </Link>
        </li>
      )
    } else {
      pages.push(
        <li className='prevLink' key={0}>
          <Link onClick={() => this.changePage(prevPage, prevPageLinkUrl)}>
            &#171;
          </Link>
        </li>
      )
    }

    const startPage = Math.max(1, currentPage - 3)
    const endPage = Math.min(currentPage + 3, numPages)

    for (let i = startPage; i <= endPage; i++) {
      if (i === currentPage) {
        const url = `find?q=${q}&page=${currentPage}`
        pages.push(
          <li className='active pagelink' key={i}>
            <Link onClick={() => this.changePage(i, url)}>{currentPage} </Link>
          </li>
        )
      } else {
        const url = `find?q=${q}&page=${i}`
        pages.push(
          <li className='pagelink' key={i}>
            <Link onClick={() => this.changePage(i, url)}>{i}</Link>
          </li>
        )
      }
    }

    return (
      <SearchResultPaginationComponent
        pages={pages}
        resultsCount={resultsCount}
        onClickNext={() => this.changePage(nextPage, nextPageLinkUrl)}
      />
    )
  }
}

SearchResultPagination.defaultProps = {
  resultsCount: false
}

SearchResultPagination.propTypes = {
  resultsCount: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]).isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  searchNavLinks: PropTypes.object.isRequired,
  selectState: PropTypes.string,
  dispatch: PropTypes.func,
  query: PropTypes.string
}

export default connect()(SearchResultPagination)
