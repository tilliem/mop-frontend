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
    if (!petition) {
      if (this.props.location.query.name) {
        dispatch(petitionActions.loadPetition(this.props.location.query.name))
      } else if (this.props.location.query.petition_id) {
        dispatch(petitionActions.loadPetition(this.props.location.query.petition_id))
      }
    }
  }

  render() {
    return (
      <div>
        {(this.Thanks && this.props.petition ?
          <this.Thanks
            petition={this.props.petition}
            user={this.props.user}
            signatureMessage={this.props.signatureMessage}
          />
          : ''
        )}
      </div>
    )
  }

}

ThanksPage.propTypes = {
  petition: PropTypes.object,
  user: PropTypes.object,
  signatureMessage: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(store, ownProps) {
  const pkey = ownProps.location.query.name || ownProps.location.query.petition_id
  const petition = pkey && store.petitionStore.petitions[pkey]
  return {
    petition,
    user: store.userStore,
    signatureMessage: (petition.petition_id
                       && store.signatureMessages
                       && store.signatureMessages[petition.petition_id])
  }
}

export default connect(mapStateToProps)(ThanksPage)
