import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SearchPage extends React.Component {

  render() {
    return (
      <div>
        <h2> Search Page </h2>
      </div>
    )
  }
}

function mapStateToProps(store, ownProps) {
  return {}
}

export default connect(mapStateToProps)(SearchPage)
