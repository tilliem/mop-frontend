import React from 'react'
import PropTypes from 'prop-types'

import { getStateFullName } from '../../lib'

const StateCheckBox = ({ selectState, onChangeState }) => (
  <div>
    <label htmlFor='state-checkbox'>
      <input
        id='state-checkbox'
        className='search-filter margin-top-0'
        type='checkbox'
        name='state'
        value={selectState}
        onChange={onChangeState}
        checked
      />
      Only petitions from {getStateFullName(selectState)}
    </label>
  </div>
)

StateCheckBox.propTypes = {
  selectState: PropTypes.string,
  onChangeState: PropTypes.func
}

export default StateCheckBox
