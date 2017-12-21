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
    const { user, searchPetitions, query } = this.props
    searchPetitions(query);
  }

  render() {
    const { user, searchResults } = this.props
    const resultCount = searchResults.count
    const pageSize = searchResults.page_size
    const resultsEmbed = searchResults._embed
    const searchNavLinks = searchResults._links
    const currentPage = 1 // todo

    const nextPage = searchNavLinks.next
    const numPages = Math.min(4, Math.ceil(resultCount / pageSize))

    var resultsList = resultsEmbed.map(function(result, index){
                      return <div className="result" key={index}>
                              <div className="result-text">
                                <p className="result-name">
                                <a className="size-medium-large font-heavy" href={"http://pac.petitions.moveon.org/sign/" + result.short_name + "/?source=search"}>
                                    {result.name}
                                </a>
                                </p>
                                <p className="size-small">http://pac.petitions.moveon.org/sign/{result.short_name}/</p>
                                <p className="size-medium">{result.blurb}</p>
                              </div>
                            </div>;
                      })


    return (
      <div id="search-results">
        {resultsList}
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
  searchPetitions: (query) =>
    dispatch(searchPetitions(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
