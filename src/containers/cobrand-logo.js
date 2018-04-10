/* eslint-disable camelcase */
import React from 'react'
import { Link, withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CobrandLogo extends React.Component {
  renderLogo() {
    const { cobrand } = this.props
    return (
      <img
        className='org_logo'
        src={cobrand.logo_image_url}
        alt={`${cobrand.organization} logo`}
      />
    )
  }

  render() {
    const { cobrand } = this.props
    if (!cobrand) return null

    if (cobrand.browser_url) {
      return <Link to={cobrand.browser_url}>{this.renderLogo()}</Link>
    }

    return this.renderLogo()
  }
}

const getCobrandFromPetition = (petition = {}) => {
  // grab the sponsor / creator properties from _embedded if it exists
  const { _embedded: { sponsor, creator } = {} } = petition
  const branding = sponsor || creator
  if (!branding) return null

  const { organization_logo_image_url, organization, browser_url } = branding
  if (!organization_logo_image_url) return null

  return {
    logo_image_url: organization_logo_image_url, // format of the org api
    organization,
    browser_url
  }
}

const mapStateToProps = ({ navStore, petitionStore }, { params }) => {
  let cobrand

  // Will be present we are at an org url
  const orgName = params && params.organization

  // Will be present if we are viewing a petition
  const petitionSlug = params && params.petition_slug
  const petition = petitionSlug && petitionStore.petitions[petitionSlug]

  if (orgName) {
    // check the url for an organization
    cobrand = navStore.orgs[orgName]
  } else if (petition) {
    // check the currently viewed petition
    cobrand = getCobrandFromPetition(petition)
  }
  return { cobrand }
}

CobrandLogo.propTypes = {
  cobrand: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(CobrandLogo))
