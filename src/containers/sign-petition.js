import React from 'react'
import PropTypes from 'prop-types'

import 'whatwg-fetch'
import { connect } from 'react-redux'

import Petition from 'LegacyTheme/petition'
import { thanksLoader } from '../loaders/petition.js'
import { actions as petitionActions } from '../actions/petitionActions.js'

class SignPetition extends React.Component {

  componentWillMount() {
    const { dispatch, params } = this.props
    dispatch(petitionActions.loadPetition(params.petition_slug))
  }

  componentDidMount() {
    // Lazy-load thanks page component
    thanksLoader()
  }

  render() {
    const p = this.props.petition
    if (!p) {
      return (
        <div>
        </div>
      )
    }
    const creator = ((p._embedded && p._embedded.creator) || { name: p.contact_name })
    const petitionBy = creator.name + (creator.organization
      ? `, ${creator.organization}`
      : '')
    const outOfDate = (p.tags && p.tags.filter(t => t.name === 'possibly_out_of_date').length)

    return (
      <div className='moveon-petitions sign'>
        <Petition
          petition={this.props.petition}
          query={this.props.location.query}
          petitionBy={petitionBy}
          outOfDate={outOfDate}
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
