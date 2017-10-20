import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { thanksLoader } from '../loaders/petition.js'
import { actions as petitionActions } from '../actions/petitionActions.js'

class ThanksPage extends React.Component {
  componentWillMount() {
    const self = this
    thanksLoader().then((deps) => {
      self.Thanks = deps.Thanks.default
      self.forceUpdate()
    })

    const { dispatch, petition } = this.props
    if (!petition && this.props.location.query.name) {
      dispatch(petitionActions.loadPetition(this.props.location.query.name))
    }
  }

  render() {
    return (
      <div>
        <div>test loaded</div>
        {(this.Thanks && this.props.petition ?
          <this.Thanks petition={this.props.petition} /> :
          ''
        )}
      </div>
    )
  }

}

ThanksPage.propTypes = {
  petition: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(store, ownProps) {
  const pkey = ownProps.location.query.name || ownProps.location.query.petition_id
  return {
    petition: pkey && store.petitionStore.petitions[pkey]
  }
}

export default connect(mapStateToProps)(ThanksPage)
