/* eslint-disable strict */ // Disabling check because we can't run strict mode. Need global vars.

import React from 'react'
import PropTypes from 'prop-types'
import Nav from './nav.js'
import Footer from './footer.js'

const Wrapper = ({ children, params }) => (
  <div className='moveon-petitions'>
    <Nav organization={params && params.organization || ''} />
    <main className='main'>
      {children}
    </main>
    <hr />
    <Footer />
  </div>
)


Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  params: PropTypes.object
}

export default Wrapper
