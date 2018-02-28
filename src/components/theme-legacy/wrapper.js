/* eslint-disable strict */ // Disabling check because we can't run strict mode. Need global vars.

import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'
import Nav from '../../containers/nav'
import Footer from 'LegacyTheme/footer.js'

const Wrapper = ({ children, params, routes }) => (
  <DocumentTitle title='MoveOn Petitions'>
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
  </DocumentTitle>
)


Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  params: PropTypes.object,
  routes: PropTypes.array.isRequired
}

export default Wrapper
