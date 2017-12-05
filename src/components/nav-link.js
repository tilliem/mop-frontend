import React from 'react'
import PropTypes from 'prop-types'

const NavLink = ({ to, children }) => (
  <li><a className='lh-14 navlink' href={to}>{children}</a></li>
)

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default NavLink
