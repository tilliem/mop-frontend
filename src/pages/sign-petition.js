import React from 'react'
import PropTypes from 'prop-types'

import 'whatwg-fetch'
import { connect } from 'react-redux'

import Petition from '../components/petition.js'
import { actions as petitionActions } from '../actions/petitionActions.js'
import { appLocation } from '../routes.js'

class SignPetition extends React.Component {

  componentWillMount() {
    const { dispatch, params, petition } = this.props
    dispatch(petitionActions.loadPetition(params.petition_slug))
    if (petition) {
      this.checkOrgPathMatches(petition, params.organization)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { params, petition } = nextProps
    if (petition) {
      this.checkOrgPathMatches(petition, params.organization)
    }
  }

  checkOrgPathMatches(petition, orgPath) {
    const { creator } = petition._embedded
    // Petition has org that doesn't match URL
    if (creator.source && (creator.source !== orgPath)) {
      appLocation.push(`/${creator.source}/sign/${petition.name}`)
      return false
    }
    // URL has org that doesn't match petition
    if (orgPath && (orgPath !== creator.source)) {
      appLocation.push(`/sign/${petition.name}`)
      return false
    }
    return true
  }

  render() {
    if (!this.props.petition) {
      return (
        <div>
        </div>
      )
    }
    return (
      <div className='moveon-petitions sign'>
        <Petition
          petition={this.props.petition}
          query={this.props.location.query}
        />
      </div>
    )
  }

}

SignPetition.propTypes = {
  petition: PropTypes.object,
  params: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(store, ownProps) {
  const petition = store.petitionStore.petitions[ownProps.params.petition_slug]
  return {
    petition,
    sign_success: petition && store.petitionStore.signatureStatus[petition.petition_id]
  }
}

export default connect(mapStateToProps)(SignPetition)
