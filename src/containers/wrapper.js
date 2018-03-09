import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import WrapperComponent from 'Theme/wrapper'

export const Wrapper = ({
  petitionEntity,
  location,
  children,
  params,
  routes
}) => {
  let entity = petitionEntity
  if (location.pathname === '/pac/') {
    entity = 'pac'
  }

  return (
    <WrapperComponent
      entity={entity}
      organization={(params && params.organization) || ''}
      minimalNav={!!routes[routes.length - 1].minimalNav}
    >
      {children}
    </WrapperComponent>
  )
}

Wrapper.propTypes = {
  petitionEntity: PropTypes.string,
  location: PropTypes.object,
  children: PropTypes.object.isRequired,
  params: PropTypes.object,
  routes: PropTypes.array.isRequired
}

function mapStateToProps(store, ownProps) {
  // Fetch the petition only if the route has a `petition_slug` param
  const petitionSlug = ownProps.params && ownProps.params.petition_slug
  const petition = petitionSlug && store.petitionStore.petitions[petitionSlug]

  return {
    petitionEntity: petition && petition.entity
  }
}

export default connect(mapStateToProps)(Wrapper)
