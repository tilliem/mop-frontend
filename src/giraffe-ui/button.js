import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ children, onClick }) => (
  <button className='mo-btn' onClick={onClick} type='submit'>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
