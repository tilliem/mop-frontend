/* eslint-disable strict */ // Disabling check because we can't run strict mode. Need global vars.

import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav'
import Footer from 'LegacyTheme/footer.js'

import Config from '../config'

class Wrapper extends React.Component {
  componentWillMount() {
    if (Config.THEME === 'giraffe') {
      document.documentElement.className = 'giraffe'
    }
  }
  render() {
    const { children, params, routes } = this.props
    return (
      <div className='moveon-petitions'>
        <Nav
          organization={params && params.organization || ''}
          minimal={!!routes[routes.length - 1].minimalNav}
        />
        <main className='main'>
          {children}
        </main>
        <hr />
        <Footer />
      </div>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  params: PropTypes.object,
  routes: PropTypes.array.isRequired
}

export default Wrapper
