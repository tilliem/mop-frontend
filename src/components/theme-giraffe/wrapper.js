import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../../containers/nav'
import Footer from 'LegacyTheme/footer.js'

const Wrapper = ({ children, params, routes }) => (
  <div id='wrapper' className='giraffe petition'>
    <Nav
      organization={params && params.organization || ''}
      minimal={!!routes[routes.length - 1].minimalNav}
    />
    <main id='content'>
      {children}
    </main>
    <hr />
    <Footer />
  </div>
)


Wrapper.propTypes = {
  children: PropTypes.object.isRequired,
  params: PropTypes.object,
  routes: PropTypes.array.isRequired
}

export default Wrapper
