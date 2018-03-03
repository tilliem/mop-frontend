import React from 'react'
import PropTypes from 'prop-types'

const MailButton = ({ mailtoMessage }) => (
  <a
    id='email-button'
    href={mailtoMessage}
    className='button xl300 background-moveon-bright-red'
  >
    Email your friends
  </a>
)

MailButton.propTypes = {
  mailtoMessage: PropTypes.string
}

export default MailButton
