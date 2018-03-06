import React from 'react'
import PropTypes from 'prop-types'

import { withFacebook } from '../../containers/hoc-facebook'
import FacebookSvg from 'GiraffeUI/svgs/facebook.svg'

const FacebookButton = ({ shareFacebook }) => (
  <a className='share-modal__cta' onClick={shareFacebook}>
    <FacebookSvg />
    Share on Facebook
  </a>
)

FacebookButton.propTypes = {
  shareFacebook: PropTypes.func
}

export default withFacebook(FacebookButton)
