import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions as accountActions } from '../actions/accountActions'
import { appLocation } from '../routes'

class UpdateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      presubmitErrors: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.errorList = this.errorList.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formErrors.length) {
      this.setState({ presubmitErrors: null })
    }
  }

    /**
   * Validates the form for client side errors.
   * If valid returns true otherwise false.
   * If errors it will update the local state `presubmitErrors`
   * @returns {boolean}
   */
  validateForm() {
    const { name, zip } = this
    const errors = []
    if (name && !name.value.trim().length) {
      errors.push({ message: 'Missing required entry for the Name field.' })
    }
    if (zip && !zip.value.trim().length) {
      errors.push({ message: 'Missing required entry for the ZIP Code field.' })
    }
    if (errors.length) {
      this.setState({ presubmitErrors: errors })
    }
    return !errors.length
  }

  handleSubmit(event) {
    event.preventDefault()
    const { name, zip } = this
    if (this.validateForm()) {
      const fields = {
        [name.name]: name.value,
        [zip.name]: zip.value
      }

      const { successCallback, dispatch } = this.props
      dispatch(accountActions.update(fields, successCallback))
    }
  }

  /**
   * Get the current errors as a jsx array.
   * @returns {Array} an jsx array of errors
   */
  errorList() {
    const errors = this.state.presubmitErrors || this.props.formErrors || []
    return errors.map((error, idx) => <li key={idx}>{error.message}</li>)
  }

  render() {
    const RegisterComponent = this.props.form // allow overriding the form, TODO: have default
    return (
      <RegisterComponent
        errorList={this.errorList}
        handleSubmit={this.handleSubmit}
        setRef={input => input && (this[input.name] = input)}
        isSubmitting={this.props.isSubmitting}
      />
    )
  }
}

UpdateUser.defaultProps = {
  successCallback: () => appLocation.push('/sign/georgia-add-outkast-to')
}

UpdateUser.propTypes = {
  formErrors: PropTypes.array,
  dispatch: PropTypes.func,
  isSubmitting: PropTypes.bool,
  form: PropTypes.node,
  successCallback: PropTypes.func
}

function mapStateToProps({ userStore = {} }) {
  return {
    formErrors: userStore.updateErrors || [],
    isSubmitting: !!userStore.isSubmittingUpdate
  }
}

export default connect(mapStateToProps)(UpdateUser)
