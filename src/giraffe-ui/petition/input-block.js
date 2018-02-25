import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

export const InputBlock = ({ name, children, value, label, onChange, type }) => (
  <div className={cx('input-block', { active: !!value })}>
    {children || <input
      type={type}
      id={name}
      name={name}
      onChange={onChange}
      onBlur={onChange}
    />}
    <label htmlFor={name}>{label}</label>
  </div>
)

InputBlock.defaultProps = { type: 'text' }

InputBlock.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func
}
