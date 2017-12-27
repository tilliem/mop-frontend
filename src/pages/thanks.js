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
          <this.Thanks searchQuery={this.props.searchQuery} user={this.props.user} /> :
          ''
        )}
      </div>
    )
  }

}

ThanksPage.propTypes = {
  searchQuery: PropTypes.object,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps(store, ownProps) {
  return {
    searchQuery: '',
    user: store.userStore
  }
}

export default connect(mapStateToProps)(ThanksPage)
