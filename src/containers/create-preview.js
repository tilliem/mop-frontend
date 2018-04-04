import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { appLocation } from '../routes.js'

import { submitPetition } from '../actions/createPetitionActions'

import { CreatePreviewRegister } from 'LegacyTheme/create-preview-register'
import { CreatePreview as CreatePreviewComponent } from 'LegacyTheme/create-preview'

class CreatePreview extends React.Component {
  constructor(props) {
    super(props)
    this.renderUserForm = this.renderUserForm.bind(this)
    this.submitPetition = this.submitPetition.bind(this)
  }
  componentDidMount() {
    if (!this.props.hasPetition) appLocation.push('/create_start.html')
  }

  submitPetition() {
    this.props.dispatch(submitPetition())
  }

  renderUserForm() {
    const { user } = this.props
    const Form = CreatePreviewRegister

    return <Form successCallback={this.submitPetition} user={user} />
  }

  render() {
    if (!this.props.hasPetition) return null // We will also redirect in componentDidMount
    return (
      <CreatePreviewComponent
        petition={this.props.petition}
        renderUserForm={this.renderUserForm}
      />
    )
  }
}

CreatePreview.propTypes = {
  hasPetition: PropTypes.bool,
  petition: PropTypes.object,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({ petitionCreateStore, userStore }) {
  return {
    hasPetition: !!petitionCreateStore.title,
    petition: petitionCreateStore,
    user: userStore
  }
}

export default connect(mapStateToProps)(CreatePreview)
