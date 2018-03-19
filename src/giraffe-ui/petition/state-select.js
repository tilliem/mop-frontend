import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getRegions, armedForcesRegions } from '../../lib'

import CaretDownSvg from '../svgs/caret-down.svg'

export const StateSelect = ({ value, onChange, className, onlyStates }) => (
  <div className={cx('input-block', className, { active: !!value })}>
    <select name='state' id='state' className={className} onChange={onChange}>
      <option />
      {getRegions(onlyStates).map(([val, text]) => (
        <option key={val} value={val}>
          {text}
        </option>
      ))}
      {!onlyStates &&
        armedForcesRegions.map(([val, text]) => (
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
  className: PropTypes.string,
  onlyStates: PropTypes.bool
}
