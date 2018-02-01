import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions as petitionActions } from '../actions/petitionActions.js'
import { getStateFullName } from './state-abbrev.js'
import { appLocation } from '../routes.js'

class StateCheckBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stateChecked: true,
      query: props.query,
      selectState: props.selectState
    }
    this.stateBoxChecked = this.stateBoxChecked.bind(this)
  }

  stateBoxChecked(e) {
    const { query, dispatch, selectState } = this.props
    console.log('location-->', this.props.params);
    e.preventDefault()
    if(e){
      this.setState({
        stateChecked: false,
        selectState: '',
        query: query
      })

      appLocation.push(`/find/?q=${query}`)
      const currentPage = 1
      dispatch(petitionActions.searchPetitions(query, currentPage, this.state.selectState))
    }
  }

  render() {
    const { selectState, location } = this.props
    const stateFullName = getStateFullName(selectState)

    return (
      <div>
        <label htmlFor='state-checkbox'>
          <input id='state-checkbox' className='search-filter margin-top-0' type='checkbox' name='state' value={selectState} onChange={this.stateBoxChecked} />
          Only petitions from {stateFullName}
        </label>
      </div>
    )
  }
}

StateCheckBox.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  location: PropTypes.object,
  selectState: PropTypes.string,
  query: PropTypes.string,
  currentPage: PropTypes.string,
  dispatch: PropTypes.func
}

function mapStateToProps(store, ownProps) {
  console.log('params:', ownProps);
  return {
    selectState: ownProps.selectState,
    query: ownProps.query
  }
}

export default connect(mapStateToProps)(StateCheckBox)
