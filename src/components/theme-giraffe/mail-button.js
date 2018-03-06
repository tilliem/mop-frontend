import React from 'react'
import PropTypes from 'prop-types'

import MailSvg from 'GiraffeUI/svgs/mail.svg'

const MailButton = ({ mailtoMessage }) => (
  <a href={mailtoMessage}>
    <MailSvg />
    Email Petition
  </a>
)

MailButton.propTypes = {
  mailtoMessage: PropTypes.string
}

export default MailButton
