import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StateCheckBoxComponent from 'LegacyTheme/state-check-box'

import { actions as petitionActions } from '../actions/petitionActions'
import { appLocation } from '../routes'

class StateCheckBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: props.query,
      selectState: props.selectState
    }
    this.stateBoxChecked = this.stateBoxChecked.bind(this)
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
    return (
      <StateCheckBoxComponent
        selectState={this.props.selectState}
        onChangeState={this.stateBoxChecked}
      />
    )
  }
}

StateCheckBox.propTypes = {
  dispatch: PropTypes.func,
  selectState: PropTypes.string,
  query: PropTypes.string
}

function mapStateToProps(store, ownProps) {
  return {
    selectState: ownProps.selectState,
    query: ownProps.query
  }
}

export default connect(mapStateToProps)(StateCheckBox)
