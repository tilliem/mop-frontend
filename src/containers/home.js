import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Home as HomeComponent } from 'Theme/home'

const Home = ({ params, nav, isPac }) => {
  const orgName = params.organization
  const orgProps = {
    orgName,
    isOrganization: Boolean(orgName),
    orgData: (nav && nav.orgs && nav.orgs[orgName]) || {}
  }

  return <HomeComponent {...orgProps} isPac={isPac} />
}

Home.propTypes = {
  nav: PropTypes.object,
  params: PropTypes.object,
  isPac: PropTypes.bool
}

function mapStateToProps(store) {
  return {
    nav: store.navStore
  }
}

export default connect(mapStateToProps)(Home)
