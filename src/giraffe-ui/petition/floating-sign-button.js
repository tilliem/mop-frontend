import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

export const FloatingSignButton = ({ onClick, visible }) => (
  <div
    className={cx('sign-form__fixed-button', {
      'sign-form__fixed-button--hidden': !visible
    })}
  >
    <button onClick={onClick}>Sign Now</button>
  </div>
)

FloatingSignButton.propTypes = {
  onClick: PropTypes.func,
  visible: PropTypes.bool
}
