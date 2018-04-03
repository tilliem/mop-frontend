import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions as petitionActions } from '../actions/petitionActions'
import { md5ToToken, stringifyParams } from '../lib'

import ThanksComponent from 'Theme/thanks'
import TwitterButton from 'Theme/twitter-button'
import FacebookButton from 'Theme/facebook-button'
import MailButton from 'Theme/mail-button'
import CopyPaste from 'Theme/copy-paste'
import RawLink from 'Theme/raw-link'

function getPre(fromSource, petition, isCreator) {
  let pre = (isCreator ? 'c' : 's')
  const { _embedded: { creator } = {} } = petition
  if (fromSource) {
    if (/^(c\.|s\.icn)/.test(fromSource)) {
      pre += '.icn'
    } else if (creator && creator.source // megapartner
                 && (fromSource === 'mo' || /\.imn/.test(fromSource))) {
      pre += '.imn'
    }
  }
  return pre
}

function getTrackingParams(signatureMessage, user) {
  const trackingParams = {}
  if (user && user.signonId) {
    trackingParams.r_by = user.signonId
  } else if (signatureMessage && signatureMessage.messageMd5) {
    trackingParams.r_hash = md5ToToken(signatureMessage.messageMd5)
  }
  return trackingParams
}

class Thanks extends React.Component {
  constructor(props) {
    super(props)
    const { petition, signatureMessage, user, location } = props

    this.trackingParams = getTrackingParams(signatureMessage, user)
    this.trackingParamsString = stringifyParams(this.trackingParams)

    this.isCreator = false // Maybe test user.id==petition.creator_id or something, if we want to expose that

    this.shortLinkArgs = [
      petition.petition_id,
      user && user.signonId,
      signatureMessage && signatureMessage.messageMd5]

    this.state = {
      sharedSocially: false,
      pre: getPre(location.query.from_source, petition, this.isCreator)
    }

    this.recordShare = this.recordShare.bind(this)
    this.renderTwitter = this.renderTwitter.bind(this)
    this.renderFacebook = this.renderFacebook.bind(this)
    this.renderMail = this.renderMail.bind(this)
    this.renderCopyPaste = this.renderCopyPaste.bind(this)
    this.renderRawLink = this.renderRawLink.bind(this)
  }

  componentDidMount() {
    const { dispatch, petition, nextPetitionsLoaded, location } = this.props

    if (!petition) {
      if (location.query.name) {
        dispatch(petitionActions.loadPetition(location.query.name))
      } else if (location.query.petition_id) {
        dispatch(petitionActions.loadPetition(location.query.petition_id))
      }
    }

    if (!nextPetitionsLoaded) {
      dispatch(petitionActions.loadTopPetitions(petition.entity === 'pac' ? 1 : 0, '', false))
    }
  }

  recordShare(medium, source) {
    return () =>
      petitionActions.recordShareClick(
        this.props.petition,
        this.trackingParams,
        medium,
        source,
        this.props.user
      )
  }

  renderTwitter() {
    return (
      <TwitterButton
        petition={this.props.petition}
        shortLinkMode={this.isCreator ? 'c' : 't'}
        shortLinkArgs={this.shortLinkArgs}
        recordShare={this.recordShare('twitter', `${this.state.pre}.tw`)}
        afterShare={() => this.setState({ sharedSocially: true })}
      />
    )
  }

  renderFacebook() {
    return (
      <FacebookButton
        petition={this.props.petition}
        prefix={this.state.pre}
        trackingParams={this.trackingParamsString}
        recordShare={this.recordShare('facebook', `${this.state.pre}.fb`)}
        afterShare={() => this.setState({ sharedSocially: true })}
      />
    )
  }

  renderMail() {
    return (
      <MailButton
        isCreator={this.isCreator}
        petition={this.props.petition}
        prefix={this.state.pre}
        trackingParams={this.trackingParamsString}
        recordShare={this.recordShare('email', `${this.state.pre}.em.mt`)}
      />
    )
  }

  renderCopyPaste() {
    return (
      <CopyPaste
        isCreator={this.isCreator}
        petition={this.props.petition}
        prefix={this.state.pre}
        trackingParams={this.trackingParamsString}
        recordShare={this.recordShare('email', `${this.state.pre}.em.cp`)}
      />
    )
  }

  renderRawLink() {
    // Only used for theme-giraffe
    return (
      <RawLink
        shortLinkMode={this.isCreator ? 'k' : 'l'}
        shortLinkArgs={this.shortLinkArgs}
      />
    )
  }

  render() {
    return (
      <ThanksComponent
        sharedSocially={this.state.sharedSocially}
        isCreator={this.isCreator}
        renderTwitter={this.renderTwitter}
        renderFacebook={this.renderFacebook}
        renderMail={this.renderMail}
        renderCopyPaste={this.renderCopyPaste}
        renderRawLink={this.renderRawLink}
        nextPetition={this.props.nextPetition}
      />
    )
  }
}

Thanks.propTypes = {
  petition: PropTypes.object,
  user: PropTypes.object,
  signatureMessage: PropTypes.object,
  nextPetitionsLoaded: PropTypes.bool,
  nextPetition: PropTypes.object,
  dispatch: PropTypes.func,
  location: PropTypes.object
}

function mapStateToProps(store, ownProps) {
  const { nextPetitionsLoaded, nextPetitions, petitions } = store.petitionStore

  const pkey = ownProps.location.query.name || ownProps.location.query.petition_id
  const petition = pkey && petitions[pkey]

  let nextPetition = null
  if (nextPetitions && nextPetitions.length && nextPetitions[0]) {
    nextPetition = petitions[nextPetitions[0]]
  }

  return {
    petition,
    user: store.userStore,
    signatureMessage: (petition
                        && petition.petition_id
                        && store.petitionStore.signatureMessages
                        && store.petitionStore.signatureMessages[petition.petition_id]),
    nextPetition,
    nextPetitionsLoaded
  }
}

export default connect(mapStateToProps)(Thanks)
