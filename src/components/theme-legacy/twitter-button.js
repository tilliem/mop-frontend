import React from 'react'
import PropTypes from 'prop-types'

import { withTwitter } from '../../containers/hoc-twitter'

const TwitterButton = ({ onClick: shareTwitter }) => (
  <button
    id='twitter-button'
    className='xl300 background-moveon-bright-red'
    onClick={shareTwitter}
  >
    Tweet This
  </button>
)

TwitterButton.propTypes = {
  onClick: PropTypes.func
}

export default withTwitter(TwitterButton)
