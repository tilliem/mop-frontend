import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RecentVictoryList from '../components/recentvictory.js'

class Home extends React.Component {

  render() {
    return (
      <div className="container" id="header">
         <h2> Home Page </h2>
         <div className="row front-content">
           <RecentVictoryList />
         </div>
      </div>
    )
  }
}

function mapStateToProps(store, ownProps) {
  return {}
}

export default connect(mapStateToProps)(Home)
