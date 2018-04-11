import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Petition from 'Theme/petition'
import { LoadableThanks } from '../loaders/'
import { actions as petitionActions } from '../actions/petitionActions.js'
import { appLocation } from '../routes.js'

class SignPetition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      floatingSignVisible: false
    }
    this.setRef = this.setRef.bind(this)
    this.getAdminLink = this.getAdminLink.bind(this)
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
    LoadableThanks.preload()
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
    const f = this.state.width < 768 ? 'mobile' : 'desktop'
    // Forms are hidden per petition settings or user state, so we find the first rendered
    const firstInput =
      this[`${f}-nameInput`] ||
      this[`${f}-countryInput`] ||
      this[`${f}-commentInput`] ||
      null
    if (firstInput) firstInput.focus()
  }

  getAdminLink() {
    const { user, petition } = this.props
    if (!user || !user.custom_fields || !user.custom_fields.admin) return false

    return `${user.custom_fields.admin_petition_baseurl}?petition_id=${
      petition.petition_id
    }`
  }

  setRef({ isMobile }) {
    const formName = isMobile ? 'mobile' : 'desktop'
    return input => input && (this[`${formName}-${input.name}Input`] = input)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth })
  }

  checkOrgPathMatches(petition, orgPath) {
    const { creator } = petition._embedded
    // Petition has org that doesn't match URL
    if (creator.source && creator.source !== orgPath) {
      appLocation.push(`/${creator.source}/sign/${petition.name}`)
      return false
    }
    // URL has org that doesn't match petition
    if (orgPath && orgPath !== creator.source) {
      appLocation.push(`/sign/${petition.name}`)
      return false
    }
    return true
  }

  render() {
    const p = this.props.petition
    if (!p) {
      return <div />
    }
    const creator = (p._embedded && p._embedded.creator) || {
      name: p.contact_name
    }
    const petitionBy =
      creator.name + (creator.organization ? `, ${creator.organization}` : '')
    const outOfDate =
      p.tags && p.tags.filter(t => t.name === 'possibly_out_of_date').length

    return (
      <div className='moveon-petitions sign container'>
        <Petition
          petition={this.props.petition}
          user={this.props.user}
          adminLink={this.getAdminLink()}
          query={this.props.location.query}
          petitionBy={petitionBy}
          outOfDate={outOfDate}
          isFloatingSignVisible={this.state.floatingSignVisible}
          onClickFloatingSign={this.onClickFloatingSign}
          hideFloatingSign={() => this.setState({ floatingSignVisible: false })}
          showFloatingSign={() => this.setState({ floatingSignVisible: true })}
          setRef={this.setRef}
        />
      </div>
    )
  }
}

SignPetition.propTypes = {
  petition: PropTypes.object,
  user: PropTypes.object,
  params: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(store, ownProps) {
  const petition = store.petitionStore.petitions[ownProps.params.petition_slug]
  return {
    petition,
    sign_success:
      petition && store.petitionStore.signatureStatus[petition.petition_id],
    user: store.userStore
  }
}

export default connect(mapStateToProps)(SignPetition)
