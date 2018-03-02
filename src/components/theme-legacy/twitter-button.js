import React from 'react'
import PropTypes from 'prop-types'

const TwitterButton = ({ shareTwitter, tweet, setTweetRef }) => (
  <div>
    <button
      id='twitter-button'
      className='xl300 background-moveon-bright-red'
      onClick={shareTwitter}
    >
      Tweet This
    </button>
    <textarea
      className='hidden'
      id='tweet_text'
      defaultValue={tweet}
      ref={setTweetRef}
      readOnly
    />
  </div>
)

TwitterButton.propTypes = {
  shareTwitter: PropTypes.func,
  tweet: PropTypes.string,
  setTweetRef: PropTypes.func
}

export default TwitterButton
