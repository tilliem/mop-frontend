import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import queryString from 'query-string'

import SearchBar from '../components/searchbar'
import SearchResults from '../components/search-results'

const SearchPage = ({ query, pageNumber }) =>
  <div className='container background-moveon-white bump-top-1'>
    {<div className='row'>
      <div className='span12'>
        <h2 id='title' className='light'>Top petitions</h2>
        <p>You can search for petitions by issue, title, author, target, city, state, or keyword &mdash; or check out <a href='/victories.html'>recent victories</a>.</p>
        <SearchBar query={query} />
        <SearchResults query={query || ''} pageNumber={pageNumber || ''} />
      </div>
    </div>}
  </div>

SearchPage.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  params: PropTypes.object,
  query: PropTypes.string,
  pageNumber: PropTypes.string
}

function mapStateToProps(store, ownProps) {
  const parsed = queryString.parse(ownProps.location.search)

  return {
    user: store.userStore,
    query: parsed.q,
    pageNumber: parsed.page || 1
  }
}

export default connect(mapStateToProps)(SearchPage)
