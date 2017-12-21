import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchPetitions } from '../actions/petitionActions.js'
import SearchResultPagination from '../components/search-result-pagination'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { user, searchPetitions } = this.props
    searchPetitions();
  }

  render() {
    const { user, searchResults } = this.props
    const resultCount = searchResults.count
    const pageSize = searchResults.page_size
    const results = searchResults._embed
    const searchNavLinks = searchResults._links
    const currentPage = 1 // todo

    return (
      <div id="search-results">
          <div className="result">
            <div className="result-text">
              <p className="result-name">
              <a className="size-medium-large font-heavy" href="http://pac.petitions.moveon.org/sign/support-the-student-loan/?source=search">
                  Support Student Loan Forgiveness
              </a>
              </p>
              <p className="size-small">http://pac.petitions.moveon.org/sign/support-the-student-loan/</p>
              <p className="size-medium">Total outstanding student loan debt in America is expected to exceed $1.4 TRILLION this year. Millions of hardworking, taxpaying, educated Americans are being crushed under the weight of their educati...</p>
            </div>
          </div>
        <SearchResultPagination resultCount={resultCount} pageSize={pageSize} currentPage={currentPage} searchNavLinks={searchNavLinks}/>
      </div>
    )
  }
}

SearchResults.propTypes = {
  user: PropTypes.object,
  searchResults: PropTypes.object
}

const mapStateToProps = (store, ownProps) => {
  const searchResults = store.petitionSearchStore.searchResults;
  return {
    searchResults: searchResults
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchPetitions: () =>
    dispatch(searchPetitions())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
