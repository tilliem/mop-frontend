import React from 'react'
import PropTypes from 'prop-types'

import { withFacebook } from '../../containers/hoc-facebook'

const FacebookButton = ({ onClick: shareFacebook }) => (
  <button
    id='facebook-button'
    className='xl300 background-facebook-blue'
    onClick={shareFacebook}
  >
    Share on Facebook
  </button>
)

FacebookButton.propTypes = {
  onClick: PropTypes.func
}

export default withFacebook(FacebookButton)
