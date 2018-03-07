import React from 'react'
import PropTypes from 'prop-types'

import { Share as MoShare } from 'GiraffeUI/petition'
import { withTwitter } from '../../containers/hoc-twitter'
import { withShareMessage } from '../../containers/hoc-share-message'
import { withFacebook } from '../../containers/hoc-facebook'
import { withShareLink } from '../../containers/hoc-share-link'

const Mail = withShareMessage(({ mailtoMessage, ...rest }) => (
  <MoShare.Mail {...rest} onClick={() => (document.location = mailtoMessage)} />
))

const Facebook = withFacebook(MoShare.Facebook)

const Twitter = withTwitter(MoShare.Twitter)

const CopyLink = withShareLink(({ rawLink, ...rest }) => (
  <MoShare.CopyLink
    {...rest}
    onClick={() => prompt('Here is your share link:', rawLink)}
  />
))

export const Share = ({ hasLabels, className, petition, user }) => (
  // TODO: find out if they are creator or signer for prefix
  <MoShare className={className} hasLabels={hasLabels}>
    <Mail
      petition={petition}
      prefix='n'
      suffix='p'
    />
    <Facebook
      petition={petition}
      prefix='n'
      suffix='p'
    />
    <Twitter
      petition={petition}
      shortLinkMode='n'
      shortLinkArgs={[petition.petition_id, user && user.id, false]}
    />
    <CopyLink
      shortLinkMode='n'
      shortLinkArgs={[petition.petition_id, user && user.id, false]}
    />
  </MoShare>
)

Share.propTypes = {
  hasLabels: PropTypes.bool,
  className: PropTypes.string,
  petition: PropTypes.object,
  user: PropTypes.object
}
