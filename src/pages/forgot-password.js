import React from 'react'

import ForgotPasswordForm from '../components/forgot-password-form'
import { actions as accountActions } from '../actions/accountActions'

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(email) {
    return accountActions.forgotPassword(email)
  }

  render() {
    return (
      <div className='moveon-petitions'>
        <ForgotPasswordForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default ForgotPassword
