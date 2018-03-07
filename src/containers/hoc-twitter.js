import React from 'react'
import PropTypes from 'prop-types'
import { petitionShortCode } from '../lib'

export function withTwitter(WrappedComponent) {
  class Twitter extends React.Component {
    constructor(props) {
      super(props)
      this.getTweet = this.getTweet.bind(this)
      this.shareTwitter = this.shareTwitter.bind(this)
    }

    getTweet() {
      const { petition, shortLinkMode, shortLinkArgs } = this.props

      const twitterShareLink = petitionShortCode(
        shortLinkMode,
        ...shortLinkArgs
      )
      const shareOpts =
        (petition.share_options && petition.share_options[0]) || {}

      let tweet
      if (shareOpts.twitter_share && shareOpts.twitter_share.message) {
        tweet = shareOpts.twitter_share.message.replace(
          '[URL]',
          twitterShareLink
        )
      } else {
        const suffix = ` ${twitterShareLink} @moveon`
        tweet = `${petition.title.slice(0, 140 - suffix.length)} ${suffix}`
      }

      return tweet
    }

    shareTwitter() {
      const encodedValue = encodeURIComponent(this.getTweet())
      const url = `https://twitter.com/intent/tweet?text=${encodedValue}`
      window.open(url)
      this.props.recordShare()
      this.setState({ sharedSocially: true })
    }

    render() {
      /* eslint-disable no-unused-vars */
      // remove props we don't want to pass through
      const {
        petition,
        shortLinkMode,
        shortLinkArgs,
        recordShare,
        // (just to remove from otherProps)
        ...otherProps
      } = this.props
      /* eslint-enable */
      return <WrappedComponent {...otherProps} onClick={this.shareTwitter} />
    }
  }
  Twitter.propTypes = {
    petition: PropTypes.object,
    shortLinkArgs: PropTypes.array,
    shortLinkMode: PropTypes.string,
    recordShare: PropTypes.func
  }
  return Twitter
}
