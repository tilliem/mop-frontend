import React from 'react'
import PropTypes from 'prop-types'

import ThanksNextPetition from '../../containers/thanks-next-petition'

const Thanks = ({
  petition,
  sharedSocially,
  isCreator,
  shareFacebook,
  shareLink,
  shareEmail,
  mailtoMessage,
  copyPasteMessage,
  rawShareLink,
  setLinkRef,
  setEmailRef,
  renderTwitter
}) => (
  <div className='row'>
    {sharedSocially ? (
      <ThanksNextPetition entity={petition.entity || ''} />
    ) : null}
    <div className='span4'>
      <h1 className='size-superxl lh-100 font-lighter'>Thanks!</h1>
    </div>
    <div className='span5 offset1 bump-top-3 font-lighter lh-24'>
      Now that you have {isCreator ? 'created' : 'signed'},
      <span className='font-heavy moveon-bright-red'> help it grow</span> by
      asking your friends, family, colleagues to sign.
    </div>
    <div className='clear hidden-phone border-bottom' />
    <div className='share-area'>
      <div className='span4 share-social-media padding-top-1 align-center pull-right'>
        <div className='lanky-header'>
          <span className='icon-fb-default' />
          Tell your friends on Facebook:
        </div>
        <button
          id='facebook-button'
          className='xl300 background-facebook-blue'
          onClick={shareFacebook}
        >
          Share on Facebook
        </button>
        <div className='lanky-header bump-top-3 align-center'>
          <span className='icon-twitter-default' />
          Tweet your followers:
        </div>
        {renderTwitter()}
        <div
          id='hidden_share_link'
          className='lanky-header bump-top-3 align-center hidden'
        >
          Send a link:
          <textarea
            ref={setLinkRef}
            onClick={shareLink}
            id='link_text'
            defaultValue={rawShareLink}
            readOnly
          />
        </div>
      </div>
      <div className='span7 padding-top-1'>
        <div className='share-email align-center'>
          <div className='lanky-header align-center'>
            <span className='icon-join-default' />Email your friends, family and
            colleagues:
          </div>
          <a
            id='email-button'
            href={mailtoMessage}
            className='button xl300 background-moveon-bright-red'
          >
            Email your friends
          </a>
          <div className='disclaimer bump-top-3 hidden-phone'>
            Or copy and paste the text below into a message:
          </div>
          <textarea
            ref={setEmailRef}
            className='hidden-phone'
            id='email-textarea'
            onClick={shareEmail}
            value={copyPasteMessage.replace('__TYPE__', 'cp')}
            readOnly
          />
        </div>
      </div>
    </div>
  </div>
)

Thanks.propTypes = {
  petition: PropTypes.object,
  sharedSocially: PropTypes.bool,
  isCreator: PropTypes.bool,
  shareFacebook: PropTypes.func,
  shareLink: PropTypes.func,
  shareEmail: PropTypes.func,
  mailtoMessage: PropTypes.string,
  copyPasteMessage: PropTypes.string,
  rawShareLink: PropTypes.string,
  setLinkRef: PropTypes.func,
  setEmailRef: PropTypes.func,
  renderTwitter: PropTypes.func
}

export default Thanks
