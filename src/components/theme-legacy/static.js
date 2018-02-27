import React from 'react'
import PropTypes from 'prop-types'

const Static = ({ children }) => (
  <div className='container background-moveon-white bump-top-1'>
    <div className='row'>
      <div className='span10 offset1'>{children}</div>
    </div>
  </div>
)

Static.propTypes = { children: PropTypes.node }

export default Static
