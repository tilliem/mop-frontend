import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CountrySelect from './form/country-select'
import StateOrRegionInput from './form/state-or-region-input'
import ZipOrPostalInput from './form/zip-or-postal-input'
import { actions as petitionActions } from '../actions/petitionActions.js'

class SignatureAddForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: false,
      email: false,
      country: 'United States',
      address1: false,
      address2: false,
      city: false,
      state: false,
      region: false,
      zip: false,
      postal: false,
      comment: false
    }
    this.required = {
      name: 'Name is required.',
      email: 'Email address is required.',
      state: 'State is required.',
      zip: 'Zip code is required.'
    }
    this.submit = this.submit.bind(this)
  }

  validationError(key) {
    if (Object.keys(this.required).indexOf(key) > -1) {
      if (this.state[key] != null && this.state[key].length === 0) {
        return (
          <div className='alert alert-danger' role='alert'>{this.required[key]}</div>
        )
      }
    }
    return null
  }

  formIsValid() {
    return Object.keys(this.required).map(key => this.state[key] != null && this.state[key].length > 0).reduce((a, b) => a && b)
  }

  updateStateFromValue(field) {
    return (event) => {
      this.setState({ [field]: event.target.value })
    }
  }

  submit(event) {
    const { dispatch, petition } = this.props
    if (this.formIsValid()) {
      const osdiSignature = {
        petition: {
          name: petition.name,
          petition_id: petition.petition_id,
          _links: petition._links
        },
        person: {
          full_name: this.state.name,
          email_addresses: [
            {
              address: this.state.email
            }
          ],
          postal_addresses: [
            {
              address_lines: [
                this.state.address1,
                this.state.address2
              ],
              locality: this.state.city,
              region: ((this.state.country === 'United States') ? this.state.state : this.state.region),
              postal_code: ((this.state.country === 'United States') ? this.state.zip : this.state.postal),
              country_name: this.state.country
            }
          ]
        },
        comments: this.state.comment
      }
      dispatch(petitionActions.signPetition(osdiSignature, petition, { redirectOnSuccess: true }))
    }
    event.preventDefault()
    return false
  }

  render() {
    const { petition, user } = this.props
    const iframeEmbedText = `<iframe src="http://petitions.moveon.org/embed/widget.html?v=3&amp;name=${petition.slug}" class="moveon-petition" id="petition-embed" width="300px" height="500px"></iframe>` // text to be copy/pasted
    return (
      <div className='span4 widget clearfix' id='sign-here'>
        <div className='padding-left-15 form-wrapper background-moveon-light-gray padding-top-1 padding-bottom-1' style={{ paddingRight: 15, position: 'relative', top: -10 }}>
          <div className='petition-top visible-phone' style={{ paddingLeft: 20 }}>
            <a style={{ float: 'right' }} href='/admin/petition_zoom.html?petition_id=125956'>zoom&nbsp;&#x270e;</a>
            <p id='to-target' className='lh-14 bump-top-1 bump-bottom-1 margin-0 disclaimer'>Petition statement to be delivered to <span className='all-targets'><strong>Fox News and President Donald Trump</strong></span></p>
            <h1 id='petition-title' className='moveon-bright-red big-title'>{petition.title}</h1>
            <p id='by' className='byline lh-20'>
              Petition by
              <a href='/contact_creator.html?petition_id=125956' className='underline'>Tom Steyer</a>
            </p>
          </div>

          <div className='widget-top margin-0 hidden-phone'>
            <h3 className='moveon-bright-red'>Sign this petition</h3>
          </div>

          <form name='sign_form' id='sign' method='post' action='.' onSubmit={this.submit}>
            <input type='hidden' name='petition_id' value={petition.id} />
            <input type='hidden' name='source' value='homepage' />
            <input type='hidden' name='r_by' value='' />
            <input type='hidden' name='mailing_id' value='' />
            <input type='hidden' name='fb_test' value='0' />
            <input type='hidden' name='test_group' value='' />
            <input type='hidden' name='no_mo' value='0' />
            <input type='hidden' name='id' value='' />
            <input type='hidden' name='akid' value='' />
            <input type='hidden' name='recognized_user' id='recognized_user_field' value='0' />
            <input type='hidden' name='show_optin_checkbox' value='0' />

            {((user && user.signonId)
              ? // Recognized
              <div id='recognized' className='bump-bottom-1' styleX='margin-bottom: 1em'>
                <strong>Welcome back {user.given_name}!</strong>
                <div> (Not {user.given_name}? <a href='javascript:unrecognize();'>Click here.</a>) </div>
              </div>
              : // Anonymous
              <div className='unrecognized'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name*'
                  className='moveon-track-click'
                  onChange={this.updateStateFromValue('name')}
                  onBlur={this.updateStateFromValue('name')}
                />
                 {this.validationError('name')}
                <input
                  type='text'
                  name='email'
                  placeholder='Email*'
                  className='moveon-track-click'
                  onChange={this.updateStateFromValue('email')}
                  onBlur={this.updateStateFromValue('email')}
                />
                 {this.validationError('email')}
                <CountrySelect
                  value={this.state.country}
                  onChange={(event) => this.setState({ country: event.target.value })}
                />
                <StateOrRegionInput
                  country={this.state.country}
                  stateOnChange={this.updateStateFromValue('state')}
                  stateValidationError={this.validationError('state')}
                  regionOnChange={this.updateStateFromValue('region')}
                />
                <ZipOrPostalInput
                  country={this.state.country}
                  zipOnChange={this.updateStateFromValue('zip')}
                  zipValidationError={this.validationError('zip')}
                  postalOnChange={this.updateStateFromValue('postal')}
                />
              </div>
            )}

            <textarea className='moveon-track-click' rows='3' cols='20' name='comment' autoComplete='off' placeholder='Comment'></textarea>

            <button type='submit' className='xl percent-100 moveon-track-click background-moveon-bright-red' id='sign-here-button' value='Sign the petition!' style={{ marginTop: 7.2 }}>Sign the petition</button>

            <p className='disclaimer bump-top-1'><b>Note:</b> By signing, you agree to receive email messages from MoveOn.org Civic Action and MoveOn.org Political Action. You may unsubscribe at any time. [ <a href='https://petitions.moveon.org/privacy.html'>Privacy policy</a> ]</p>
          </form>
        </div>
        <div className='percent-90 padding-left-15 bump-top-1'>
          <div className='widget-top hidden-phone'>
            <h3 className='moveon-bright-red'>Embed This petition</h3>
          </div>
          <div id='embedbox' className='codebox percent-95 hidden-phone moveon-track-click'>
            {iframeEmbedText}
          </div>
        </div>
      </div>
    )
  }

}

SignatureAddForm.propTypes = {
  petition: PropTypes.object.isRequired,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(store) {
  return {
    user: store.userStore
  }
}

export default connect(mapStateToProps)(SignatureAddForm)
