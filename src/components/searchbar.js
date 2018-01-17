import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { actions as petitionActions } from '../actions/petitionActions.js'

import StateSelect from './form/state-select'

const smallStateSelectStyle = {
  width: '20%',
  marginRight: '5px'
}

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: props.query || '',
      selectState: props.selectState || ''
    }

    this.submitQuery = this.submitQuery.bind(this)
    this.selectState = this.selectState.bind(this)
    this.selectQuery = this.selectQuery.bind(this)
  }

  selectQuery(e) {
    e.preventDefault()
    const q = e.target.value
    this.setState({
      query: q
    })
  }

  selectState(e) {
    e.preventDefault()
    const selectedState = e.target.value
    this.setState({
      selectState: selectedState
    })
  }

  submitQuery(e) {
    e.preventDefault()
    const dispatch = this.props.dispatch

    const query = this.state.query
    const selState = this.state.selectState || ''

    dispatch(petitionActions.searchPetitions(query, selState))

    let queryString = []
    if (this.state.query) {
       queryString.push(`q=${this.state.query}`)
    }
    if (this.state.selectState) {
      queryString.push(`state=${this.state.selectState}`)
    }
    if (queryString.length) {
      const fullQuery = queryString.join('&')
      this.props.router.push(`/find/?${fullQuery}`)
    }

  }


  render() {
    return (
      <div>
        <div id='search-bar-large' className='container'>
          <div className='row'>
            <div className='span7 control-group bump-top-1'>
              <form className='search' onSubmit={this.submitQuery}>
                <div className='search'>
                  <input id='searchValue' value={this.state.query} placeholder='Search Petitions' onChange={this.selectQuery} type='text' className='margin-right-1 ' />
                  <StateSelect selectText='All States' style={smallStateSelectStyle} onChange={this.selectState} value={this.state.selectState} />
                  <button type='submit' className='background-moveon-dark-blue margin-left-1'>Search</button>
                </div>
              </form>
            </div>
            <p className='lanky-header size-medium-small lh-24 bump-top-1'>Search for petitions by any keyword.</p>
          </div>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  size: PropTypes.string,
  router: PropTypes.object,
  query: PropTypes.string,
  dispatch: PropTypes.func,
  selectState: PropTypes.string
}

export default connect()(withRouter(SearchBar))
