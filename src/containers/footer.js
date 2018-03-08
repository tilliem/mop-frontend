import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import FooterComponent from 'Theme/footer'

export const Footer = ({ petitionEntity, location }) => {
  let entity = petitionEntity
  if (location.pathname === '/pac/') {
    entity = 'pac'
  }

  return <FooterComponent entity={entity} />
}

Footer.propTypes = {
  petitionEntity: PropTypes.string,
  location: PropTypes.object
}

function mapStateToProps(store, ownProps) {
  // Fetch the petition only if the route has a `petition_slug` param
  const petitionSlug = ownProps.params && ownProps.params.petition_slug
  const petition = petitionSlug && store.petitionStore.petitions[petitionSlug]

  return {
    petitionEntity: petition && petition.entity
  }
}

export default withRouter(connect(mapStateToProps)(Footer))
