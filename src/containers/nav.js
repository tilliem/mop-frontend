import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavComponent from 'LegacyTheme/nav'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpenMobile: false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen() {
    this.setState(state => ({ isOpenMobile: !state.isOpenMobile }))
  }

  render() {
    const { user, nav, organization, minimal } = this.props
    return (
      <NavComponent
        user={user}
        nav={nav}
        organization={organization}
        minimal={minimal}
        toggleOpen={this.toggleOpen}
        isOpenMobile={this.state.isOpenMobile}
      />
    )
  }
}

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
