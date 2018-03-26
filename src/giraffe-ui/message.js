import React from 'react'
import PropTypes from 'prop-types'

export const Message = ({ children, action, color }) => (
  <div className={`message message--${color} col-12 mb-4 mb-md-5 p-3`}>
    <div className='row'>
      <div className='col'>{children}</div>
      {action && <div className='col-md-auto mt-3 mt-md-0'>{action}</div>}
    </div>
  </div>
)

Message.propTypes = {
  children: PropTypes.node,
  action: PropTypes.node,
  color: PropTypes.string
}
