import React from 'react'
import PropTypes from 'prop-types'

const CopyPaste = ({ shareEmail, copyPasteMessage, setEmailRef }) => (
  <textarea
    ref={setEmailRef}
    className='hidden-phone'
    id='email-textarea'
    onClick={shareEmail}
    value={copyPasteMessage}
    readOnly
  />
)

CopyPaste.propTypes = {
  shareEmail: PropTypes.func,
  copyPasteMessage: PropTypes.string,
  setEmailRef: PropTypes.func
}

export default CopyPaste
