import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import HotPetitons from '../components/legacy/hot-petitions'
import { loadTopPetitions } from '../actions/petitionActions.js'

class TopPetitions extends React.Component {
  componentDidMount() {
    const { pac, megapartner, topPetitions, loadPetitions } = this.props
    if (!topPetitions) {
      loadPetitions(pac, megapartner)
    }
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
  pac: PropTypes.number,
  megapartner: PropTypes.string,
  source: PropTypes.string,
  topPetitions: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadPetitions: PropTypes.func,
  fullWidth: PropTypes.bool
}

const mapStateToProps = (store, ownProps) => {
  const { pac, megapartner } = ownProps
  const topPetitionsState = (store.petitionStore.topPetitions || {})
  // TopPetitionsKey must not just be truthily equal but exact
  // eslint-disable-next-line no-unneeded-ternary
  const topPetitionsKey = `${pac ? 1 : 0}--${megapartner ? megapartner : ''}`
  const topPetitionsProp = (
    typeof topPetitionsState[topPetitionsKey] === 'undefined'
  ) ? false : topPetitionsState[topPetitionsKey].map(petitionId => store.petitionStore.petitions[petitionId])
  return {
    topPetitions: topPetitionsProp
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadPetitions: (pac, megapartner) =>
    dispatch(loadTopPetitions(pac, megapartner))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopPetitions)
