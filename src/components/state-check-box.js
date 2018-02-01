import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import queryString from 'query-string'

import { actions as petitionActions } from '../actions/petitionActions.js'
import { getStateFullName } from './state-abbrev.js'
import { appLocation } from '../routes.js'

class StateCheckBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: props.query,
      selectState: props.selectState
    }
    this.stateBoxChecked = this.stateBoxChecked.bind(this)
  }

  getQueryString(){
    const queryUrl = queryString.parse(window.location.hash)
    const q = queryUrl[Object.keys(queryUrl)[0]]
    this.setState({
      query: q
    })
    return queryUrl
  }

  componentWillMount(){
    this.getQueryString()
  }

  stateBoxChecked(e) {
    e.preventDefault()
    const dispatch = this.props.dispatch

    this.setState({
      selectState: ''
    })

    appLocation.push(`/find/?q=${this.state.query}`)
    const currentPage = 1
    dispatch(petitionActions.searchPetitions(this.state.query, currentPage, ''))
  }

  render() {
    const { selectState, location } = this.props
    const stateFullName = getStateFullName(selectState)

    return (
      <div>
        <label htmlFor='state-checkbox'>
          <input id='state-checkbox' className='search-filter margin-top-0' type='checkbox' name='state' value={selectState} onChange={this.stateBoxChecked} checked/>
          Only petitions from {stateFullName}
        </label>
      </div>
    )
  }
}

StateCheckBox.propTypes = {
  dispatch: PropTypes.func,
  selectState: PropTypes.string,
  query: PropTypes.string
}

function mapStateToProps(store, ownProps) {
  console.log('params:', ownProps);
  return {
    selectState: ownProps.selectState,
    query: ownProps.query
  }
}

export default connect(mapStateToProps)(StateCheckBox)
