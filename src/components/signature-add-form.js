import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CountrySelect from './form/country-select'
import StateOrRegionInput from './form/state-or-region-input'
import ZipOrPostalInput from './form/zip-or-postal-input'
import { actions as petitionActions } from '../actions/petitionActions.js'
import { actions as sessionActions } from '../actions/sessionActions.js'

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
      comment: false,
      volunteer: false,
      phone: false,
      submitTried: false,
      required: {}
    }

    this.volunteer = this.volunteer.bind(this)
    this.submit = this.submit.bind(this)
    this.validationError = this.validationError.bind(this)
    this.updateStateFromValue = this.updateStateFromValue.bind(this)
  }

  validationError(key, regex) {
    if (this.state.submitTried) {
      if (Object.keys(this.state.required).indexOf(key) > -1) {
        if (!this.state[key] || (regex && !regex.test(String(this.state[key])))) {
          return (
            <div className='alert alert-danger' role='alert'>{this.state.required[key]}</div>
          )
        }
      }
    }
    return null
  }

  formIsValid() {
    return Object.keys(this.state.required).map(key => !!this.state[key]).reduce((a, b) => a && b)
  }

  parseSource() {
    const { user, petition, query } = this.props
    const creator = (petition._embedded && petition._embedded.creator || {})
    const source = query.source || ''
    const sourceProps = {
      fromCreator: (/^c\./.test(source) || /^s\.icn/.test(source)),
      fromMailing: /\.imn/.test(source)
    }
    sourceProps.showOptinWarning = (!creator.source // mega_partner
                                    && (creator.custom_fields && creator.custom_fields.may_optin)
                                    && !user.signonId)
    sourceProps.showOptinCheckbox = ((sourceProps.fromCreator && query.mailing_id)
                                     || (sourceProps.fromMailing && query.mega_partner)
                                     || (!query.mega_partner && !query.mailing_id))
    sourceProps.hiddenOptIn = ((sourceProps.fromCreator && !query.mailing_id)
                               || (sourceProps.fromMailing && !query.mega_partner))
    return sourceProps
  }

  updateStateFromValue(field) {
    return (event) => {
      this.setState({ [field]: event.target.value })
    }
  }

  volunteer(event) {
    const vol = event.target.checked
    const req = this.updateRequired(false)
    if (vol) {
      req.phone = 'We need a phone number to coordinate volunteers.'
    } else {
      delete req.phone
    }
    this.setState({ volunteer: vol,
      required: req })
  }

  updateRequired(doUpdate) {
    // This is a separate method because it can change when state or props are changed
    const { user, petition, showAddressFields } = this.props
    const required = this.state.required
    let changeRequired = false
    if (!user.signonId) {
      Object.assign(required, {
        name: 'Name is required.',
        email: 'Email address is required.',
        state: 'State is required.',
        zip: 'Zip code is required.'
      })
      changeRequired = true
    } else {
      delete required.name
      delete required.email
      delete required.state
      delete required.zip
    }
    if (showAddressFields && petition.needs_full_addresses) {
      Object.assign(required, {
        address1: 'Full address is required.',
        city: 'City is required.',
        state: 'State is required.',
        zip: 'Zip code is required.'
      })
      changeRequired = true
    } else {
      delete required.address1
      delete required.city
    }
    if (this.state.country !== 'United States') {
      delete required.state
    }
    if (changeRequired && doUpdate) {
      this.setState({ required })
    }
    return required
  }

  submit(event) {
    event.preventDefault()

    const { dispatch, petition, user } = this.props
    this.updateRequired(true)
    if (this.formIsValid()) {
      const osdiSignature = {
        petition: {
          name: petition.name,
          petition_id: petition.petition_id,
          _links: petition._links
        },
        person: {
          full_name: this.state.name,
          email_addresses: [],
          postal_addresses: []
        },
        comments: this.state.comment
      }
      if (this.state.name) {
        osdiSignature.person.full_name = this.state.name
      } else if (user.given_name) {
        osdiSignature.person.given_name = user.given_name
      }
      if (this.state.email) {
        osdiSignature.person.email_addresses.push({
          address: this.state.email
        })
      }
      if (user.token) {
        osdiSignature.person.identifiers = [user.token]
      }
      if (this.state.phone) {
        osdiSignature.person.phone_numbers = [this.state.phone]
      }
      if (this.state.city) {
        osdiSignature.person.postal_addresses.push({
          locality: this.state.city,
          region: ((this.state.country === 'United States') ? this.state.state : this.state.region),
          postal_code: ((this.state.country === 'United States') ? this.state.zip : this.state.postal),
          country_name: this.state.country
        })
      }
      if (this.state.address1) {
        const lines = [this.state.address1]
        if (this.state.address2) {
          lines.push(this.state.address2)
        }
        osdiSignature.person.postal_addresses[0].address_lines = lines
      }
      dispatch(petitionActions.signPetition(osdiSignature, petition, { redirectOnSuccess: true }))
    }
    this.setState({ submitTried: true })
    return false
  }

  render() {
    const { dispatch, petition, user, query, showAddressFields } = this.props
    const iframeEmbedText = `<iframe src="http://petitions.moveon.org/embed/widget.html?v=3&amp;name=${petition.slug}" class="moveon-petition" id="petition-embed" width="300px" height="500px"></iframe>` // text to be copy/pasted
    const src = this.parseSource()
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
            <input type='hidden' name='source' value={query.source || ''} />
            <input type='hidden' name='r_by' value={query.r_by || ''} />
            <input type='hidden' name='mailing_id' value={query.mailing_id || ''} />
            <input type='hidden' name='fb_test' value={query.fb_test || '0'} />
            <input type='hidden' name='test_group' value={query.test_group || ''} />
            <input type='hidden' name='no_mo' value={query.no_mo || ''} />
            <input type='hidden' name='id' value={((user.token && (/^id:/.test(user.token))) ? user.token.slice(3) : '')} />
            <input type='hidden' name='akid' value={((user.token && (/^akid:/.test(user.token))) ? user.token.slice(5) : '')} />
            <input type='hidden' name='recognized_user' id='recognized_user_field' value={user.signonId ? '1' : '0'} />
            <input type='hidden' name='show_optin_checkbox' value={src.showOptinCheckbox ? '1' : '0'} />

            {((user.signonId)
              ? // Recognized
              <div id='recognized' style={{ marginBottom: '1em' }}>
                <strong>Welcome back {user.given_name}!</strong>
                <div> (Not {user.given_name}? <a onClick={() => { dispatch(sessionActions.unRecognize()) }}>Click here.</a>) </div>
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
                 {this.validationError('email', /* forgiving email regex */ /.+@.+\..+/)}
              </div>
             )}

             {(showAddressFields) ? (
               <div>
                 <CountrySelect
                   value={this.state.country}
                   onChange={(event) => this.setState({ country: event.target.value })}
                 />
                 <input
                   type='text'
                   name='address1'
                   placeholder={petition.needs_full_addresses ? 'Address*' : 'Address'}
                   onChange={this.updateStateFromValue('address1')}
                   onBlur={this.updateStateFromValue('address1')}
                   className='moveon-track-click'
                 />
                 {this.validationError('address1')}
                 <input
                   type='text'
                   name='address2'
                   placeholder='Address (cont.)'
                   className='moveon-track-click'
                   onChange={this.updateStateFromValue('address2')}
                   onBlur={this.updateStateFromValue('address2')}
                 />
                 <input
                   type='text'
                   name='city'
                   placeholder={petition.needs_full_addresses ? 'City*' : 'City'}
                   onChange={this.updateStateFromValue('city')}
                   onBlur={this.updateStateFromValue('city')}
                   className='moveon-track-click'
                 />
                 {this.validationError('city')}
                 <StateOrRegionInput
                   country={this.state.country}
                   stateOnChange={this.updateStateFromValue('state')}
                   regionOnChange={this.updateStateFromValue('region')}
                 />
                 {this.validationError('state')}
                 <ZipOrPostalInput
                   country={this.state.country}
                   zipOnChange={this.updateStateFromValue('zip')}
                   postalOnChange={this.updateStateFromValue('postal')}
                 />
                 {this.validationError('zip', /(\d\D*){5}/)}
               </div>
             ) : ''}

            <textarea className='moveon-track-click' rows='3' cols='20' name='comment' autoComplete='off' placeholder='Comment'></textarea>

            {(petition.collect_volunteers)
              ? (
              <div>
                <input type='checkbox' id='volunteer_box' name='volunteer' value='1' onClick={this.volunteer} /> <label htmlFor='volunteer_box' style={{ display: 'inline' }}>{petition.collect_volunteers}</label>
                {(this.state.volunteer) ? (
                  <div id='phone_div'>
                    <input
                      type='text'
                      name='phone'
                      placeholder='Phone*'
                      className='phone moveon-track-click'
                      onChange={this.updateStateFromValue('phone')}
                      onBlur={this.updateStateFromValue('phone')}
                    />
                    {this.validationError('phone', /* 10 digits*/ /(\d\D*){10}/)}
                  </div>
                ) : ''}
              </div>)
            : ''}

            <button
              type='submit'
              className='xl percent-100 moveon-track-click background-moveon-bright-red'
              id='sign-here-button'
              value='Sign the petition!'
              style={{ marginTop: 7.2 }}
              onClick={this.submit}
            >Sign the petition</button>

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
  dispatch: PropTypes.func,
  query: PropTypes.object,
  showAddressFields: PropTypes.bool
}

function mapStateToProps(store) {
  const user = store.userStore
  return {
    user,
    showAddressFields: (!(user.signonId) || !(user.postal_addresses && user.postal_addresses.length))
  }
}

export default connect(mapStateToProps)(SignatureAddForm)
