import React from 'react'
import PropTypes from 'prop-types'

function getTargets(target) {
  return target.length === 1
    ? target[0].label
    : target.map(t => t.label).join(', ')
}

export const CreatePreview = ({ petition }) => (
  <div className='container background-moveon-white bump-top-1'>
    <div className='container background-moveon-white bump-top-1'>
      <div className='row'>
        <div className='span4 widget clearfix background-moveon-light-gray'>
          <h3 className='widget-top-fancy-gray hidden-phone'>
            Petition Review
          </h3>

          <div
            className='padding-left-15 form-wrapper background-moveon-light-gray padding-bottom-1'
            style={{ paddingRight: '15px' }}
          >
            <div className='visible-phone'>
              <p id='to-target' className='lh-16 margin-0 disclaimer'>
                Petition statement to be delivered to{' '}
                <span id='all-targets'>
                  <strong>{getTargets(petition.target)}</strong>
                </span>:
              </p>

              <h1 id='petition-title' className='moveon-bright-red big-title'>
                {petition.title}
              </h1>
            </div>

            <form
              action='do_create_account.html'
              method='post'
              id='preview-user-form'
              style={{ marginTop: 0 }}
            >
              <input
                required='required'
                name='name'
                type='text'
                placeholder='Name'
              />
              <input
                required='required'
                name='email'
                type='text'
                placeholder='Email'
              />
              <input
                autoComplete='off'
                name='phone'
                type='text'
                placeholder='Phone (optional)'
              />
              <input
                required='required'
                name='zip'
                type='text'
                placeholder='ZIP Code'
              />
              <input
                required='required'
                autoComplete='off'
                name='password'
                type='password'
                placeholder='Password'
              />
              <input
                required='required'
                autoComplete='off'
                name='password_confirm'
                type='password'
                placeholder='Confirm Password'
              />

              <button
                type='submit'
                className='xl percent-100 bump-top-3 background-moveon-bright-red'
                id='sign-here-button'
              >
                Launch petition
              </button>

              <div className='bump-top-2 align-center percent-100'>
                <a href='create_revise.html?skin=' className='size-small'>
                  <span className='triangle'>◀</span> Go back and fix something
                </a>
              </div>

              <p className='bump-top-2 disclaimer align-center'>
                By creating this petition, you agree to the Terms of Service
                (see below) and to receive email messages from MoveOn.org Civic
                Action and MoveOn.org Political Action. (You may unsubscribe at
                any time.)
              </p>
            </form>
          </div>
        </div>

        <div className='span8 pull-right petition-info-top'>
          <div
            className='percent-95 padding-left-15 form-wrapper responsive background-moveon-light-gray padding-bottom-1 padding-left-2 padding-right-3'
            style={{ marginLeft: '-20px', position: 'relative' }}
          >
            <div className='hidden-phone'>
              <p
                id='to-target'
                className='lh-16 margin-0 padding-top-1 disclaimer'
              >
                Petition statement to be delivered to{' '}
                <span id='all-targets'>
                  <strong>{getTargets(petition.target)}</strong>
                </span>:
              </p>

              <h1 id='petition-title' className='moveon-bright-red big-title'>
                {petition.title}
              </h1>
            </div>

            <div
              id='pet-statement'
              className='lh-36 blockquote padding-bottom-1'
            >
              {petition.summary}
            </div>
          </div>

          <div>
            <div className='widget bump-top-1'>
              <div className='padding-left-30'>
                <div className='widget-top'>
                  <h3 className='moveon-bright-red'>Petition Background</h3>
                </div>
                <p className='lh-30'>{petition.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

CreatePreview.propTypes = {
  petition: PropTypes.object
}
