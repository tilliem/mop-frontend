import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Home extends React.Component {

  render() {
    return (
      <div>
         <h2> Home Page </h2>
      </div>
    )
  }
}

function mapStateToProps(store, ownProps) {
  return {}
}

export default connect(mapStateToProps)(Home)
