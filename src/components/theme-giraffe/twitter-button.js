import React from 'react'
import PropTypes from 'prop-types'

import { withTwitter } from '../../containers/hoc-twitter'
import TwitterSvg from 'GiraffeUI/svgs/twitter.svg'

const TwitterButton = ({ onClick }) => (
  <a className='mo-btn share-modal__link' onClick={onClick}>
    <TwitterSvg />
    Twitter
  </a>
)

TwitterButton.propTypes = {
  onClick: PropTypes.func
}

export default withTwitter(TwitterButton)
