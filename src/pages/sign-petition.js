import React from 'react'
import PropTypes from 'prop-types'

import 'whatwg-fetch'
import { connect } from 'react-redux'

import Petition from '../components/petition.js'
import { actions as petitionActions } from '../actions/petitionActions.js'

class SignPetition extends React.Component {

  componentWillMount() {
    const { dispatch, params } = this.props
    dispatch(petitionActions.loadPetition(params.petition_slug))
  }

  render() {
    if (!this.props.petition) {
      return (
        <div>
        </div>
      )
    }
    return (
      <div>
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
