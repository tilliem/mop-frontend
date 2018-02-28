import React from 'react'
import PropTypes from 'prop-types'

const baseCn = 'footer__nav'
export const Nav = props => <div className={baseCn}>{props.children}</div>
Nav.propTypes = { children: PropTypes.node }

const Links = ({ children, heading }) => (
  <div className={`${baseCn}__column`}>
    <div className={`${baseCn}__column-heading`}>{heading}</div>
    <div className={`${baseCn}__column-links`}>{children}</div>
  </div>
)
Nav.Links = Links
Links.propTypes = { children: PropTypes.node, heading: PropTypes.string }

const CallToAction = ({ copy, children }) => (
  <div className={`${baseCn}__cta`}>
    <div className={`${baseCn}_cta__copy`}>{copy}</div>
    {children}
  </div>
)
Nav.CallToAction = CallToAction
CallToAction.propTypes = { children: PropTypes.node, copy: PropTypes.node }
