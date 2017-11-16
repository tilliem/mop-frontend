import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class PetitionCreatorDashboard extends React.Component {

  render() {
    return (
      <div>
        <h2> Petition Creator Dashboard </h2>
      </div>
    )
  }
}

function mapStateToProps(store, ownProps) {
  return {}
}

export default connect(mapStateToProps)(PetitionCreatorDashboard)
