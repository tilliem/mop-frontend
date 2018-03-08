/* eslint-disable strict */ // Disabling check because we can't run strict mode. Need global vars.

import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../../containers/nav'
import Footer from 'Theme/footer'

const Wrapper = ({ children, organization, minimalNav, entity }) => (
  <div className='moveon-petitions'>
    <Nav organization={organization} minimal={minimalNav} entity={entity} />
    <main className='main'>
      {children}
    </main>
    <hr />
    <Footer entity={entity} />
  </div>
)


Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  organization: PropTypes.string,
  minimalNav: PropTypes.bool,
  entity: PropTypes.string
}

export default Wrapper
