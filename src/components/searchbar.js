import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions as petitionActions } from '../actions/petitionActions.js'
import { appLocation } from '../routes.js'

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
      selectState: props.selectState || '',
      currentPage: props.currentPage || '1'
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
    const currentPage = this.state.currentPage || 1

    dispatch(petitionActions.searchPetitions(query, currentPage, selState))

    const queryString = []
    if (this.state.query) {
      queryString.push(`q=${this.state.query}`)
    }
    if (this.state.selectState) {
      queryString.push(`state=${this.state.selectState}`)
    }
    if (queryString.length) {
      const fullQuery = queryString.join('&')
      appLocation.push(`/find/?${fullQuery}`)
    }
  }

  render() {
    const size  = this.props.size

    const longSearchBar = (
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
    )

    const shortSearchBar = (
      <div className="search">
        <form className="" onSubmit={this.submitQuery}>
          <input name="q" type="text" id="search-box2" className="margin-top-0 margin-right-2" value={this.state.query} onChange={this.selectQuery} />
          <button type="submit" className="background-moveon-dark-blue"> Search</button>
        </form>
      </div>
    )

    return (
      <div className="search-form-div">
        { size === "long" ? longSearchBar : shortSearchBar }
      </div>
    )
  }
}

SearchBar.propTypes = {
  size: PropTypes.string,
  query: PropTypes.string,
  currentPage: PropTypes.string,
  dispatch: PropTypes.func,
  selectState: PropTypes.string
}

export default connect()(SearchBar)
