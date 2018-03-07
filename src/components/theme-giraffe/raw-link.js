import React from 'react'
import PropTypes from 'prop-types'

import { withShareMessage } from '../../containers/hoc-share-message'
import LinkSvg from 'GiraffeUI/svgs/link.svg'

const RawLink = ({ rawLink }) => (
  <a
    href='#'
    className='mo-btn share-modal__link'
    onClick={() => prompt('Here is your link to share:', rawLink)}
  >
    <LinkSvg />
    Copy Link
  </a>
)

RawLink.propTypes = {
  rawLink: PropTypes.string
}

export default withShareMessage(RawLink)
