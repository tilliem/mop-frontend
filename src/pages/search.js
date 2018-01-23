import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SearchBar from '../components/searchbar'
import SearchResults from '../components/search-results'

const SearchPage = ({ query, selectState, pageNumber }) =>
  <div className='moveon-petitions container background-moveon-white bump-top-1'>
    {<div className='row'>
      <div className='span12'>
        <h2 id='title' className='light'>Top petitions</h2>
        <p>You can search for petitions by issue, title, author, target, city, state, or keyword &mdash; or check out <a href='/victories.html'>recent victories</a>.</p>
        <SearchBar query={query} currentPage={pageNumber} />
        <SearchResults query={query || ''} pageNumber={pageNumber || '1'} selectState={selectState || ''} />
      </div>
    </div>}
  </div>

SearchPage.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  query: PropTypes.string,
  pageNumber: PropTypes.string,
  selectState: PropTypes.string
}

function getParams(ownProps) {
  return {
    query: ownProps.location.query.q || '',
    page: ownProps.location.query.page || '1',
    state: ownProps.location.query.state || ''
  }
}

function mapStateToProps(store, ownProps) {
  const params = getParams(ownProps)

  return {
    query: params.query,
    pageNumber: params.page,
    selectState: params.state
  }
}

export default connect(mapStateToProps)(SearchPage)
