import React from 'react'
import PropTypes from 'prop-types'

export const InfoColumn = ({ children }) => (
  <div className='petition-info-column'>{children}</div>
)
InfoColumn.propTypes = { children: PropTypes.node }

export const SignColumn = ({ children }) => (
  <div className='petition-sign-column'>{children}</div>
)
SignColumn.propTypes = { children: PropTypes.node }
