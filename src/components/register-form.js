import React from 'react'
import PropTypes from 'prop-types'

class RegisterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      presubmitErrors: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ presubmitErrors: null })
    }
    this.password.value = ''
    this.passwordConfirm.value = ''
  }

  isValidEmail(email) {
    const regex = /.+@.+\..+/  // Forgiving email regex
    return regex.test(email)
  }

  /**
   * Validates the form for client side errors.
   * If valid returns true otherwise false.
   * If errors it will update the local state `presubmitErrors`
   * @returns {boolean}
   */
  validateForm() {
    const { name, email, password, passwordConfirm } = this
    const errors = []
    if (!name.value.trim().length) {
      errors.push({ message: 'Missing required entry for the Name field.' })
    }
    if (!this.isValidEmail(email.value)) {
      if (!this.email.value.trim().length) {
        errors.push({ message: 'Missing required entry for the Email field.' })
      } else {
        errors.push({ message: 'Invalid entry for the Email field.' })
      }
    }
    if (!password.value.trim().length) {
      errors.push({ message: 'Missing required entry for the Password field.' })
    } else if (password.value.trim() !== passwordConfirm.value.trim()) {
      errors.push({ message: 'Password and PasswordConfirm fields do not match.' })
    }
    if (errors.length) {
      this.setState({ presubmitErrors: errors })
    }
    return !errors.length
  }

  handleSubmit(event) {
    event.preventDefault()
    const { name, email, password, passwordConfirm } = this
    if (this.validateForm()) {
      this.props.onSubmit({
        [name.name]: name.value,
        [email.name]: email.value,
        [password.name]: password.value,
        [passwordConfirm.name]: passwordConfirm.value
      })
    }
  }

  /**
   * Get the current errors as a jsx array.
   * @returns {Array} an jsx array of errors
   */
  errorList() {
    const errors = this.state.presubmitErrors || this.props.errors || []
    return errors.map((error, idx) => <li key={idx}>{error.message}</li>)
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='span6 offset3'>
            <div className='well login clearfix'>
              <h1 className='lanky-header size-xl'>Quick sign up</h1>

              <ul className='errors'>
                {this.errorList()}
              </ul>

              <form method='POST' onSubmit={this.handleSubmit} className='form-horizontal'>
                <input
                  ref={name => (this.name = name)}
                  name='name' className='percent-80 validation_error' type='text' id='inputName' placeholder='Name'
                />
                <input
                  ref={email => (this.email = email)}
                  name='email' className='percent-80 validation_error' type='text' id='inputEmail' placeholder='Email'
                />
                <input
                  name='password' ref={password => (this.password = password)}
                  className='percent-80 validation_error' type='password' id='inputPassword' placeholder='Password'
                />
                <input
                  name='password_confirm' ref={passwordConfirm => (this.passwordConfirm = passwordConfirm)}
                  className='percent-80 validation_error' type='password' id='inputConfirm' placeholder='Confirm Password'
                />
                <div>
                  <div className='bump-bottom-2'>
                    <input value='Register' className='button bump-top-2' type='submit' />
                  </div>
                  <ul className='unstyled inline'>
                    <li className='disclaimer'>By creating an account you agree to receive email messages from MoveOn.org Civic Action and MoveOn.org Political Action. You may unsubscribe at any time.</li>
                  </ul>
                </div>
              </form>
            </div>

            <div className='disclaimer' id='privacy'>
              <p>
                <strong>Privacy Policy (the basics)</strong>:<br /><br /> <strong>MoveOn will never sell your personal information to anyone ever.</strong> For petitions, letters to the editor, and surveys you've signed or completed, we treat your name, city, state, and comments as public information, which means anyone can access and view it. We will not make your street address publicly available, but we may transmit it to your state legislators, governor, members of Congress, or the President as part of a petition. MoveOn will send you updates on this and other important campaigns by email. If at any time you would like to unsubscribe from our email list, you may do so. For our complete privacy policy, <a href='http://petitions.moveon.org/privacy.html' target='_blank'>click here</a>.
              </p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

RegisterForm.propTypes = {
  errors: PropTypes.array,
  onSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default RegisterForm
