import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import HotPetitons from 'LegacyTheme/hot-petitions'
import { loadTopPetitions } from '../actions/petitionActions.js'

class TopPetitions extends React.Component {
  componentDidMount() {
    const { pac, megapartner, loadPetitions } = this.props
    loadPetitions(pac, megapartner)
  }

  render() {
    const { topPetitions, source, fullWidth } = this.props
    return (
      <HotPetitons
        fullWidth={fullWidth}
        topPetitions={topPetitions}
        source={source}
      />
    )
  }
}

TopPetitions.propTypes = {
  pac: PropTypes.bool,
  megapartner: PropTypes.string,
  source: PropTypes.string,
  topPetitions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadPetitions: PropTypes.func,
  fullWidth: PropTypes.bool
}

const mapStateToProps = (store, ownProps) => {
  const { pac, megapartner } = ownProps
  const topPetitionsState = store.petitionStore.topPetitions || {}

  // eslint-disable-next-line no-unneeded-ternary
  const topPetitionsKey = `${pac ? 1 : 0}--${megapartner ? megapartner : ''}`
  const topPetitionIds = topPetitionsState[topPetitionsKey] || []

  return {
    topPetitions: topPetitionIds.map(
      petitionId => store.petitionStore.petitions[petitionId]
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadPetitions: (pac, megapartner) =>
    dispatch(loadTopPetitions(pac, megapartner))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopPetitions)
