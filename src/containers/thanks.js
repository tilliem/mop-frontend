import React from 'react'
import PropTypes from 'prop-types'
import { actions as petitionActions } from '../actions/petitionActions'
import { md5ToToken } from '../lib'
import Twitter from './twitter'
import Facebook from './facebook'
import ShareMessage from './share-message'

import ThanksComponent from 'LegacyTheme/thanks'
import TwitterButton from 'LegacyTheme/twitter-button'
import FacebookButton from 'LegacyTheme/facebook-button'
import MailButton from 'LegacyTheme/mail-button'
import CopyPaste from 'LegacyTheme/copy-paste'
import RawLink from 'LegacyTheme/raw-link'

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
    this.shortLinkArgs = [
      petition.petition_id,
      user && user.signonId,
      signatureMessage && signatureMessage.messageMd5]

    this.state = {
      sharedSocially: false,
      pre
    }

    this.recordShare = this.recordShare.bind(this)
    this.renderTwitter = this.renderTwitter.bind(this)
    this.renderFacebook = this.renderFacebook.bind(this)
    this.renderMail = this.renderMail.bind(this)
    this.renderCopyPaste = this.renderCopyPaste.bind(this)
    this.renderRawLink = this.renderRawLink.bind(this)
    this.shareLink = this.shareLink.bind(this)
    this.shareEmail = this.shareEmail.bind(this)
  }

  recordShare(medium, source) {
    this.setState({ sharedSocially: true })
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

  renderTwitter() {
    return (
      <Twitter
        isCreator={this.isCreator}
        petition={this.props.petition}
        pre={this.state.pre}
        shortLinkArgs={this.shortLinkArgs}
        recordShare={this.recordShare}
      >
        <TwitterButton />
      </Twitter>
    )
  }

  renderFacebook() {
    return (
      <Facebook
        petition={this.props.petition}
        user={this.props.user}
        pre={this.state.pre}
        recordShare={this.recordShare}
        trackingParams={this.trackingParams}
      >
        <FacebookButton />
      </Facebook>
    )
  }

  renderMail() {
    return (
      <ShareMessage
        isCreator={this.isCreator}
        petition={this.props.petition}
        pre={this.state.pre}
        recordShare={this.recordShare}
        trackingParams={this.trackingParams}
      >
        <MailButton />
      </ShareMessage>
    )
  }

  renderCopyPaste() {
    return (
      <ShareMessage
        isCreator={this.isCreator}
        petition={this.props.petition}
        pre={this.state.pre}
        recordShare={this.recordShare}
        trackingParams={this.trackingParams}
      >
        <CopyPaste />
      </ShareMessage>
    )
  }

  renderRawLink() {
    return (
      <ShareMessage
        isCreator={this.isCreator}
        petition={this.props.petition}
        pre={this.state.pre}
        recordShare={this.recordShare}
        trackingParams={this.trackingParams}
        shortLinkArgs={this.shortLinkArgs}
      >
        <RawLink />
      </ShareMessage>
    )
  }

  render() {
    return (
      <ThanksComponent
        petition={this.props.petition}
        sharedSocially={this.state.sharedSocially}
        isCreator={this.isCreator}
        renderTwitter={this.renderTwitter}
        renderFacebook={this.renderFacebook}
        renderMail={this.renderMail}
        renderCopyPaste={this.renderCopyPaste}
        renderRawLink={this.renderRawLink}
      />
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
