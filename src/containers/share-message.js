import React from 'react'
import PropTypes from 'prop-types'
import { actions as petitionActions } from '../actions/petitionActions'

class ShareMessage extends React.Component {
  generateMailMessage(
    about,
    statement,
    isCreator,
    shareOpts,
    fullTarget,
    petitionLink
  ) {
    if (shareOpts.email_share) {
      return shareOpts.email_share
    }
    const actedOn = isCreator ? 'created' : 'signed'
    const target =
      fullTarget
        .slice(0, 3)
        .map(t => t.name)
        .join(' and ') +
      (fullTarget.length > 3 ? `, and ${fullTarget.length} others` : '')
    const tooLong = 400 // 1024 for the whole message, so how about 450 for each
    const petitionAbout = about.length < tooLong ? `\n${about}` : ''
    const petitionStatement =
      statement.length < tooLong ? `"${statement}"\n` : ''
    return `Hi,
${petitionAbout}
${petitionAbout ? '\nThat‘s why ' : ''}I ${actedOn} a petition to ${target}${
      petitionStatement ? ', which says:\n' : '.'
    }
${petitionStatement}
Will you sign this petition? Click here:

${petitionLink}

Thanks!
`
  }

  render() {
    const {
      petition,
      isCreator,
      pre,
      trackingParams,
      recordShare,
      children
    } = this.props
    const shareOpts =
      (petition.share_options && petition.share_options[0]) || {}

    // Convert description to text
    const textDescription = document.createElement('div')
    textDescription.innerHTML = petition.description

    const message = this.generateMailMessage(
      textDescription.textContent,
      petition.summary,
      isCreator,
      shareOpts,
      petition.target,
      `${petition._links.url}?source=${pre}.em.__TYPE__&${trackingParams}`
    )
    const mailtoMessage = `mailto:?subject=${encodeURIComponent(
      petition.title
    )}&body=${encodeURIComponent(message.replace('__TYPE__', 'mt'))}`

    const copyPasteMessage = `Subject: ${petition.title}\n\n${message.replace(
      '__TYPE__',
      'cp'
    )}`

    return <div>{React.cloneElement(children, { mailtoMessage, copyPasteMessage })}</div>
  }
}

ShareMessage.propTypes = {
  isCreator: PropTypes.bool,
  trackingParams: PropTypes.string,
  petition: PropTypes.object,
  pre: PropTypes.string,
  recordShare: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.element
}

export default ShareMessage
