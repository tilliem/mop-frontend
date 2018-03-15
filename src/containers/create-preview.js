import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { appLocation } from '../routes.js'

import { registerAndSubmitPetition } from '../actions/createPetitionActions'

import { CreatePreview as CreatePreviewComponent } from 'LegacyTheme/create-preview'

class CreatePreview extends React.Component {
  constructor(props) {
    super(props)
    this.registerAction = this.registerAction.bind(this)
  }
  componentDidMount() {
    if (!this.props.hasPetition) appLocation.push('/create_start.html')
  }

  registerAction(userFields) {
    return registerAndSubmitPetition(userFields)
  }

  render() {
    if (!this.props.hasPetition) return null // We will also redirect in componentDidMount
    return (
      <CreatePreviewComponent
        petition={this.props.petition}
        registerAction={this.registerAction}
      />
    )
  }
}

CreatePreview.propTypes = {
  hasPetition: PropTypes.bool,
  petition: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({ petitionCreateStore }) {
  return {
    hasPetition: !!petitionCreateStore.title,
    petition: petitionCreateStore
  }
}

export default connect(mapStateToProps)(CreatePreview)
