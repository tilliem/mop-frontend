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
    // searchResultLoader().then((deps) => {
    //   self.SearchResults = deps.SearchResults.default
    //   self.forceUpdate()
    // })

    const { dispatch } = this.props
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
					<SearchResults user={this.props.user} />
				</div>
        </div>}
      </div>
    )
  }

}

SearchPage.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(store, ownProps) {
  return {
    user: store.userStore
  }
}

export default connect(mapStateToProps)(SearchPage)
