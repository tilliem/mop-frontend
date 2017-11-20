import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BillBoard from '../components/billboard'
import SearchBar from '../components/searchbar'

class Home extends React.Component {

  render() {
    return (
      <div className="container background-moveon-white bump-top-1">
         <BillBoard />
         <SearchBar />
      </div>
    )
  }
}

function mapStateToProps(store, ownProps) {
  return {}
}

export default connect(mapStateToProps)(Home)
