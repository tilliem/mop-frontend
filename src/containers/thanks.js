import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'
import { actions as petitionActions } from '../actions/petitionActions'
import { petitionShortCode, md5ToToken } from '../lib'

import ThanksComponent from 'LegacyTheme/thanks'

class Thanks extends React.Component {
  constructor(props) {
    super(props)
    const { fromSource, petition, signatureMessage, user } = props
    let trackingParams = ''
    if (user && user.signonId) {
      trackingParams = `r_by=${user.signonId}`
    } else if (signatureMessage && signatureMessage.messageMd5) {
      const hashToken = md5ToToken(signatureMessage.messageMd5)
      trackingParams = `r_hash=${hashToken}`
    }
    this.isCreator = false // Maybe test user.id==petition.creator_id or something, if we want to expose that
    let pre = (this.isCreator ? 'c' : 's')
    const { _embedded: { creator } = {} } = petition
    if (fromSource) {
      if (/^(c\.|s\.icn)/.test(fromSource)) {
        pre += '.icn'
      } else if (creator && creator.source // megapartner
                   && (fromSource === 'mo' || /\.imn/.test(fromSource))) {
        pre += '.imn'
      }
    }
    this.trackingParams = trackingParams
    this.state = {
      sharedSocially: false,
      pre
    }
    this.recordShare = this.recordShare.bind(this)
    this.shareLink = this.shareLink.bind(this)
    this.shareEmail = this.shareEmail.bind(this)
    this.openFacebookSharing = this.openFacebookSharing.bind(this)
    this.shareFacebook = this.shareFacebook.bind(this)
    this.shareTwitter = this.shareTwitter.bind(this)
  }

  recordShare(medium, source) {
    petitionActions.recordShareClick(this.props.petition, medium, source, this.props.user)
  }

  shareLink(evt) {
    evt.target.select()
    this.recordShare('email', `${this.state.pre}.ln.cp`)
  }

  shareEmail(evt) {
    evt.target.select()
    this.recordShare('email', `${this.state.pre}.em.cp`)
  }

  openFacebookSharing(urlToShare) {
    const { user } = this.props
    const preChar = ((/\?/.test(urlToShare)) ? '&' : '?')
    let fbUrl = `${urlToShare}${preChar}source=${this.state.pre}.fb`
    if (user.signonId) {
      fbUrl = `${fbUrl}&${this.trackingParams}`
    }
    window.open(`https://www.facebook.com/share.php?u=${encodeURIComponent(fbUrl)}`)
    this.setState({ sharedSocially: true })
  }

  shareFacebook() {
    const { petition } = this.props
    const shareOpts = (petition.share_options && petition.share_options[0]) || {}
    const self = this
    setTimeout(() => {
      self.recordShare('facebook', `${self.state.pre}.fb`)
    }, 100)
    let fbUrl = petition._links.url
    if (shareOpts.facebook_share && shareOpts.facebook_share.share_url) {
      if (shareOpts.facebook_share.sharebandit) { // Non-OSDI feature
        petitionActions.getSharebanditShareLink(
          shareOpts.facebook_share.share_url)
          .then(this.openFacebookSharing)
        // Prematurely exit, since we will block on the promise
        return false
      }
      fbUrl = shareOpts.facebook_share.share_url
    }
    this.openFacebookSharing(fbUrl)
    return false
  }

  shareTwitter() {
    const encodedValue = encodeURIComponent(this.tweetTextArea.value)
    const url = `https://twitter.com/intent/tweet?text=${encodedValue}`
    window.open(url)
    this.recordShare('twitter', `${this.state.pre}.tw`)
    this.setState({ sharedSocially: true })
  }

  generateMailMessage(about, statement, isCreator, shareOpts, fullTarget, petitionLink) {
    if (shareOpts.email_share) {
      return shareOpts.email_share
    }
    const actedOn = (isCreator ? 'created' : 'signed')
    const target = (fullTarget.slice(0, 3).map(t => t.name).join(' and ')
                    + ((fullTarget.length > 3) ? `, and ${fullTarget.length} others` : ''))
    const tooLong = 400 // 1024 for the whole message, so how about 450 for each
    const petitionAbout = (about.length < tooLong ? `\n${about}` : '')
    const petitionStatement = (statement.length < tooLong ? `"${statement}"\n` : '')
    return (`Hi,
${petitionAbout}
${petitionAbout ? '\nThat‘s why ' : ''}I ${actedOn} a petition to ${target}${petitionStatement ? ', which says:\n' : '.'}
${petitionStatement}
Will you sign this petition? Click here:

${petitionLink}

Thanks!
`)
  }

  render() {
    const { petition, signatureMessage, user } = this.props
    const shortLinkArgs = [
      petition.petition_id,
      user && user.signonId,
      signatureMessage && signatureMessage.messageMd5]
    const twitterShareLink = petitionShortCode((this.isCreator ? 'c' : 't'), ...shortLinkArgs)
    const rawShareLink = petitionShortCode((this.isCreator ? 'k' : 'l'), ...shortLinkArgs)
    const shareOpts = (petition.share_options && petition.share_options[0]) || {}
    // Convert description to text
    const textDescription = document.createElement('div')
    textDescription.innerHTML = petition.description
    let tweet
    if (shareOpts.twitter_share && shareOpts.twitter_share.message) {
      tweet = shareOpts.twitter_share.message.replace('[URL]', twitterShareLink)
    } else {
      const suffix = ` ${twitterShareLink} @moveon`
      tweet = `${petition.title.slice(0, 140 - suffix.length)} ${suffix}`
    }

    const mailToMessage = this.generateMailMessage(textDescription.textContent,
                                                   petition.summary,
                                                   this.isCreator,
                                                   shareOpts,
                                                   petition.target,
                                                   `${petition._links.url}?source=${this.state.pre}.em.__TYPE__&${this.trackingParams}`
                                                   )
    const copyPasteMessage = `Subject: ${petition.title}\n\n${mailToMessage.replace('__TYPE__', 'cp')}`
    const mailtoMessage = `mailto:?subject=${encodeURIComponent(petition.title)}&body=${encodeURIComponent(mailToMessage.replace('__TYPE__', 'mt'))}`

    return (
      <DocumentTitle title='MoveOn Petitions - Thanks!'>
        <ThanksComponent
          petition={petition}
          sharedSocially={this.state.sharedSocially}
          isCreator={this.isCreator}
          shareFacebook={this.shareFacebook}
          shareTwitter={this.shareTwitter}
          shareLink={this.shareLink}
          shareEmail={this.shareEmail}
          mailtoMessage={mailtoMessage}
          copyPasteMessage={copyPasteMessage}
          rawShareLink={rawShareLink}
          tweet={tweet}
          setTweetRef={input => { this.tweetTextArea = input }}
          setLinkRef={input => { this.linkTextArea = input }}
          setEmailRef={input => { this.emailTextArea = input }}
        />
      </DocumentTitle>
    )
  }
}

Thanks.propTypes = {
  petition: PropTypes.object,
  user: PropTypes.object,
  signatureMessage: PropTypes.object,
  fromSource: PropTypes.string
}

export default Thanks
