import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BillBoard from '../components/billboard'

class Home extends React.Component {

  render() {
    return (
      <div>
         <BillBoard />
      </div>
    )
  }
}

function mapStateToProps(store, ownProps) {
  return {}
}

export default connect(mapStateToProps)(Home)
