import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoginForm from '../components/login-form'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(fields) {
    // Not implemented yet
    alert(fields)
    // this.props.dispatch(sessionActions.login(fields))
  }

  render() {
    return (
      <div className='moveon-petitions'>
        <LoginForm
          errors={this.props.loginErrors}
          onSubmit={this.handleSubmit}
          isSubmitting={this.props.isSubmitting}
        />
      </div>
    )
  }
}

Login.propTypes = {
  loginErrors: PropTypes.array,
  dispatch: PropTypes.func,
  isSubmitting: PropTypes.bool
}

function mapStateToProps({ userStore = {} }) {
  return {
    loginErrors: userStore.loginErrors || [],
    isSubmitting: !!userStore.isSubmitting
  }
}

export default connect(mapStateToProps)(Login)
