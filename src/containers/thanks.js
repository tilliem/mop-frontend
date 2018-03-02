import React from 'react'
import PropTypes from 'prop-types'
import { actions as petitionActions } from '../actions/petitionActions'
import { petitionShortCode, md5ToToken } from '../lib'
import Twitter from './twitter'

import ThanksComponent from 'LegacyTheme/thanks'
import TwitterButton from 'LegacyTheme/twitter-button'

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

  renderTwitter() {
    return (<Twitter
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

  render() {
    const { petition } = this.props

    const rawShareLink = petitionShortCode((this.isCreator ? 'k' : 'l'), ...this.shortLinkArgs)
    const shareOpts = (petition.share_options && petition.share_options[0]) || {}
    // Convert description to text
    const textDescription = document.createElement('div')
    textDescription.innerHTML = petition.description

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
      <ThanksComponent
        petition={petition}
        sharedSocially={this.state.sharedSocially}
        isCreator={this.isCreator}
        renderTwitter={this.renderTwitter}
        shareLink={this.shareLink}
        shareEmail={this.shareEmail}
        mailtoMessage={mailtoMessage}
        copyPasteMessage={copyPasteMessage}
        rawShareLink={rawShareLink}
        setLinkRef={input => { this.linkTextArea = input }}
        setEmailRef={input => { this.emailTextArea = input }}
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
