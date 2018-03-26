import React from 'react'
import PropTypes from 'prop-types'

import ThanksNextPetition from '../../containers/thanks-next-petition'

const Thanks = ({
  sharedSocially,
  renderRawLink,
  renderTwitter,
  renderFacebook,
  renderMail,
  renderCopyPaste,
  nextPetition
}) => (
  <div className='row my-4 my-lg-5 mx-1 justify-content-center'>
    {sharedSocially && <ThanksNextPetition nextPetition={nextPetition} />}
    <div className='col-10 col-md-7 petition-thanks__container'>
      <div className='petition-thanks__heading mt-lg-4'>ONE MORE STEP…</div>
      <div className='petition-thanks__content'>
        <p>
          Thank you for signing! Now help this petition grow by asking your
          friends, family, and colleagues to sign.
        </p>
        <p>
          <strong>Share</strong>
        </p>

        <div className='petition-thanks__cta-group'>
          {renderMail()}
          {renderFacebook()}
        </div>

        <p>Or copy and paste the text below into a message:</p>

        {renderCopyPaste()}

        <div className='petition-thanks__links'>
          {renderTwitter()}
          {renderRawLink()}
        </div>
      </div>
    </div>
  </div>
)

Thanks.propTypes = {
  nextPetition: PropTypes.object,
  sharedSocially: PropTypes.bool,
  renderTwitter: PropTypes.func,
  renderFacebook: PropTypes.func,
  renderMail: PropTypes.func,
  renderCopyPaste: PropTypes.func,
  renderRawLink: PropTypes.func
}

export default Thanks