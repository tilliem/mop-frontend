import React from 'react'
import PropTypes from 'prop-types'

export const InfoColumn = ({ children }) => (
  <div className='col-12 col-lg-8 petition-info-column'>{children}</div>
)
InfoColumn.propTypes = { children: PropTypes.node }

export const SignColumn = ({ children }) => (
  <div className='col-lg-3 offset-lg-1 petition-sign-column'>{children}</div>
)
SignColumn.propTypes = { children: PropTypes.node }
