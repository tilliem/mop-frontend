import React from 'react'
import PropTypes from 'prop-types'

import CloseSvg from './svgs/close.svg'

export const Modal = ({ heading, children, className, visible, onClose }) => (
  <div
    className={`mo-modal ${className}`}
    style={visible ? { display: 'block' } : {}}
  >
    <div className='mo-modal__backdrop' />

    <div className='mo-modal__frame'>
      <div className='mo-modal__dialog'>
        <div className='mo-modal__content'>
          <div className={`${className}__heading`}>{heading}</div>
          {children}
        </div>
      </div>

      <button className='mo-modal__close' onClick={onClose}>
        <CloseSvg />
      </button>
    </div>
  </div>
)

Modal.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func
}
