import React from 'react'
import PropTypes from 'prop-types'

import { withTwitter } from '../../containers/hoc-twitter'
import TwitterSvg from 'GiraffeUI/svgs/twitter.svg'

const TwitterButton = ({ onClick, tweet, setTweetRef }) => (
  <a href='#' className='mo-btn share-modal__link' onClick={onClick}>
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
  onClick: PropTypes.func,
  tweet: PropTypes.string,
  setTweetRef: PropTypes.func
}

export default withTwitter(TwitterButton)
