import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

class LoginForm extends React.Component {
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
    const { email, password } = this
    const errors = []
    if (!this.isValidEmail(email.value)) {
      if (!this.email.value.trim().length) {
        errors.push({ message: 'Missing required entry for the Email field.' })
      } else {
        errors.push({ message: 'Invalid entry for the Email field.' })
      }
    }
    if (!password.value.trim().length) {
      errors.push({ message: 'Missing required entry for the Password field.' })
    }
    if (errors.length) {
      this.setState({ presubmitErrors: errors })
    }
    return !errors.length
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.validateForm()) {
      this.props.onSubmit({
        email: this.email.value,
        password: this.password.value
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
              <h1 className='lanky-header size-xl'>It’s time to log in!</h1>

              <ul className='errors'>
                {this.errorList()}
              </ul>

              <form method='POST' onSubmit={this.handleSubmit}>
                <input
                  ref={email => (this.email = email)}
                  type='text'
                  name='email'
                  placeholder='Email'
                />
                <input
                  ref={password => (this.password = password)}
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <div>
                  <div className='bump-bottom-2'>
                    <input
                      type='submit'
                      value='Login'
                      className='button bump-top-2'
                    />
                  </div>
                  <ul className='unstyled inline size-small'>
                    <li>
                      <Link to='/login/forgot_password.html'>
                        Forgot your password?
                      </Link>
                    </li>
                    <li>
                      Never used MoveOn’s petition website?{' '}
                      <Link to='/login/register.html'>Sign up now.</Link>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  errors: PropTypes.array,
  onSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default LoginForm
