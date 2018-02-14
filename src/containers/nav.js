import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavComponent from 'LegacyTheme/nav'

const Nav = ({ user, nav, organization, minimal }) => (
  <NavComponent
    user={user}
    nav={nav}
    organization={organization}
    minimal={minimal}
  />
)

Nav.propTypes = {
  user: PropTypes.object,
  nav: PropTypes.object,
  organization: PropTypes.string,
  minimal: PropTypes.bool
}

function mapStateToProps(store) {
  return {
    user: store.userStore,
    nav: store.navStore
  }
}

export default connect(mapStateToProps)(Nav)
