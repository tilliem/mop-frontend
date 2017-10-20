import React from 'react'
import PropTypes from 'prop-types'

import 'whatwg-fetch'
import { connect } from 'react-redux'

import Petition from '../components/petition.js'
import { appLocation } from '../routes.js'
import { actions as petitionActions } from '../actions/petitionActions.js'

class SignPetition extends React.Component {

  componentWillMount() {
    const { dispatch, params } = this.props
    dispatch(petitionActions.loadPetition(params.petition_slug))
  }

  componentWillUpdate(nextProps) {
    if (nextProps.sign_success === 'success') {
      appLocation.push(`thanks.html?petition_id=${
                        nextProps.petition.petition_id
                        }&name=${nextProps.petition.name}`
                      )
    }
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
        <Petition petition={this.props.petition} />
      </div>
    )
  }

}

SignPetition.propTypes = {
  petition: PropTypes.object,
  params: PropTypes.object,
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
