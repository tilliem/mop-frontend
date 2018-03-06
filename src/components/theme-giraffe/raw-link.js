import React from 'react'
import PropTypes from 'prop-types'

import LinkSvg from 'GiraffeUI/svgs/link.svg'

const RawLink = ({ rawLink }) => (
  <a onClick={() => prompt('Here is your link to share:', rawLink)}>
    <LinkSvg />
    Copy Link
  </a>
)

RawLink.propTypes = {
  shareLink: PropTypes.func,
  rawLink: PropTypes.string,
  setLinkRef: PropTypes.func
}

export default RawLink
