import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { appLocation } from '../routes.js'

import { CreatePreview as CreatePreviewComponent } from 'LegacyTheme/create-preview'

class CreatePreview extends React.Component {
  componentWillMount() {
    if (!this.props.hasPetition) {
      appLocation.push('/create_start.html')
    }
  }

  render() {
    return (
      <CreatePreviewComponent
        petition={this.props.petition}
      />
    )
  }
}

CreatePreview.propTypes = {
  hasPetition: PropTypes.bool,
  petition: PropTypes.object
}

function mapStateToProps({ petitionCreateStore }) {
  return {
    hasPetition: !!petitionCreateStore.title,
    petition: petitionCreateStore
  }
}

export default connect(mapStateToProps)(CreatePreview)
