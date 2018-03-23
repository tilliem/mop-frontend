import React from 'react'
import PropTypes from 'prop-types'

import 'whatwg-fetch'
import { connect } from 'react-redux'

import Petition from 'Theme/petition'
import { thanksLoader } from '../loaders/petition.js'
import { actions as petitionActions } from '../actions/petitionActions.js'
import { appLocation } from '../routes.js'

class SignPetition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
    this.setRef = this.setRef.bind(this)
    this.onClickFloatingSign = this.onClickFloatingSign.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentWillMount() {
    const { dispatch, params, petition } = this.props
    dispatch(petitionActions.loadPetition(params.petition_slug))
    if (petition) {
      this.checkOrgPathMatches(petition, params.organization)
    }
  }

  componentDidMount() {
    // Lazy-load thanks page component
    thanksLoader()
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillReceiveProps(nextProps) {
    const { params, petition } = nextProps
    if (petition) {
      this.checkOrgPathMatches(petition, params.organization)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  onClickFloatingSign() {
    // if we are at the mobile breakpoint, TODO
    // otherwise, focus the form.
    if (this.state.width < 768) {
      // TODO
    } else {
      const firstInput = this.nameInput || this.countryInput || this.commentInput
      if (firstInput) firstInput.focus()
    }
  }

  setRef(input) {
    return input && (this[`${input.name}Input`] = input)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth })
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
      <div className='moveon-petitions sign container'>
        <Petition
          petition={this.props.petition}
          query={this.props.location.query}
          petitionBy={petitionBy}
          outOfDate={outOfDate}
          onClickFloatingSign={this.onClickFloatingSign}
          setRef={this.setRef}
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
