import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { formatDate } from '../lib'
import { flagComment } from '../actions/petitionActions'

class SignatureListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flagged: false
    }
  }

  flagComment(commentId) {
    this.props.dispatch(flagComment(commentId))
    this.setState({ flagged: true })
  }

  render() {
    const { user, createdDate, number, comments, commentId } = this.props
    const { city, state, name } = user
    const location = ((!city) ? state : `${city}, ${state}`)
    const fromLocation = ((location === '') ? '' : `from ${location}`)
    const date = new Date(createdDate)

    return (
      <li>
        <div className='signer'>
          <span className='signer-number'>{number}</span>{' '}
          <b>{name}</b> {fromLocation} signed this petition on {formatDate(date)}.
        </div>
        {comments ?
          <div className='quoteboxup'>
            {this.state.flagged
             ? // clicked to flag
              <div>
                <b>Thanks for flagging this comment.</b>
                <p>If enough users complain about this comment it will be hidden on the site.</p>
              </div>
             : // expose flag button
              <div className='pull-right'>
                <a
                  className='btn btn-mini'
                  title='Flag comment as inappropriate'
                  onClick={() => this.flagComment(commentId)}
                >
                  <i className='icon-flag'></i>
                </a>
              </div>
             }
            <p>{comments}</p>
          </div>
         : null
        }
      </li>
    )
  }
}

SignatureListItem.propTypes = {
  user: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  createdDate: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  comments: PropTypes.string,
  commentId: PropTypes.number,
  dispatch: PropTypes.func
}

export default connect()(SignatureListItem)
export const WrappedComponent = SignatureListItem
