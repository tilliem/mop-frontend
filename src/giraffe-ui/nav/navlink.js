import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

export const NavLink = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
}
