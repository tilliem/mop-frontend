import React from 'react'
import PropTypes from 'prop-types'

const CopyPaste = ({ onClick, copyPasteMessage, setEmailRef }) => (
  <textarea
    ref={setEmailRef}
    className='hidden-phone'
    id='email-textarea'
    onClick={e => {
      e.target.select()
      onClick(e)
    }}
    value={copyPasteMessage}
    readOnly
  />
)

CopyPaste.propTypes = {
  onClick: PropTypes.func,
  copyPasteMessage: PropTypes.string,
  setEmailRef: PropTypes.func
}

export default CopyPaste
