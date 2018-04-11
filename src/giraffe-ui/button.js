import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

export const Submit = ({ children, onClick }) => (
  <button className='btn' onClick={onClick} type='submit'>
    {children}
  </button>
)

Submit.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export const Button = ({ children, linkTo, large }) => (
  <Link to={linkTo}>
    <button className={cx('btn', 'azure', { 'btn--large': large })}>
      {children}
    </button>
  </Link>
)

Button.propTypes = {
  children: PropTypes.node,
  linkTo: PropTypes.string,
  large: PropTypes.bool
}
