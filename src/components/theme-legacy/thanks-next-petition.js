import React from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'

export const ThanksNextPetition = ({ secondsLeft, onCancel }) => (
  <Portal node={document && document.getElementById('message-portal')}>
    <div className='message-header advancing_message'>
      We&#39;ve found another petition which may interest you. We&#39;ll forward
      you there in{' '}
      <span className='countdown_clock'>{secondsLeft}</span> seconds.
      [{' '}
      <a onClick={onCancel} className='control_advance_cancel'>
        cancel
      </a>
      {' '}]
    </div>
  </Portal>
)

ThanksNextPetition.propTypes = {
  secondsLeft: PropTypes.number,
  onCancel: PropTypes.func
}
