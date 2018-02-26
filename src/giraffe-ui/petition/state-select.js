import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { states, armedForcesRegions } from '../../lib/state-abbrev'

import CaretDownSvg from '../svgs/caret-down.svg'

export const StateSelect = ({ value, onChange, className }) => (
  <div className={cx('input-block', className, { active: !!value })}>
    <select name='state' id='state' className={className} onChange={onChange}>
      <option></option>
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
    <CaretDownSvg className='select-caret' />
    <label htmlFor='country'>State*</label>
  </div>
)

StateSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string
}
