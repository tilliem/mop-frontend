import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../../lib'

const SignatureListItem = ({
  user,
  number,
  comments,
  fromLocation,
  date,
  isFlagged,
  onFlag
}) => (
  <li>
    <div className='signer'>
      <span className='signer-number'>{number}</span> <b>{user.name}</b>{' '}
      {fromLocation} signed this petition on {formatDate(date)}.
    </div>
    {comments ? (
      <div className='quoteboxup'>
        {isFlagged ? (
          // clicked to flag
          <div>
            <b>Thanks for flagging this comment.</b>
            <p>
              If enough users complain about this comment it will be hidden on
              the site.
            </p>
          </div>
        ) : (
          // expose flag button
          <div className='pull-right'>
            <a
              className='btn btn-mini'
              title='Flag comment as inappropriate'
              onClick={onFlag}
            >
              <i className='icon-flag' />
            </a>
          </div>
        )}
        <p>{comments}</p>
      </div>
    ) : null}
  </li>
)

SignatureListItem.propTypes = {
  user: PropTypes.object,
  number: PropTypes.number,
  fromLocation: PropTypes.string,
  date: PropTypes.object,
  isFlagged: PropTypes.bool,
  onFlag: PropTypes.func,
  comments: PropTypes.string
}

export default SignatureListItem
