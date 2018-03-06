import React from 'react'
import PropTypes from 'prop-types'

import FacebookSvg from 'GiraffeUI/svgs/facebook.svg'

const FacebookButton = ({ shareFacebook }) => (
  <a onClick={shareFacebook}>
    <FacebookSvg />
    Share on Facebook
  </a>
)

FacebookButton.propTypes = {
  shareFacebook: PropTypes.func
}

export default FacebookButton
