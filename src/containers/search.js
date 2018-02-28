import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'

import SearchComponent from 'LegacyTheme/search'

const Search = ({ query, selectState, pageNumber }) => (
  <DocumentTitle title={`${query} - MoveOn Petitions`}>
    <SearchComponent
      query={query}
      pageNumber={pageNumber}
      selectState={selectState}
    />
  </DocumentTitle>
)

Search.propTypes = {
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

export default connect(mapStateToProps)(Search)
