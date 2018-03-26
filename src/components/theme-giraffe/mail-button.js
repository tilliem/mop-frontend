import React from 'react'
import PropTypes from 'prop-types'

import { withShareMessage } from '../../containers/hoc-share-message'
import MailSvg from 'GiraffeUI/svgs/mail.svg'

const MailButton = ({ mailtoMessage }) => (
  <a className='petition-thanks__cta' href={mailtoMessage}>
    <MailSvg />
    Email Petition
  </a>
)

MailButton.propTypes = {
  mailtoMessage: PropTypes.string
}

export default withShareMessage(MailButton)
