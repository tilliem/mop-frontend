import React from 'react'
import PropTypes from 'prop-types'
import { petitionShortCode } from '../lib'

class Twitter extends React.Component {
  constructor(props) {
    super(props)
    this.shareTwitter = this.shareTwitter.bind(this)
  }

  shareTwitter() {
    const encodedValue = encodeURIComponent(this.tweetTextArea.value)
    const url = `https://twitter.com/intent/tweet?text=${encodedValue}`
    window.open(url)
    this.props.recordShare()
    this.setState({ sharedSocially: true })
  }

  render() {
    const { petition, isCreator } = this.props
    const twitterShareLink = petitionShortCode(
      isCreator ? 'c' : 't',
      ...this.props.shortLinkArgs
    )
    const shareOpts =
      (petition.share_options && petition.share_options[0]) || {}
    // Convert description to text
    let tweet
    if (shareOpts.twitter_share && shareOpts.twitter_share.message) {
      tweet = shareOpts.twitter_share.message.replace('[URL]', twitterShareLink)
    } else {
      const suffix = ` ${twitterShareLink} @moveon`
      tweet = `${petition.title.slice(0, 140 - suffix.length)} ${suffix}`
    }

    return (
      <div>
        {React.cloneElement(this.props.children, {
          tweet,
          shareTwitter: this.shareTwitter,
          setTweetRef: input => input && (this.tweetTextArea = input)
        })}
      </div>
    )
  }
}

Twitter.propTypes = {
  petition: PropTypes.object,
  shortLinkArgs: PropTypes.array,
  recordShare: PropTypes.func,
  isCreator: PropTypes.bool,
  children: PropTypes.element
}

export default Twitter
