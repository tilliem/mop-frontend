import React from 'react'
import PropTypes from 'prop-types'

import { withTwitter } from '../../containers/hoc-twitter'
import TwitterSvg from 'GiraffeUI/svgs/twitter.svg'

const TwitterButton = ({ shareTwitter, tweet, setTweetRef }) => (
  <a href='#' className='mo-btn share-modal__link' onClick={shareTwitter}>
    <TwitterSvg />
    Twitter
    <textarea
      className='hidden'
      id='tweet_text'
      defaultValue={tweet}
      ref={setTweetRef}
      readOnly
    />
  </a>
)

TwitterButton.propTypes = {
  shareTwitter: PropTypes.func,
  tweet: PropTypes.string,
  setTweetRef: PropTypes.func
}

export default withTwitter(TwitterButton)
