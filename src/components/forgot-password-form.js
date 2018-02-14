import React from 'react'
import PropTypes from 'prop-types'

const ThanksMessage = (
  <div>
    An email has been sent containing a link you can use to reset your MoveOn
    Petitions password. <b>Thank you for using MoveOn’s petition website!</b>
  </div>
)

const ForgotPasswordForm = ({ errorList, handleSubmit, getEmailRef, submitted }) => {
  const Form = (
    <div>
      <p>
        Enter your email address here and we’ll send you a link you can use to
        change your password.
      </p>
      <ul className='errors'>{errorList && errorList()}</ul>
      <form method='POST' onSubmit={handleSubmit} className='form-horizontal'>
        <div className='control-group'>
          <label className='control-label' htmlFor='inputEmail'>
            Email:
          </label>
          <div className='controls'>
            <input
              ref={getEmailRef}
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

  return (
    <div className='container'>
      <div className='row'>
        <div className='span6 offset3'>
          <div className='well'>
            <h2 className='legend'>Forgot Password</h2>
            {submitted ? ThanksMessage : Form}
          </div>
        </div>
      </div>
    </div>
  )
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitted: PropTypes.bool,
  errorList: PropTypes.func,
  getEmailRef: PropTypes.func
}

export default ForgotPasswordForm
