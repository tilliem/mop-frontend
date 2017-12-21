import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchResultLoader } from '../loaders/petition.js'
import SearchBar from '../components/searchbar'
import SearchResults from '../components/search-results'

import { actions as searchActions } from '../actions/petitionActions.js'

class SearchPage extends React.Component {
  componentWillMount() {
    const self = this
    const { dispatch, query } = this.props
  }

  render() {
    return (
      <div className="container background-moveon-white bump-top-1">
		{<div className="row">
				<div className="span12">
					<h2 id="title" className="light">Top petitions</h2>
					<p>
					You can search for petitions by issue, title, author, target, city, state, or keyword &mdash; or check out <a href="/victories.html">recent victories</a>.
					</p>

					<SearchBar />
					<SearchResults user={this.props.user} query={this.props.query || ''} />
				</div>
        </div>}
      </div>
    )
  }

}

SearchPage.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  params: PropTypes.object,
  query: PropTypes.string
}

function mapStateToProps(store, ownProps) {
	const queryString = require('query-string')
	var parsed = queryString.parse(ownProps.location.search)
  console.log('parsed', parsed);
  console.log('parsed q', parsed.query);
	return {
		user: store.userStore,
		query: parsed.query
	}
}

export default connect(mapStateToProps)(SearchPage)
