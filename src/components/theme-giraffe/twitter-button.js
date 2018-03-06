import React from 'react'
import PropTypes from 'prop-types'

import TwitterSvg from 'GiraffeUI/svgs/twitter.svg'

const TwitterButton = ({ shareTwitter, tweet, setTweetRef }) => (
  <span>
    <a onClick={shareTwitter}>
      <TwitterSvg />
      Twitter
    </a>
    <textarea
      className='hidden'
      id='tweet_text'
      defaultValue={tweet}
      ref={setTweetRef}
      readOnly
    />
  </span>
)

TwitterButton.propTypes = {
  shareTwitter: PropTypes.func,
  tweet: PropTypes.string,
  setTweetRef: PropTypes.func
}

export default TwitterButton
