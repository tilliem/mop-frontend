import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RegisterForm from '../components/register-form'
import { actions as accountActions } from '../actions/accountActions'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(fields) {
    this.props.dispatch(accountActions.register(fields))
  }

  render() {
    return (
      <div className='moveon-petitions'>
        <RegisterForm
          errors={this.props.formErrors}
          onSubmit={this.handleSubmit}
          isSubmitting={this.props.isSubmitting}
        />
      </div>
    )
  }
}

Register.propTypes = {
  formErrors: PropTypes.array,
  dispatch: PropTypes.func,
  isSubmitting: PropTypes.bool
}

function mapStateToProps({ accountRegisterStore = {} }) {
  return {
    formErrors: accountRegisterStore.formErrors || [],
    isSubmitting: !!accountRegisterStore.isSubmitting
  }
}

export default connect(mapStateToProps)(Register)
