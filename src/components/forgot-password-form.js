import React from 'react'
import PropTypes from 'prop-types'

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      presubmitErrors: [],
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  isValidEmail(email) {
    const regex = /.+@.+\..+/ // Forgiving email regex
    return regex.test(email)
  }

  /**
   * Validates the form for client side errors.
   * If valid returns true otherwise false.
   * If errors it will update the local state `presubmitErrors`
   * @returns {boolean}
   */
  validateForm() {
    const errors = []
    if (!this.isValidEmail(this.email.value)) {
      if (!this.email.value.trim().length) {
        errors.push({ message: 'Missing required entry for the Email field.' })
      } else {
        errors.push({ message: 'Invalid entry for the Email field.' })
      }
    }
    if (errors.length) {
      this.setState({ presubmitErrors: errors })
    }
    return !errors.length
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.validateForm()) {
      this.props.onSubmit(this.email.value).then(() => {
        this.setState({ submitted: true })
      })
    }
  }

  /**
   * Get the current errors as a jsx array.
   * @returns {Array} an jsx array of errors
   */
  errorList() {
    return this.state.presubmitErrors.map((error, idx) => <li key={idx}>{error.message}</li>)
  }

  renderThanks() {
    return (
      <div>
        An email has been sent containing a link you can use to reset your
        MoveOn Petitions password.{' '}
        <b>Thank you for using MoveOn’s petition website!</b>
      </div>
    )
  }

  renderForm() {
    return (
      <div>
        <p>
          Enter your email address here and we’ll send you a link you can use to
          change your password.
        </p>
        <ul className='errors'>{this.errorList()}</ul>

        <form
          method='POST'
          onSubmit={this.handleSubmit}
          className='form-horizontal'
        >
          <div className='control-group'>
            <label className='control-label' htmlFor='inputEmail'>
              Email:
            </label>
            <div className='controls'>
              <input
                ref={email => (this.email = email)}
                name='email'
                className='percent-80'
                type='text'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='control-group'>
            <div className='controls'>
              <input type='submit' value='Submit' className='button' />
            </div>
          </div>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='span6 offset3'>
            <div className='well'>
              <h2 className='legend'>Forgot Password</h2>
              {this.state.submitted ? this.renderThanks() : this.renderForm()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func
}

export default ForgotPasswordForm
