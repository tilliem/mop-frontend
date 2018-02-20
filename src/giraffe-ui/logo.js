import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import Config from '../config'
export const Logo = () => (
  <Link to='/' className='logo'>
    <img src={`${Config.STATIC_ROOT}images/logo.svg`} alt='MoveOn Logo' />
  </Link>
)

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
