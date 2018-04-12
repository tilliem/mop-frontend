import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Scrollchor from 'react-scrollchor'

export const FloatingSignButton = ({ onClick, visible, scrollTarget }) => (
  <div
    className={cx('sign-form__fixed-button', {
      'sign-form__fixed-button--hidden': !visible
    })}
  >
    <Scrollchor
      animate={{ offset: -150 }}
      to={scrollTarget}
      afterAnimate={onClick}
    >
      <button>Sign Now</button>
    </Scrollchor>
  </div>
)

FloatingSignButton.propTypes = {
  onClick: PropTypes.func,
  visible: PropTypes.bool,
  scrollTarget: PropTypes.string
}
