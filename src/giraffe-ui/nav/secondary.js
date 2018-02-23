import React from 'react'
import PropTypes from 'prop-types'

export const Secondary = props => (
  <div className='mo-nav__secondary'>{props.children}</div>
)

const Top = props => (
  <ul className='mo-nav__secondary__top'>{props.children}</ul>
)
Secondary.Top = Top

const Bottom = props => (
  <ul className='mo-nav__secondary__bottom'>{props.children}</ul>
)
Secondary.Bottom = Bottom

Secondary.propTypes = { children: PropTypes.node }
Top.propTypes = { children: PropTypes.node }
Bottom.propTypes = { children: PropTypes.node }
