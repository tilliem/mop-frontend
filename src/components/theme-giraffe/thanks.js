import React from 'react'
import PropTypes from 'prop-types'

import ThanksNextPetition from '../../containers/thanks-next-petition'

const Thanks = ({
  petition,
  sharedSocially,
  renderRawLink,
  renderTwitter,
  renderFacebook,
  renderMail,
  renderCopyPaste
}) => (
  <div className='mo-container'>
    <div className='mo-modal__content'>
      {sharedSocially ? (
        <ThanksNextPetition entity={petition.entity || ''} />
      ) : null}
      <div className='share-modal__heading'>ONE MORE STEP…</div>

      <div className='share-modal__content'>
        <p>
          Thank you for signing! Now help this petition grow by asking your
          friends, family, and colleagues to sign.
        </p>
        <p>
          <strong>Share</strong>
        </p>

        <div className='share-modal__cta-group'>
          {renderMail()}
          {renderFacebook()}
        </div>

        <p>Or copy and paste the text below into a message:</p>

        {renderCopyPaste()}

        <div className='share-modal__links'>
          {renderTwitter()}
          {renderRawLink()}
        </div>
      </div>
    </div>
  </div>
)

Thanks.propTypes = {
  petition: PropTypes.object,
  sharedSocially: PropTypes.bool,
  renderTwitter: PropTypes.func,
  renderFacebook: PropTypes.func,
  renderMail: PropTypes.func,
  renderCopyPaste: PropTypes.func,
  renderRawLink: PropTypes.func
}

export default Thanks
