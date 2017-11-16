import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Nav from '../components/nav.js'
import Footer from '../components/footer.js'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Nav />
         <h2> Home Page </h2>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(store, ownProps) {
  return {}
}

export default connect(mapStateToProps)(Home)
