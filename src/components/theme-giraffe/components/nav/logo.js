import React from 'react'
import { Link } from 'react-router'
export const Logo = () => (
  <Link to='/' className='logo'>
    <img
      src='http://moveon-dev.netlify.com/images/logo.svg'
      alt='Move On Logo'
    />
  </Link>
)

export default Logo
