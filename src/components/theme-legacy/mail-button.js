import React from 'react'
import PropTypes from 'prop-types'

import { withShareMessage } from '../../containers/hoc-share-message'

const MailButton = ({ mailtoMessage, onClick }) => (
  <a
    id='email-button'
    href={mailtoMessage}
    onClick={onClick}
    className='button xl300 background-moveon-bright-red'
  >
    Email your friends
  </a>
)

MailButton.propTypes = {
  onClick: PropTypes.func,
  mailtoMessage: PropTypes.string
}

export default withShareMessage(MailButton)
