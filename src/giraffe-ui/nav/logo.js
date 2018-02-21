import React from 'react'
import { Link } from 'react-router'
import Config from '../../config'
export const Logo = () => (
  <Link to='/' className='logo'>
    <img
      src={`${Config.STATIC_ROOT}images/logo.svg`}
      alt='Move On Logo'
    />
  </Link>
)

export default Logo
