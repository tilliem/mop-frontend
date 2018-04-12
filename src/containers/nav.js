import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavComponent from 'Theme/nav'

import { actions as sessionActions } from '../actions/sessionActions.js'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpenMobile: false,
      openSections: []
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.close = this.close.bind(this)
    this.toggleSection = this.toggleSection.bind(this)
  }

  toggleOpen() {
    this.setState(state => ({ isOpenMobile: !state.isOpenMobile }))
  }

  toggleSection(name) {
    return () => {
      this.setState(state => {
        let newArr = state.openSections
        if (newArr.indexOf(name) === -1) newArr.push(name)
        else newArr = newArr.filter(section => section !== name)

        return { openSections: newArr }
      })
    }
  }

  close() {
    this.setState({ isOpenMobile: false })
  }

  render() {
    const { user, nav, organization, minimal, entity, dispatch } = this.props
    return (
      <NavComponent
        user={user}
        nav={nav}
        organization={organization}
        minimal={minimal}
        entity={entity}
        close={this.close}
        toggleOpen={this.toggleOpen}
        isOpenMobile={this.state.isOpenMobile}
        toggleSection={this.toggleSection}
        openSections={this.state.openSections}
        onLogout={() => dispatch(sessionActions.unRecognize({ redirect: '/' }))}
      />
    )
  }
}

Nav.propTypes = {
  user: PropTypes.object,
  nav: PropTypes.object,
  organization: PropTypes.string,
  minimal: PropTypes.bool,
  entity: PropTypes.string,
  dispatch: PropTypes.func
}

function mapStateToProps(store) {
  return {
    user: store.userStore,
    nav: store.navStore
  }
}

export default connect(mapStateToProps)(Nav)
