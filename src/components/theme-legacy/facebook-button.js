import React from 'react'
import PropTypes from 'prop-types'

import { withFacebook } from '../../containers/hoc-facebook'

const FacebookButton = ({ shareFacebook }) => (
  <button
    id='facebook-button'
    className='xl300 background-facebook-blue'
    onClick={shareFacebook}
  >
    Share on Facebook
  </button>
)

FacebookButton.propTypes = {
  shareFacebook: PropTypes.func
}

export default withFacebook(FacebookButton)
