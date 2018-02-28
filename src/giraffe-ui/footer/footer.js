import React from 'react'
import PropTypes from 'prop-types'

export const MoFooter = props => (
  <div id='footer' className='footer'>
    <div className='mo-container'>{props.children}</div>
  </div>
)
MoFooter.propTypes = { children: PropTypes.node }

const Top = props => <div className='footer__top'>{props.children}</div>
Top.propTypes = { children: PropTypes.node }
MoFooter.Top = Top

const Bottom = props => <div className='footer__bottom'>{props.children}</div>
Bottom.propTypes = { children: PropTypes.node }
MoFooter.Bottom = Bottom
