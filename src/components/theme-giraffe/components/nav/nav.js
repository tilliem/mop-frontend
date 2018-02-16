import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import CloseSvg from '../../svgs/close.svg'

export const MoNav = ({ isOpenMobile, children, close }) => (
  <div
    id='nav'
    className={classNames('mo-nav', { 'nav--visible': isOpenMobile })}
  >
    <span className='mo-nav__title'>Menu</span>
    {children}
    <button
      onClick={close}
      // Can remove style when merged: https://github.com/MoveOnOrg/giraffe/pull/3
      style={{ left: 'auto' }}
      className='mo-nav__close'
    >
      <CloseSvg />
    </button>
  </div>
)

MoNav.propTypes = {
  isOpenMobile: PropTypes.bool,
  children: PropTypes.node,
  close: PropTypes.func
}
