import React from 'react'
import PropTypes from 'prop-types'

import { getStateFullName } from './state-abbrev.js'

class StateCheckBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stateChecked: true
    }
    this.stateBoxChecked = this.stateBoxChecked.bind(this)
  }

  stateBoxChecked(e) {
    // todo: handle unchecking event
    e.preventDefault()
  }

  render() {
    const { selectState } = this.props
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
  checkedState: PropTypes.bool,
  selectState: PropTypes.string
}

// function getParams(ownProps) {
//   return {
//     state: ownProps.location.query.state || ''
//   }
// }

// function mapStateToProps(store, ownProps) {
//   const params = getParams(ownProps)
//   return {
//     selectState: params.state
//   }
// }

export default StateCheckBox
