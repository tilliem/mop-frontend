import React from 'react'
import PropTypes from 'prop-types'

import { withShareMessage } from '../../containers/hoc-share-message'

const CopyPaste = ({ onClick, copyPasteMessage, setEmailRef }) => (
  <textarea
    ref={setEmailRef}
    className='share-modal__text'
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

export default withShareMessage(CopyPaste)
