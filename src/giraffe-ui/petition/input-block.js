import React from 'react'
import PropTypes from 'prop-types'

export const InputBlock = ({ name, label, onChange, type }) => (
  <div className='input-block'>
    <input
      type={type}
      id={name}
      name={name}
      onChange={onChange}
      onBlur={onChange}
    />
    <label htmlFor={name}>{label}</label>
  </div>
)

InputBlock.defaultProps = { type: 'text' }

InputBlock.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func
}
