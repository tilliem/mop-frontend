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
      const query = this.props.location.query
      if (query.name) {
        dispatch(petitionActions.loadPetition(query.name))
      } else if (query.petition_id) {
        dispatch(petitionActions.loadPetition(query.petition_id))
      }
    }
  }

  render() {
    return (
      <div className='moveon-petitions share container background-moveon-white bump-top-1'>
        {(this.Thanks && this.props.petition ?
          <this.Thanks
            petition={this.props.petition}
            user={this.props.user}
            signatureMessage={this.props.signatureMessage}
            fromSource={this.props.location.query.from_source}
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
  dispatch: PropTypes.func,
  location: PropTypes.object
}

function mapStateToProps(store, ownProps) {
  const pkey = ownProps.location.query.name || ownProps.location.query.petition_id
  const petition = pkey && store.petitionStore.petitions[pkey]
  return {
    petition,
    user: store.userStore,
    searchQuery: {},
    signatureMessage: (petition
                       && petition.petition_id
                       && store.petitionStore.signatureMessages
                       && store.petitionStore.signatureMessages[petition.petition_id])
  }
}

export default connect(mapStateToProps)(ThanksPage)
