import React from 'react'
import PropTypes from 'prop-types'
import { states, armedForcesRegions } from '../../../lib/state-abbrev'

const StateSelect = ({
  onChange,
  selectText,
  style,
  name = 'state',
  id = 'state_id',
  className = 'span4 state moveon-track-click margin-right-1'
}) => (
  <select
    name={name}
    id={id}
    className={className}
    onChange={onChange}
    style={style}
  >
    <option value=''>{selectText}</option>
      {Object.keys(states).map(val => (
        <option key={val} value={val}>
          {states[val]}
        </option>
      ))}
      {armedForcesRegions.map(([val, text]) => (
        <option key={text} value={val}>
          {text}
        </option>
      ))}
  </select>
)

StateSelect.propTypes = {
  onChange: PropTypes.func,
  style: PropTypes.object,
  selectText: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
}

export default StateSelect
